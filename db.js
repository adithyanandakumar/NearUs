const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://root:toor@cluster0.7hyb9wn.mongodb.net/?retryWrites=true&w=majority')
        console.log(`MongoDB connection established @ HOST: ${conn.connection.host}`)
    } 
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}



module.exports = connectDB;
