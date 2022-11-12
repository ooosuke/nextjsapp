import Head from "next/head";
import { Home as Component } from "@/components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjsapp home.</title>
      </Head>
      <Component />
    </>
  );
}
