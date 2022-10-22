import { Router } from "express";
const router = Router();
import User from "../models/User.js"

router.post('/register',(req,res)=>{
 // get form data 
 console.log(req.body);
 // check if user already exist 
 // hash the password 
 // store user 
  res.json({message: "success"});
})


export default router;