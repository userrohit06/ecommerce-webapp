import { Schema, model } from "mongoose";

const cartItemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        default: 1
    }
})

const CartItem = model("CartItem", cartItemSchema)
export default CartItem