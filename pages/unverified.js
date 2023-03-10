import Head from "next/head";
import Unverified from "../components/Unverified/Unverified";

const unverified = () => {
  return (
    <>
      <Head>
        <title>Unverified</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Unverified />
    </>
  );
};

export default unverified;
