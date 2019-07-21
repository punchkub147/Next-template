import { action } from "easy-peasy";
export default {
  data: {},
  cache: action((state, payload) => {
    state.data[payload.url] = payload.data;
  })
};
