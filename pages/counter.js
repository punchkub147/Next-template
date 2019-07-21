import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import Layout from "../components/Layout";

const Index = props => {
  const counter = useStoreState(state => state.counter.count);
  const increment = useStoreActions(actions => actions.counter.increment);
  const decrement = useStoreActions(actions => actions.counter.decrement);
  const resetCounter = useStoreActions(actions => actions.counter.reset);

  return (
    <Layout>
      <h1>{counter}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => resetCounter()}>Reset</button>
    </Layout>
  );
};

export default Index;
