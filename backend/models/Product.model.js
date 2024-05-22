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

// exclude some properties to avoid cicular references
cartItemsSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
        return ret
    }
})

const Product = model("Product", cartItemsSchema)
export default Product