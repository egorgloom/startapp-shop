import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/common';
import { IProduct } from './../interfaces/interfaces';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://server-shop-co.onrender.com/' }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], string>({
            query: () => 'product',
            providesTags: ['Products']
        }),
        getProduct: builder.query<IProduct, any>({ //исправить тип id
            query: ({ id }) => `product/${id}`,
            providesTags: ['Products']
        }),
    }),

})

export const { useGetProductsQuery, useGetProductQuery } = apiSlice