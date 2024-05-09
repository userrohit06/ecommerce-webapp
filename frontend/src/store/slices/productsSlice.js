import { createSlice } from '@reduxjs/toolkit'
import { fetchAllProducts, fetchSingleProduct, fetchCategories } from '../thunks/productsThunk.js'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        categories: [],
        selectedCategories: [],
        productData: {},
        error: null,
        loading: false
    },
    reducers: {
        setSelectedCategories: (state, action) => {
            state.selectedCategories = action.payload
        },
        clearFetchProduct: (state, action) => {
            state.productData = {}
        }
    },
    extraReducers(builder) {
        builder

            // fetch all products
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false,
                    state.data = action.payload
            })

            // fetch single product
            .addCase(fetchSingleProduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.loading = false,
                    state.productData = action.payload
            })

            // fetch all categories
            .addCase(fetchCategories.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false,
                    state.categories = action.payload
            })
    }
})

export const { setSelectedCategories, clearFetchProduct } = productsSlice.actions
export const productReducer = productsSlice.reducer