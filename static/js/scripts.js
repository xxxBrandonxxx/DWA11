import { initialState, createStore } from "./model/store.js";
import { reducer } from "./model/reducer.js";
import { add, subtract, reset } from "./model/actions.js";

const store = createStore(initialState, reducer);

console.log("1: Initial state");
console.log(store.getState()); // should log count: 0

console.log("2: Increment the counter by one");
store.dispatch(add);
store.dispatch(add);
console.log(store.getState()); // should log count: 2

console.log("3: Decrement the counter by one");
store.dispatch(subtract);
console.log(store.getState()); // should log count: 1

console.log("4: Resetting the Tally Counter");
store.dispatch(reset);
console.log(store.getState()); // should log count: 0