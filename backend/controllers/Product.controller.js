import expressAsyncHandler from 'express-async-handler'
import Product from '../models/Product.model.js'

export const getAllProducts = expressAsyncHandler(async (req, res) => {
    // pagination parameters
    const page = parseInt(req.query.page) || 1  // page number
    const limit = parseInt(req.query.limit) || 10   // number of products per page

    // calculate number of documents to skip
    const skip = (page - 1) * limit

    // query products with pagination
    const products = await Product.find().skip(skip).limit(limit)

    // total number of products (for calculating total pages)
    const totalProducts = await Product.countDocuments()

    // calculate total pages
    const totalPages = Math.ceil(totalProducts / limit)

    res.status(200).json({
        totalPages,
        currentPage: page,
        products
    })
})

export const getSinglePrdouct = expressAsyncHandler(async (req, res) => {
    const productId = req.params.productId
    const currentProduct = await Product.findById(productId)

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