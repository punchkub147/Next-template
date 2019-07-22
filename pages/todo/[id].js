import React from "react";

import { api } from "../../lib/useAPI";
import Layout from "../../components/Layout";

const Todos = ({ todo: { id, title, userId, completed }, user }) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{JSON.stringify(user.address)}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{JSON.stringify(user.company)}</p>
    </Layout>
  );
};

Todos.getInitialProps = async function(props) {
  const { data: todo } = await api(`/todos/${props.query.id}`);
  const { data: user } = await api(`/users/${todo.userId}`);
  return {
    todo,
    user
  };
};

export default Todos;
