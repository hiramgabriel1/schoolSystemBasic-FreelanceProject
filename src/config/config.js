import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const MONGO_URI = process.env.MONGO_URI
// console.log(MONGO_URI)

const connection = async () => {
    try {
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("[database connected]".bgBlue)
    } catch (error) {
        throw new Error(error)
    }
}

export default connection