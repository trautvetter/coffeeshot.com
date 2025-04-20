import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {eightyear} from '@prisma/client';

export const eightyearApi = createApi({
  reducerPath: 'eightyearApi',
  baseQuery: fetchBaseQuery({baseUrl: '/api'}),
  tagTypes: ['eightyear'],
  endpoints: (builder) => ({
    getEightyears: builder.query<eightyear[], void>({
      query: () => '/eightyear',
      providesTags: (result) =>
        result ? [...result.map(({id}) => ({type: 'eightyear' as const, id})), 'eightyear'] : ['eightyear'],
    }),

    updateEightyear: builder.mutation<eightyear, eightyear>({
      query: ({id, ...patch}) => ({
        url: `/eightyear/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['eightyear'],
    }),
  }),
});

export const {
  useGetEightyearsQuery,
  useUpdateEightyearMutation,
} = eightyearApi;
