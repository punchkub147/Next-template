import React from 'react';
import Layout from '../components/Layout';
import { api } from '../lib/useAPI';

const Todos = ({ data }) => {
	return (
		<Layout>
			<h1>TODOS</h1>
			{data &&
				data.map((todo, index) => (
					<div key={index}>
						{index + 1}. {todo.title}
					</div>
				))}
		</Layout>
	);
};

Todos.getInitialProps = async function() {
  const { data } = await api('/todos');
	return {
		data,
	};
};

export default Todos;
