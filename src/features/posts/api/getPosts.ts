import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";

export type Posts = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const getPosts = (): Promise<Posts[]> => {
  return axios.get("/posts");
};

type QueryFnType = typeof getPosts;

type UsePostsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const usePosts = ({ config }: UsePostsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
};
