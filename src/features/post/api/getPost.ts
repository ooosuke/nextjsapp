import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const getPost = (id: number): Promise<Post> => {
  return axios.get(`/posts/${id}`);
};

type QueryFnType = typeof getPost;

type UsePostOptions = {
  id: number;
  config?: QueryConfig<QueryFnType>;
};

export const usePost = ({ id, config }: UsePostOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
};
