import Head from "next/head";
import { Typography } from "src/components/elements/Typography";
import { Layout } from "src/components/Layout";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>ジョジョの奇妙な冒険</title>
            </Head>
            <Typography color="danger" variant="h1">
                スタープラチナ
            </Typography>
        </Layout>
    );
}
