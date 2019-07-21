import { action } from "easy-peasy";
export default {
  count: 0,
  increment: action(state => {
    state.count++;
  }),
  decrement: action(state => {
    state.count--;
  }),
  reset: action(state => {
    state.count = 0;
  })
};
