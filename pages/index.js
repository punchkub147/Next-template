import React from "react";

import Layout from "../components/Layout";

const Index = props => {
  return (
    <Layout id="HOME">
      <h1 className="fadeOut">HOME</h1>
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
