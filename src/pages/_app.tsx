import { Layout } from "@/components/Layout";
import { Providers } from "@/providers";
import { AppProps } from "next/app";
import React from "react";
import { FallbackProps, ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div>
    <h1>Oooooops!</h1>
    <p>{error}</p>
    <button onClick={resetErrorBoundary}>rest</button>
  </div>
);

const SuspenseFallback: React.FC<{}> = () => (
  <div>
    <p>loading...</p>
  </div>
);

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <React.Suspense fallback={SuspenseFallback}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            <Providers>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Providers>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </React.Suspense>
  </>
);

export default App;
