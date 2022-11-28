import { Notification } from "@/elements/notification";
import { Providers } from "@/providers";
import { Box, Spinner } from "@chakra-ui/react";
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

const SuspenseFallback: React.FC<{}> = () => {
  console.log("fallback");
  return <div>loading......</div>;
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <React.StrictMode>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            <React.Suspense fallback={<SuspenseFallback />}>
              <Providers>
                <Component {...pageProps} />
                <Notification />
              </Providers>
            </React.Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </React.StrictMode>
  </>
);

export default App;
