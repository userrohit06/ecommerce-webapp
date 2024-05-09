import express from 'express'
import { getAllProducts, getSinglePrdouct, getAllCategories } from '../controllers/Product.controller.js'

const router = express.Router()

router.get("/product/:productId", getSinglePrdouct)
router.get("/all", getAllProducts)
router.get("/categories", getAllCategories)

export default router