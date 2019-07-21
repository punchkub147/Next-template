import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import Layout from "../components/Layout";
import "../assets/css/index.scss";

const Index = props => {
  return (
    <Layout>
      <h1>HOME</h1>
      <div className="container">
        <p>CONTAINER</p>
        <div className="row">
          <p>ROW</p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
