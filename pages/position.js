import Head from "next/head";
import React from "react";
import Position from "../components/position/Position";

const position = () => {
  return (
    <>
      <Head>
        <title>Position</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Position />
    </>
  );
};

export default position;
