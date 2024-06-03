import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "./slices/productsSlice"
import { searchReducer } from "./slices/searchSlice"
import { cartReducer } from "./slices/cartSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        search: searchReducer,
        cart: cartReducer
    }
})

export default store