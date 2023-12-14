import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, IProduct } from "../interfaces/interfaces";


interface ICartState {

    cart: ICart[]
}

const initialState: ICartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            let newArrayCart = [...state.cart]
            const found = state.cart.find(({ id }) => id === action.payload.id);
            if (found) {
                newArrayCart = newArrayCart.map((item) => {
                    return item.id === action.payload.id ? { ...item, quantity: action.payload.quantity || item.quantity + 1 } :
                        item
                })
            } else {
                newArrayCart.push({ ...action.payload, quantity: 1 })
            }
            state.cart = newArrayCart
        },
        removeToCart: (state, action: PayloadAction<{id: number}>) => {
            state.cart = state.cart.filter((elem) => elem.id !== action.payload.id)
        }
    }
})

// export const cartActions = cartSlice.actions;
// export const cartReducer = cartSlice.reducer 

export const { actions, reducer} = cartSlice;