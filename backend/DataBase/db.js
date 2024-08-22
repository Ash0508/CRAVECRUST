const mongoose = require('mongoose')
require('dotenv').config()


    const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MON_URL);
            console.log('MongoDB Connected..');
        } catch (err) {
            console.log(`Connection failed in server.js due to ${err}`);
        }
    };
   


module.exports = {
    connectDB
}