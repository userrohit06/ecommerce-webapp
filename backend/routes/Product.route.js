import express from 'express'
import { getAllProducts, getSinglePrdouct } from '../controllers/Product.controller.js'

const router = express.Router()

router.get("/product/:productId", getSinglePrdouct)
router.get("/all", getAllProducts)

export default router