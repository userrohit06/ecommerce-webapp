import expressAsyncHandler from 'express-async-handler'
import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerCtrl = expressAsyncHandler(async (req, res) => {
    // get fields from client
    const { name, email, password, address, mobile } = req.body

    // validate all fields
    if (!name || !email || !password || !address || !mobile) {
        res.status(400)
        throw new Error('Please provide all fields')
    }

    // find user in database
    const existingUser = await User.findOne({ email })

    // check if user exists
    if (existingUser) {
        res.status(400)
        throw new Error("User already exists, please login")
    }

    // hash or secure password
    const salt = await bcrypt.genSalt(10)
    const hashedPsd = await bcrypt.hash(password, salt)

    // create new user
    const user = await User.create({
        name,
        email,
        password: hashedPsd,
        address,
        mobile
    })

    res.status(200).json({
        status: 'success',
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            address: user.address,
            mobile: user.mobile
        }
    })
})

export const loginCtrl = expressAsyncHandler(async (req, res) => {
    // get details from client
    const { email, password } = req.body

    // check if user exists in database
    const existingUser = await User.findOne({ email })

    // validate fields
    if (!email || !password) {
        res.status(400)
        throw new Error("Please provide with all field data")
    }

    // throw error if user does not exist
    if (!existingUser) {
        res.status(401)
        throw new Error("No such user exists, please register yourself")
    }

    // compare password
    const isPsdValid = await bcrypt.compare(password, existingUser.password)

    // throw error if password does not match
    if (!isPsdValid) {
        res.status(401)
        throw new Error("Invalid email or password")
    }

    // generate token for user to stay logged in
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '10d' })

    // set token into cookies
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24   // 1 day
    })

    // send response
    res.status(200).json({
        status: 'success',
        message: 'Log in successful',
        _id: existingUser._id,
        email: existingUser.email
    })
})

export const logoutCtrl = expressAsyncHandler(async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({
        message: "Logout successful"
    })
})

export const userProfileCtrl = expressAsyncHandler(async (req, res) => {
    // console.log(req.user.id);
    const user = await User.findById(req?.user?.id).select("-password")

    if (user) {
        res.status(200).json({
            status: 'success',
            user
        })
    } else {
        res.status(404)
        throw new Error('User not found!')
    }
})