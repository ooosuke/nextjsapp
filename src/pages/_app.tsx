import { Layout } from "@/components/Layout";
import { Providers } from "@/providers";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  </>
);

export default App;
