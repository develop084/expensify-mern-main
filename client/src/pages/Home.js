import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/menu/Menu'
import TransactionList from '../components/TransactionList'
import "./home.css"

function Home() {
  
 const [transactions, setTransactions] = useState([]);

 const [ editTrx, setEditTrx] = useState({});

 async function fetchTransactions() {
  const res = await fetch("http://localhost:4000/transaction");
  const { data } = await res.json();
  setTransactions(data);
  console.log(data);
}

 
 useEffect(() => {
   fetchTransactions();
 }, []);


  return (
    <div>

     <Navbar />
     <div className="menu-container">
     <Menu editTrx={editTrx} clickfun={fetchTransactions}/>
     </div>
     <div className="menu-container">
     <TransactionList transactions={transactions} fetchTrx={fetchTransactions} setEditTrx ={setEditTrx}/>
     </div>
    </div>
  )
}

export default Home