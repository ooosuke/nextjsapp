import { useRouter } from "next/router";

export const useNextRouter = <T>() => {
  const router = useRouter();
  return {
    router,
    query: router.query as T,
  };
};
