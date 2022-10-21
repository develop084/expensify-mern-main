import express from 'express';
import cors from 'cors';
import TransactionRoutes from "./routes/transactionsAPI.js"
import connectDB from "./database/db.js"

const PORT = 4000; 

const app = express(); 
app.use(cors());
app.use(express.json());
app.use('/',TransactionRoutes);

connectDB();




app.listen(PORT,()=>{
 console.log(`I am running on port :  ${PORT} `)
})