import Head from "next/head";
import { Posts as Content } from "@/features/posts/";

const Posts = () => {
  return (
    <>
      <Head>
        <title>nextjsapp posts</title>
      </Head>
      <Content />
    </>
  );
};

export default Posts;
