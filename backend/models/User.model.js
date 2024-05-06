import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    address: {
        type: String,
        required: [true, "Address is compulsory"]
    },
    mobile: {
        type: Number,
        required: [true, "Mobile number is required"]
    },
    cart: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        }
    ]
}, {
    timestamps: true // keep track of time when user is created
})

const User = model("User", userSchema)
export default User