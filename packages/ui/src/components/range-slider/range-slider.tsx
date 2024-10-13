import { h, RefObject } from 'preact'
import { useCallback, useRef } from 'preact/hooks'

import { Event, EventHandler } from '../../types/event-handler.js'
import { FocusableComponentProps } from '../../types/focusable-component-props.js'
import { createClassName } from '../../utilities/create-class-name.js'
import { createComponent } from '../../utilities/create-component.js'
import { getCurrentFromRef } from '../../utilities/get-current-from-ref.js'
import { noop } from '../../utilities/no-op.js'
import styles from './range-slider.module.css'

export interface RangeSliderProps
  extends FocusableComponentProps<HTMLInputElement> {
  disabled?: boolean
  increment?: number
  maximum: number
  minimum: number
  onInput?: EventHandler.onInput<HTMLInputElement>
  onNumericValueInput?: EventHandler.onValueChange<number>
  onValueInput?: EventHandler.onValueChange<string>
  value: string
}

export const RangeSlider = createComponent<HTMLInputElement, RangeSliderProps>(
  function (
    {
      disabled = false,
      increment = 1,
      maximum,
      minimum,
      onInput = noop,
      onKeyDown = noop,
      onNumericValueInput = noop,
      onValueInput = noop,
      propagateEscapeKeyDown = true,
      value,
      ...rest
    },
    ref
  ) {
    const inputElementRef: RefObject<HTMLInputElement> = useRef(null)

    if (minimum >= maximum) {
      throw new Error('`minimum` must be less than `maximum`')
    }

    const renderProgressTrack = useCallback(
      function (value: number) {
        const inputElement = getCurrentFromRef(inputElementRef)
        const inputElementWidth = inputElement.offsetWidth
        const sliderThumbElementWidth = inputElement.offsetHeight
        const percentage = value / maximum
        const px = `${
          percentage * (inputElementWidth - sliderThumbElementWidth) +
          sliderThumbElementWidth / 2
        }px`
        inputElement.style.background = `linear-gradient(to right, var(--figma-color-bg-brand) ${px}, transparent ${px})`
      },
      [maximum]
    )

    const handleInput = useCallback(
      function (event: Event.onInput<HTMLInputElement>) {
        onInput(event)
        const value = event.currentTarget.value
        onValueInput(value)
        const numericValue = parseFloat(value)
        onNumericValueInput(numericValue)
        renderProgressTrack(numericValue)
      },
      [onInput, onNumericValueInput, onValueInput, renderProgressTrack]
    )

    const handleKeyDown = useCallback(
      function (event: Event.onKeyDown<HTMLInputElement>) {
        onKeyDown(event)
        if (event.key === 'Escape') {
          if (propagateEscapeKeyDown === false) {
            event.stopPropagation()
          }
          event.currentTarget.blur()
        }
      },
      [onKeyDown, propagateEscapeKeyDown]
    )

    const refCallback = useCallback(
      function (inputElement: null | HTMLInputElement) {
        inputElementRef.current = inputElement
        if (ref === null) {
          return
        }
        if (typeof ref === 'function') {
          ref(inputElement)
          return
        }
        ref.current = inputElement
      },
      [ref]
    )

    return (
      <label
        class={createClassName([
          styles.rangeSlider,
          disabled === true ? styles.disabled : null
        ])}
      >
        <input
          {...rest}
          ref={refCallback}
          class={styles.input}
          disabled={disabled}
          max={maximum}
          min={minimum}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          step={increment}
          type="range"
          value={value}
        />
        <div class={styles.box} />
      </label>
    )
  }
)
