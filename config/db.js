const mongoose = require("mongoose")

const DB_URI="mongodb+srv://aliansari2566:Alidb123@cluster0.llqwkek.mongodb.net/mynodedb?retryWrites=true&w=majority"

const connectDB = async () =>{
    try {
        await mongoose.connect(DB_URI)
        console.log("Database connected");
    } catch (error) {
        console.log("Error while connect" + error.message);
    }
}
module.exports = connectDB;