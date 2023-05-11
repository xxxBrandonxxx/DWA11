/**
 * Action object that increments the count value in the state
 * @type {object} - An object with a type property of "ADD"
 */
const add = {
  type: "ADD",
};

/**
 * Action object that decrements the count value in the state
 * @type {object} - An object with a type property of "SUBTRACT"
 */
const subtract = {
  type: "SUBTRACT",
};

/**
 * Action object that resets the count value in the state to zero
 * @type {object} - An object with a type property of "RESET"
 */
const reset = {
  type: "RESET",
};

// Export the action objects for use in other parts of the application
export { add, subtract, reset };
