const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    }catch(error){
        console.error(`Database Connection Failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDatabase;