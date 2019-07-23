import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { api } from "../../lib/useAPI";
import Layout from "../../components/Layout";
const User = dynamic(() => import("../../components/User"), {
  loading: () => <Loading />
});

const Loading = props => {
  return <p>Loading...</p>;
};

const useUser = userId => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser();
  }, [userId]);
  const getUser = async () => {
    const { data: userData } = await api(`/users/${userId}`);
    setUser(userData);
  };
  return user;
};

const Todos = ({ todo: { id, title, userId, completed } }) => {
  const user = useUser(userId);
  return (
    <Layout>
      <h3>{title}</h3>
      <User user={user} />
    </Layout>
  );
};

Todos.getInitialProps = async function(props) {
  const { data: todo } = await api(`/todos/${props.query.id}`);
  return {
    todo
  };
};

export default Todos;
