/**
 * Defines the initial state for the Tally App, which includes the count of the app
 *
 * @typedef {Object} InitialState
 * @property {number} count - The current count of the Tally App
 */

/** 
 * The initial state of the Tally App
 *
 * @type {InitialState}
 */
const initialState = {
  count: 0,
};

/**
 * Creates a Redux-inspired store to manage the state of the Tally App.
 *
 * @param {InitialState} initialState - The initial state of the Tally App
 * @param {Function} reducer - The reducer function that will handle state updates
 * @returns {Object} An object containing the getState, dispatch, and subscribe methods
 */
function createStore(initialState, reducer) {
  let state = initialState;
  const listeners = [];

  /**
   * Returns the current state of the Tally App.
   *
   * @returns {InitialState} The current state of the Tally App
   */
  function getState() {
    return state;
  }

  /**
   * Dispatches an action to update the state of the Tally App.
   *
   * @param {Object} action - The action to be dispatched
   */
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  /**
   * Subscribes a listener function to be called every time the state is updated.
   *
   * @param {Function} listener - The listener function to be subscribed
   * @returns {Function} A function to unsubscribe the listener
   */
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export { initialState, createStore };
