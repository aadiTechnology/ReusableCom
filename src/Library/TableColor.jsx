import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, TextareaAutosize, MenuItem, FormControl, Select } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
function TableColor({ ItemList, HeaderArray }) {

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
                                    <TableCell sx={{ textTransform: "capitalize" }} align="center" > {item.Text3}</TableCell>

                                </>



                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default TableColor