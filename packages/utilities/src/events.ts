export type EventHandler = {
  name: string
  handler: (...args: any) => void
}

const eventHandlers: Record<string, EventHandler> = {}

let currentId = 0

/**
 * Registers an event `handler` for the given event `name`.
 *
 * @returns Returns a function for deregistering the `handler`.
 * @category Events
 */
export function on<Handler extends EventHandler>(
  name: Handler['name'],
  handler: Handler['handler']
): () => void {
  const id = `${currentId}`
  currentId += 1
  eventHandlers[id] = { handler, name }
  return function (): void {
    delete eventHandlers[id]
  }
}

/**
 * Registers an event `handler` that will run at most once for the given
 * event `name`.
 *
 * @returns Returns a function for deregistering the `handler`.
 * @category Events
 */
export function once<Handler extends EventHandler>(
  name: Handler['name'],
  handler: Handler['handler']
): () => void {
  let done = false
  const dispose = on(name, function (...args): void {
    if (done === true) {
      return
    }
    done = true
    dispose()
    handler(...args)
  });
  return dispose
}

/**
 * Calling `emit` in the [main context](https://figma.com/plugin-docs/how-plugins-run/) invokes the event
 * handler for the matching event `name` in your UI. Correspondingly, calling
 * `emit` in your UI invokes the event handler for the matching event `name`
 * in the main context.
 *
 * All `args` passed after `name` will be directly
 * [applied](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
 * on the event handler.
 *
 * See the [recipe for passing data between the main and UI contexts](<%- query('page', 'recipes').url %>#passing-data-between-the-plugin-widgets-main-and-ui-contexts).
 *
 * @category Events
 */
export const emit =
  typeof window === 'undefined'
    ? function <Handler extends EventHandler>(
        name: Handler['name'],
        ...args: Parameters<Handler['handler']>
      ): void {
        figma.ui.postMessage([name, ...args])
      }
    : function <Handler extends EventHandler>(
        name: Handler['name'],
        ...args: Parameters<Handler['handler']>
      ): void {
        window.parent.postMessage(
          {
            pluginMessage: [name, ...args]
          },
          '*'
        )
      }

function invokeEventHandler(name: string, args: Array<unknown>): void {
  let invoked = false
  for (const id in eventHandlers) {
    if (eventHandlers[id].name === name) {
      eventHandlers[id].handler.apply(null, args)
      invoked = true
    }
  }
  if (invoked === false) {
    throw new Error(`No event handler with name \`${name}\``)
  }
}

if (typeof window === 'undefined') {
  figma.ui.onmessage = function (args: unknown): void {
    if (!Array.isArray(args)) {
      return
    }
    const [name, ...rest]: Array<unknown> = args
    if (typeof name !== 'string') {
      return
    }
    invokeEventHandler(name, rest)
  }
} else {
  window.onmessage = function (event: MessageEvent): void {
    if (typeof event.data.pluginMessage === 'undefined') {
      return
    }
    const args = event.data.pluginMessage
    if (!Array.isArray(args)) {
      return
    }
    const [name, ...rest]: [unknown, Array<unknown>] = event.data.pluginMessage
    if (typeof name !== 'string') {
      return
    }
    invokeEventHandler(name, rest)
  }
}
