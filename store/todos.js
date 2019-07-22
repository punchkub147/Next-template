import { action, thunk } from "easy-peasy";
import cuid from "cuid";

export default {
  todos: [],
  set: action((state, { todos }) => {
    state.todos = todos;
  }),
  create: thunk(async (actions, { title }) => {
    actions.add({
      todo: {
        id: cuid(),
        title,
        completed: false
      }
    });
  }),
  add: action((state, { todo }) => {
    state.todos.push(todo);
  }),
  delete: action((state, { id }) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
  }),
  update: action((state, { id }) => {
    const todo = state.todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
  })
};
