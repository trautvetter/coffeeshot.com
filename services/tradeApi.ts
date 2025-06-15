// services/tradeApi.ts
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {trade} from '@/prisma/generated/client';

export const tradeApi = createApi({
  reducerPath: 'tradeApi',
  baseQuery: fetchBaseQuery({baseUrl: '/api'}),
  tagTypes: ['Trade'],
  endpoints: (builder) => ({
    getTrades: builder.query<trade[], void>({
      query: () => '/trade',
      providesTags: (result) =>
        result ? [...result.map(({id}) => ({type: 'Trade' as const, id})), 'Trade'] : ['Trade'],
    }),
    addTrade: builder.mutation<trade, Partial<trade>>({
      query: (body) => ({
        url: '/trade',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Trade'],
    }),
    updateTrade: builder.mutation<trade, trade>({
      query: ({id, ...patch}) => ({
        url: `/trade/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['Trade'],
    }),
    deleteTrade: builder.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `/trade/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{type: 'Trade', id}, 'Trade'],
    }),
  }),
});

export const {
  useGetTradesQuery,
  useAddTradeMutation,
  useUpdateTradeMutation,
  useDeleteTradeMutation,
} = tradeApi;
