import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { API_BASE_URL } from "../config";
import { ALL_POSTS } from "../constants/urls";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endPoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({ url: ALL_POSTS, method: "GET" }),
    }),
  }),
});

export const { UseGetAllPostsQuery } = postApi;
