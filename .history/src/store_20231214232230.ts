import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from '././features/apiSlice';

import { reducer } from "./features/cartSlice"


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: reducer,
    },
    devTools: true,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>