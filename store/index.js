import { createStore } from "easy-peasy";
import counter from "./counter";
import cacheAPI from "./cacheAPI";
import todos from "./todos";

const model = {
  counter,
  cacheAPI,
  todos
};

export default model;

export function initializeStore(initialState) {
  return createStore(model, initialState);
}
