import { iconConfig } from "@/lib/react-icon";
import { queryClient } from "@/lib/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { IconContext } from "react-icons";
import { QueryClientProvider, QueryErrorResetBoundary } from "react-query";

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

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <React.Suspense fallback={SuspenseFallback}>
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
          <QueryClientProvider client={queryClient}>
            <ChakraProvider>
              <IconContext.Provider value={iconConfig}>
                {children}
              </IconContext.Provider>
            </ChakraProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  </React.Suspense>
);
