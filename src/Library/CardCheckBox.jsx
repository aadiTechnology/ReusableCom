import React from 'react';
import { Typography, Box, Grid, Checkbox } from '@mui/material';


function CardCheckBox({ itemList }) {

    return (
        <div>
            <Grid container >
                <Grid item xs={2} sx={{display:"flex", alignItems:"center" ,justifyContent:"center", border: "1px solid black"}}>
                    select class
                </Grid>
                <Grid item xs={4} >
                    {itemList.map((item, i) => (
                        <div key={i} >



                            <Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid black" }} p={2}>
                                <Typography> <Checkbox />{item.text1}</Typography>
                                <Typography><Checkbox />{item.text2}</Typography>
                                <Typography><Checkbox />{item.text3}</Typography>
                                <Typography><Checkbox />{item.text4}</Typography>
                                <Typography><Checkbox />{item.text5}</Typography>
                            </Box>



                        </div>
                    ))}
                </Grid>

            </Grid>


        </div>
    )
}

export default CardCheckBox