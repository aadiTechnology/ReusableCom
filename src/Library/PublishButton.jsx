import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, TextareaAutosize, MenuItem, FormControl, Select ,Button} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
function PublishButton({ ItemList, HeaderArray }) {

    return (
        <div>
            <TableContainer component={Card}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow sx={{ backgroundColor: "gray" }}>
                            {HeaderArray.map((item, i) => (

                                <TableCell key={i} sx={{ textTransform: "capitalize" }} align="center" > <b>{item.Header}</b></TableCell>


                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ItemList.map((item, i) => (
                            <TableRow >

                                <>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" > {item.Text1}</TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" > {item.Text2}</TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" ><Button variant='contained'>{item.IsActive ? "Publish ": "UnPublish"}</Button></TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" ><EditIcon sx={{color:"Yellow"}}/> </TableCell>
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" ><ClearIcon sx={{color:"red"}}/> </TableCell>
                                </>



                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default PublishButton