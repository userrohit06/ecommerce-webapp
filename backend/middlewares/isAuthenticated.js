import expressAsyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'
import User from "../models/User.model.js";

const isAuthenticated = expressAsyncHandler(async (req, res, next) => {

    if (req.cookies.token) {
        // verify the token
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY)

        // add user to the req object
        req.user = await User.findById(decoded?.id).select("-password")
        next()
    } else {
        res.status(401)
        throw new Error("User not authenticated")
    }
})

export default isAuthenticated