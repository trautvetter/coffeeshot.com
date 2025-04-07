import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const helloApi = createApi({
  reducerPath: 'helloApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com/' }),
  endpoints: (builder) => ({
    getHello: builder.query({
      query: () => 'hello',
    }),
  }),
});

export const { useGetHelloQuery } = helloApi;
