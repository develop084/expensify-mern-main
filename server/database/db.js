import mongoose from 'mongoose'

async function connectDB(){
 await mongoose.connect("mongodb+srv://dev_loper007:nWaFng3UXYYv8mLM@cluster0.gghcaiy.mongodb.net/?retryWrites=true&w=majority");
 console.log('mongoDB connected successfully ');
}

export default connectDB;
