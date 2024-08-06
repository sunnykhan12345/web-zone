import mongoose from "mongoose";

const isconnected = false  // track connection status

export const connectionDB = async () => {
    mongoose.set('strictQuery', true)
    if (isconnected) {
        console.log("mongodb is already connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'vibezone',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isconnected = true
        console.log("mongodb is connected")
    }
    catch (error) {
        console.log(error)
    }
}