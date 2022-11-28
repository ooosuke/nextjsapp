import Head from "next/head";
import { Home as Content } from "@/features/home/";

const Home = () => {
  return (
    <>
      <Head>
        <title>nextjsapp home</title>
      </Head>
      <Content />
    </>
  );
};

export default Home;
