import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { StoreProvider } from "easy-peasy";
import NProgress from "nprogress";
import Router from "next/router";

import "../assets/css/index.scss";

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <StoreProvider store={reduxStore}>
          <Component {...pageProps} />
        </StoreProvider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
