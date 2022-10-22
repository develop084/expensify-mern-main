import express from 'express';
import cors from 'cors';
import TransactionRoutes from "./routes/transactionsAPI.js"
import connectDB from "./database/db.js"
import authAPI from "./routes/authAPI.js"
const PORT = 4000; 

const app = express(); 
app.use(cors());
app.use(express.json());
app.use('/',TransactionRoutes);
app.use('/auth', authAPI)

connectDB();




app.listen(PORT,()=>{
 console.log(`I am running on port :  ${PORT} `)
})