import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import { api } from "../../lib/useAPI";
import Layout from "../../components/Layout";
import TodoItem from "../../components/Todo/Item";
import TodoNew from "../../components/Todo/New";

const Todos = ({ data }) => {
  useEffect(() => {
    setTodos({ todos: data });
  }, [data]);
  const todos = useStoreState(state => state.todos.todos);
  const setTodos = useStoreActions(actions => actions.todos.set);
  const createTodo = useStoreActions(actions => actions.todos.create);
  const updateTodo = useStoreActions(actions => actions.todos.update);
  const deleteTodo = useStoreActions(actions => actions.todos.delete);
  return (
    <Layout>
      <h1>TODOS</h1>
      <TodoNew onSubmit={createTodo} />
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          data={todo}
          onUpdate={() => updateTodo({ id: todo.id })}
          onRemove={() => deleteTodo({ id: todo.id })}
        />
      ))}
    </Layout>
  );
};

Todos.getInitialProps = async function() {
  const { data } = await api("/todos");
  return {
    data: data.filter((item, index) => index < 5)
  };
};

export default Todos;
