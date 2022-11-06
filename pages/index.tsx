import List from "components/atoms/List";
import Typography from "components/atoms/Typograpy";
import Layout from "components/templates/Lauout";
import Head from "next/head";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>ジョジョの奇妙な冒険</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Typography>ジョジョの奇妙な冒険</Typography>
            <List>
                <List.Item>空城承太郎</List.Item>
            </List>
        </Layout>
    );
}
