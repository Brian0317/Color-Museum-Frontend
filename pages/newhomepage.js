import Head from "next/head";
import Collection from "../components/Collection";
import NewHomePage from "../components/newhomepage";
  
const newhomepage = () => {
    return (
        <>
            <Head>
                <title>New Home Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <NewHomePage /> */}
            <Collection />
        </>
    );
};

export default newhomepage;
