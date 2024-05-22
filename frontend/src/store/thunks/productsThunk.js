import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk("fetch/singleProduct", async (id) => {
    const URI = import.meta.env.VITE_BACKEND_URL
    try {
        const response = await axios.get(`${URI}/products/product/${id}`)
        return response.data.product
    } catch (error) {
        return error.message
    }
})

export const fetchAllProducts = createAsyncThunk("fetch/allProducts", async () => {
    const URI = import.meta.env.VITE_BACKEND_URL
    try {
        const response = await axios.get(`${URI}/products/all`)
        return response.data.products
    } catch (error) {
        return error.message
    }
})

export const fetchCategories = createAsyncThunk("fetch/categories", async () => {
    const URI = import.meta.env.VITE_BACKEND_URL
    try {
        const response = await axios.get(`${URI}/products/categories`)
        return response.data.categories
    } catch (error) {
        console.log("Error is: ", error.message, "\nError occured: ", error.stack);
    }
})