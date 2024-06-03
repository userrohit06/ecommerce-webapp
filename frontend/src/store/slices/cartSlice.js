import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems } from "../thunks/cartThunk";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.product._id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cartItems = action.payload;
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer