import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import _ from "lodash";

import { api } from "../../lib/useAPI";
import Layout from "../../components/Layout";
import TodoItem from "../../components/Todo/Item";
import TodoNew from "../../components/Todo/New";

const Todos = ({ data }) => {
  useEffect(() => {
    setTodos({ todos: data });
  }, [data]);
  const todos = useStoreState(state => state.todos.todos);
  const {
    set: setTodos,
    create: createTodo,
    update: updateTodo,
    delete: deleteTodo
  } = useStoreActions(actions => actions.todos);
  return (
    <Layout>
      <h1>TODO LIST</h1>
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
    data
  };
};

export default Todos;
