import mongoose from "mongoose";

const connectDB = async () => {
    const MONGO_URI = process.env.MONGODB_URI

    try {
        const connect = await mongoose.connect(MONGO_URI)
        console.log(`Connection host is: ${connect.connection.host}`);
        return connect.connection.host
    } catch (error) {
        console.log(`Error while connecting to mongodb server: ${error.message}`);
    }
}

export default connectDB