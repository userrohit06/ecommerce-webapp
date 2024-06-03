import express from 'express'
import { addToCartCtrl, getCartItemsCtrl, loginCtrl, logoutCtrl, registerCtrl, userProfileCtrl } from '../controllers/User.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

// router instance
const router = express.Router()

router.post("/register", registerCtrl)
router.post("/login", loginCtrl)
router.post("/logout", logoutCtrl)
router.get("/user-details", isAuthenticated, userProfileCtrl)
router.post("/cart/add-to-cart/:productId", isAuthenticated, addToCartCtrl)
router.post("/cart/add-to-cart/:productId", isAuthenticated, getCartItemsCtrl)

export default router