import { Schema, model } from "mongoose";

const cartItemsSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
})

const Product = model("Product", cartItemsSchema)
export default Product