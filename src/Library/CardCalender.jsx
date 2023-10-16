import { Card, Typography, Grid, Box, IconButton } from '@mui/material'
import React, { useState } from 'react'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CalenderSingleDate from './CalenderSingleDate';
function CardCalender({ ItemList, ClickItemList,handlePrevMonth ,handleNextMonth ,formattedDate}) {

    const click1 = (value) => {
        // console.log(value, "valuesingle");
      
        // const updatedItemList = ItemList.map((item) => ({
        //   ...item,
        //   IsActive: item.id === value.id,
        // }));
      
        ClickItemList(value + ' ' + formattedDate);
      };

return (
    <Card component={Box} p={2}>
      <Box sx={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <IconButton onClick={()=>handlePrevMonth()} sx={{float:'left'}}>
          <Card  >
            <ArrowBackIosNewIcon />
          </Card>
        </IconButton>
        {formattedDate}
       
        <IconButton onClick={()=>handleNextMonth()}  sx={{ float: 'right'}}>
          <Card >
            <ArrowForwardIosIcon />
          </Card>
        </IconButton>
      </Box>
    <Grid container columnSpacing={1} rowSpacing={1}>
        {ItemList.map((item, i) => {
          return(
            <Grid item xs={2} sx={{ textAlign: "center" }} key={i}>
            <CalenderSingleDate item={item} clickItem={()=>{click1(item.Name)}}/>
          </Grid>
          )
        })
        }



      </Grid>
    </Card>
  )
}

export default CardCalender