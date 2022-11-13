import { ErrorResponse } from "@/lib/axios";
import {
  DefaultOptions,
  QueryClient,
  UseMutationOptions,
  UseQueryOptions,
  QueryClientProvider,
} from "react-query";
import { Promisable } from "type-fest";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
    suspense: true,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> =
  Promisable<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    ErrorResponse,
    Parameters<MutationFnType>[0]
  >;
