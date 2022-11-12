import Head from "next/head";
import { About as Component } from "@/components/About";

export default function About() {
  return (
    <>
      <Head>
        <title>nextjsapp about.</title>
      </Head>
      <Component />
    </>
  );
}
