
import React from 'react';
import { Box, Typography, Grid, Card } from "@mui/material"

import { Checkbox } from '@mui/material';

function HeaderCheckBox({ ItemList, list }) {
    return (
        <div>


            <Card component={Box} p={2} sx={{ backgroundColor: "gray" }}>
                <Grid container sx={{ textAlign: "center" }}>
                    <>
                        {ItemList.map((item, i) => (
                            <Grid item xs={3} key={i}>
                                <Typography>{item.Text1} {item.IsActive ? <Checkbox /> : ""} </Typography>
                            </Grid>
                        ))

                        }

                    </>
                    {list.map((item, i) => (
                        <>
                            <Grid item xs={3}>
                                <Typography>{item.Text1}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{item.Text2}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{item.Text3}<Checkbox /> </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography>{item.Text4} <Checkbox /></Typography>
                            </Grid>


                        </>

                    ))}
                </Grid>
            </Card>


        </div>
    )
}

export default HeaderCheckBox