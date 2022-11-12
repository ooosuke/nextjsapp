import Head from "next/head";
import { Layout } from "@/components/Layout";
import Home from "@/components/Home";

export default function Main() {
    return (
        <Layout>
            <Head>
                <title>nextjsapp home.</title>
            </Head>
            <Home />
        </Layout>
    );
}
