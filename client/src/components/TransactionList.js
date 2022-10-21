import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import moment from "moment";


export default function TransactionList({transactions,fetchTrx, setEditTrx}) {
  
  const deleteHandler = async (id)=>{
   
    if(!window.confirm('Are you sure')) return; 
    const res  = await fetch(`http://localhost:4000/transaction/${id}`,{
    method: "DELETE",
   });

   if(res.ok){
    fetchTrx();
    window.alert("deleted successfully");
   }
  }

  const formatDate = (date)=>{
   return moment(date).format("MMM Do YY");              
  }
  
  
  return (
    <>
   <Container maxWidth="lg">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
               {row.description}
              </TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{formatDate(row.date)}</TableCell>
              <TableCell align="center">
              <IconButton onClick={()=> setEditTrx(row)}>
               <EditIcon color="primary"/>
               </IconButton>
               <IconButton onClick={()=> deleteHandler(row._id)}>
               <DeleteIcon color="warning"  />
               </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
  );
}
