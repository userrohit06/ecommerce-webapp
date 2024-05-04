import express from 'express'
import { loginCtrl, logoutCtrl, registerCtrl, userProfileCtrl } from '../controllers/User.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

// router instance
const router = express.Router()

router.post("/register", registerCtrl)
router.post("/login", loginCtrl)
router.post("/logout", logoutCtrl)
router.get("/user-details", isAuthenticated, userProfileCtrl)

export default router