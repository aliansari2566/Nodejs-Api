const mongoose = require("mongoose")

const connectDB = async () =>{
    try {
        await mongoose.connect(DB_URI)
    } catch (error) {
        console.log("Error while connect" + error.message);
    }
}