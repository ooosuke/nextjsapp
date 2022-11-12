import { Layout } from "@/components/Layout";
import { IconProvider } from "@/providers/IconProvider";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <IconProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconProvider>
  </>
);

export default App;
