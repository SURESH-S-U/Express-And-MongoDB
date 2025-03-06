import mongoose from "mongoose"



const connectDB = async() => {
    try {
      await mongoose.connect('mongodb+srv://sureshelite07:hQhB27y7ShunFxmQ@cluster0.qgoxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      console.log("MongoDB connected...");
    } 
    
    catch (error) {
      console.error(error.message);
      process.exit(1);
    }
};

export default connectDB;