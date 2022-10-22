import mongoose from "mongoose";

const {Schema} = mongoose; 

const userSchema = new Schema({       
 userName: {type: String, required: true} , 
 password: {type: String, required: true}, 
 confirmPassword: {type:String, required: true},
 createdAt : {type : Date, default : Date.now()}
})

export default new mongoose.model('User',userSchema );