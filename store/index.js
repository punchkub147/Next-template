import { createStore } from "easy-peasy";
import counter from "./counter";
import cacheAPI from "./cacheAPI";

const model = {
  counter,
  cacheAPI
};

export default model;

export function initializeStore(initialState) {
  return createStore(model, initialState);
}
