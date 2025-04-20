// services/fooApi.ts
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {foo} from '@/prisma/generated/client';

export const fooApi = createApi({
  reducerPath: 'fooApi',
  baseQuery: fetchBaseQuery({baseUrl: '/api'}),
  tagTypes: ['Foo'],
  endpoints: (builder) => ({
    getFoos: builder.query<foo[], void>({
      query: () => '/foo',
      providesTags: (result) =>
        result ? [...result.map(({id}) => ({type: 'Foo' as const, id})), 'Foo'] : ['Foo'],
    }),
    addFoo: builder.mutation<foo, Partial<foo>>({
      query: (body) => ({
        url: '/foo',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Foo'],
    }),
    updateFoo: builder.mutation<foo, foo>({
      query: ({id, ...patch}) => ({
        url: `/foo/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['Foo'],
    }),
    deleteFoo: builder.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `/foo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{type: 'Foo', id}, 'Foo'],
    }),
  }),
});

export const {
  useGetFoosQuery,
  useAddFooMutation,
  useUpdateFooMutation,
  useDeleteFooMutation,
} = fooApi;
