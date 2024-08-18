const mongoose = require('mongoose')
require('dotenv').config()


    const connectDB = async () => {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/cravecrust');
            console.log('MongoDB Connected..');
        } catch (err) {
            console.log(`Connection failed in server.js due to ${err}`);
        }
    };
   


module.exports = {
    connectDB
}