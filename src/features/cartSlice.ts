import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/interfaces";

interface ICart {
    cart: IProduct[]
}

const initialState: ICart = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            let newArrayCart = [...state.cart]
            const found = state.cart.find(({ id }) => id === payload.id);
            if (found) {
                newArrayCart = newArrayCart.map((item) => {
                    return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } :
                        item
                })
            } else {
                newArrayCart.push({ ...payload, quantity: 1 })
            }
            state.cart = newArrayCart
        },
        removeToCart: (state, { payload }) => {
            state.cart = state.cart.filter(({ id }) => id !== payload)
        }
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer 