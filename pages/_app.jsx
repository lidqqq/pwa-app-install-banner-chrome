import React from "react";
import App, { Container } from "next/app";
import SW from "../components/SW";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <SW />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
