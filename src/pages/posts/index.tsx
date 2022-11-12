import Head from "next/head";
import { Posts as Component } from "@/components/Posts";

export default function Posts() {
  return (
    <>
      <Head>
        <title>nextjsapp posts.</title>
      </Head>
      <Component />
    </>
  );
}
