import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';





export default function TableView({ItemList ,HeaderArray}) {
  return (
    <TableContainer component={Card}>
      <Table aria-label="simple table">
      <TableHead >
        <TableRow >
        {HeaderArray.map((item,i)=>(
       <TableCell key={i} sx={{textTransform:"capitalize" , borderRight:"1px solid black" , backgroundColor:"blue"}} align="center" > <b>{item.Header}</b></TableCell>
        ))}
           </TableRow>
            </TableHead>
         <TableBody>
          {ItemList.map((item,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {item.Id}
              </TableCell>
              <TableCell align="center">{item.Text1}</TableCell>
              <TableCell align="center">{item.Text2}</TableCell>
              <TableCell align="center">{item.Text3}</TableCell>
              <TableCell align="center">{item.Text4}</TableCell>
              <TableCell align="center">{item.Text5}</TableCell>
              <TableCell align="center">{item.Text6}</TableCell>
              <TableCell align="center">{item.Text7}</TableCell>
             
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
