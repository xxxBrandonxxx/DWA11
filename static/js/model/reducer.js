/**
 * A reducer function that calculates a new state based on the current state and the dispatched action
 * @param {object} state - The current state of the application
 * @param {object} action - The dispatched action that triggered the state change
 * @param {string} action.type - The type of action that was dispatched
 * @returns {object} The new state of the application after the action is applied
 */
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      // Increment the count property in the state object
      return { count: state.count + 1 };
    case "SUBTRACT":
      // Decrement the count property in the state object
      return { count: state.count - 1 };
    case "RESET":
      // Reset the count property in the state object to zero
      return { count: 0 };
    default:
      // Return the current state if the action type is not recognized
      return state;
  }
}

// Export the reducer function for use in other parts of the application
export { reducer };
