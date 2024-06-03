import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
    const URI = import.meta.env.VITE_BACKEND_URL
    const response = await axios.get(`${URI}/users/cart`)
    return response.data.cartItems
})