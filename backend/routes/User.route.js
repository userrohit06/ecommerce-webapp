import express from 'express'
import { loginCtrl, logoutCtrl, registeCtrl } from '../controllers/User.controller.js'

// router instance
const router = express.Router()

router.post("/register", registeCtrl)
router.post("/login", loginCtrl)
router.post("/logout", logoutCtrl)

export default router