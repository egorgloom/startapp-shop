import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/common';

import { IProduct } from './../interfaces/interfaces';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], string>({
            query: () => 'product',
            providesTags: ['Products']
        }),
        getProduct: builder.query<IProduct, any>({
            query: ({ id }) => `product/${id}`,
            providesTags: ['Products']
        }),
    }),

})

export const { useGetProductsQuery, useGetProductQuery } = apiSlice