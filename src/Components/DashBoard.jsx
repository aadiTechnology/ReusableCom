import React, { useState } from 'react';
import {Grid, Typography , Box ,Card} from "@mui/material"
import { Link } from 'react-router-dom';

function DashBoard() {
 

  return (
    <div>
        <Grid container spacing={1}>
            <Grid item xs={2} >
          <Link to="/MonthWiseAttandace">
         <Card sx={{height:"30px"}}>
         MonthWiseAttandace
         </Card>
          </Link>
         </Grid>
         <Grid item xs={2}>
         <Link to="/Calender">
         <Card sx={{height:"30px"}}>
         Calender
         </Card>
          </Link>
         </Grid>
         <Grid item xs={2}>
         <Link to="/ProgressRemarks">
         <Card sx={{height:"30px"}}>
         ProgressRemarks
         </Card>
          </Link>
         </Grid>
         <Grid item xs={2}>
         <Link to="/SchoolAttendaceOverview">
         <Card sx={{height:"30px"}}>
         SchoolAttendaceOverview
         </Card>
          </Link>
         </Grid>
         <Grid item xs={2}>
         <Link to="/AttandaceTable">
         <Card sx={{height:"30px"}}>
         AttandaceTable
         </Card>
          </Link>
         </Grid>
         
       </Grid>
    </div>
  )
}

export default DashBoard