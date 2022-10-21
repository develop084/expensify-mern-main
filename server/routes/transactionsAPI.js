import { Router } from "express";
const router = Router();
import Transaction from "../models/Transaction.js"

router.post('/transaction',async(req,res)=>{
 const {amount, description, date}=req.body
 const transaction = new Transaction({amount, description,date});
 await transaction.save();
 res.json({message: "success"});

})

router.get('/transaction', async (req,res)=>{
   const transactions = await Transaction.find({}).sort({ createdAt:-1});
   res.json({data: transactions})
  
})

router.delete('/transaction/:id', async(req,res)=>{
await Transaction.findOneAndDelete({ _id :req.params.id});
res.json({message: "success"});
})

router.patch('/transaction/:id',async(req,res)=>{
await Transaction.updateOne({_id:req.params.id}, {$set: req.body})
res.json({message: "success"});
})


export default router;