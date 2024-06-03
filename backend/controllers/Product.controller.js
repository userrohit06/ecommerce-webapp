import expressAsyncHandler from 'express-async-handler'
import Product from '../models/Product.model.js'

export const getAllProducts = expressAsyncHandler(async (req, res) => {
    const products = await Product.find()

    res.status(200).json({
        products
    })
})

export const getSinglePrdouct = expressAsyncHandler(async (req, res) => {
    const productId = req.params.productId
    const currentProduct = await Product.findOne({ id: productId })

    if (!currentProduct) {
        res.status(404)
        throw new Error('Product not found')
    }

    res.status(200).json({
        status: 'success',
        message: "Successfully got single product",
        product: currentProduct
    })
})

export const getAllCategories = expressAsyncHandler(async (req, res) => {
    const categories = await Product.distinct("category")
    res.status(200).json({
        status: 'success',
        categories
    })
})