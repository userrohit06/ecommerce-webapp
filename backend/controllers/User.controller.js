import expressAsyncHandler from 'express-async-handler'
import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Product from '../models/Product.model.js'

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
        email: existingUser.email,
        token
    })
})

export const logoutCtrl = expressAsyncHandler(async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({
        success: true,
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

export const addToCartCtrl = expressAsyncHandler(async (req, res) => {
    const currentUser = req.user
    const { quantity } = req.body
    const productId = req.params.productId

    // console.log("currentUser: ", currentUser);

    // check if user exists
    if (!currentUser) {
        res.status(404)
        throw new Error('User Not Found')
    }

    // find the product by id
    const product = await Product.findById(productId)
    // console.log("product: ", product);

    // check if product exists
    if (!product) {
        res.status(404)
        throw new Error("Product not available")
    }

    // calculate total amount
    const totalAmount = product.price * quantity

    // check if product already exists in cart
    const existingCartItem = currentUser.cart.find(item => String(item.product) === productId)
    // console.log("existingCartItem: ", existingCartItem);

    if (existingCartItem) {
        // update the quantity and total amount if product exists
        existingCartItem.quantity += quantity
        existingCartItem.totalAmount += totalAmount
    } else {
        currentUser.cart.push({ product, quantity, totalAmount })
    }

    await currentUser.save()
    res.status(200).json({
        status: 'success',
        message: 'Product has been added to your Cart!',
        currentUser
    })
})

export const getCartItemsCtrl = expressAsyncHandler(async (req, res) => {
    const currentUser = req.user

    if (!currentUser) {
        res.status(404)
        throw new Error('User not found')
    }

    //populate cart items with product details
    await currentUser.populate('cart.product')

    res.status(200).json({
        status: 'success',
        cartItems: currentUser.cart
    })
})