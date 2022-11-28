import Head from "next/head";
import { Post as Content } from "@/features/post/";

const Post = () => {
  return (
    <>
      <Head>
        <title>nextjsapp posts</title>
      </Head>
      <Content />
    </>
  );
};

export default Post;
