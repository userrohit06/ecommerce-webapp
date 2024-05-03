import express from 'express'
import dotenv from 'dotenv'
import errorHandler from './middlewares/errorMiddleware.js'
import connectDB from './db/connectDB.js'
import cookieParser from 'cookie-parser'

// routes imports
// import fetchData from './fetchProducts.js'   // fetch data route
import userRouter from "./routes/User.route.js"

// instance of express
const app = express()
// PORT NO.
const port = process.env.PORT || 8888

// middlewares
app.use(express.json())     // to parse json data
app.use(cookieParser())

// dotenv configuration
dotenv.config()

// routes declaration
// app.use("/data/products", fetchData)     // run only first time
app.use("/api/v1/users", userRouter)

// error handler middleware
app.use(errorHandler)

// connect to database and listen to the server
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is up and running on port no. ${port}`);
        })
    })
    .catch(error => {
        console.log(`Error while connecting to the backend: ${error.message}`);
    })