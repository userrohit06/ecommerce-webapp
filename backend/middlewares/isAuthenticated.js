import expressAsyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'
import User from "../models/User.model.js";

const isAuthenticated = expressAsyncHandler(async (req, res, next) => {
    // console.log(req.cookies);
    // console.log(req.cookies.token);

    if (req.cookies.token) {
        // verify the token
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY)
        // console.log("decoded: ", decoded);

        // add user to the req object
        req.user = await User.findById(decoded?.id).select("-password")
        // console.log(req.user);
        next()
    } else {
        res.status(401)
        throw new Error("User not authenticated")
    }
})

export default isAuthenticated