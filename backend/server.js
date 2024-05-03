import express from 'express'
import dotenv from 'dotenv'
import errorHandler from './middlewares/errorMiddleware.js'
import connectDB from './db/connectDB.js'

// routes imports
// import fetchData from './fetchProducts.js'   // fetch data route

// instance of express
const app = express()
// PORT NO.
const port = process.env.PORT || 8888

// middlewares
app.use(express.json())     // to parse json data

// dotenv configuration
dotenv.config()

// routes declaration
// app.use("/data/products", fetchData)     // run only first time

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