import axios from "axios";
import Product from "./models/Product.model.js";
import expressAsyncHandler from 'express-async-handler'

const fetchData = expressAsyncHandler(async (req, res) => {
    try {
        const response = await axios.get("https://dummyjson.com/products?limit=100")
        const products = response.data.products

        const data = await Product.insertMany(products)
        res.status(200).json({
            data
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        })
    }
})

export default fetchData