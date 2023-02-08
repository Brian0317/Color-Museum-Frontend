import Head from "next/head";
import React from "react";
import Error from "../components/404/404";
import styles from "../styles/modules/choose/choose.module.css";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.wrapper} style={{ background: "#000" }}>
        <Error />
      </section>
    </>
  );
};

export default ErrorPage;
