import React, { useState } from 'react';
import { Checkbox, Typography, Grid, Card, Box } from '@mui/material';

function AllCheck({ ItemList }) {
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [checkboxStates, setCheckboxStates] = useState(
        ItemList.map((item) => item.IsActive)
    );

    const [selectAllChecked1, setSelectAllChecked1] = useState(false);
    const [checkboxStates1, setCheckboxStates1] = useState(
        ItemList.map((item) => item.IsActive)
    );

    const handleSelectAllChange = () => {
        const newSelectAllChecked = !selectAllChecked;
        setSelectAllChecked(newSelectAllChecked);
        setCheckboxStates(Array(ItemList.length).fill(newSelectAllChecked));
    };

    const handleSelectAllChange1 = () => {
        const newSelectAllChecked1 = !selectAllChecked1;
        setSelectAllChecked1(newSelectAllChecked1);
        setCheckboxStates1(Array(ItemList.length).fill(newSelectAllChecked1));
    };

    const handleCheckboxChange = (index) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index] = !newCheckboxStates[index];
        setCheckboxStates(newCheckboxStates);

        const allChecked = newCheckboxStates.every((isChecked) => isChecked);
        setSelectAllChecked(allChecked);
    };

    const handleCheckboxChange1 = (index) => {
        const newCheckboxStates1 = [...checkboxStates1];
        newCheckboxStates1[index] = !newCheckboxStates1[index];
        setCheckboxStates1(newCheckboxStates1);

        const allChecked1 = newCheckboxStates1.every((isChecked) => isChecked);
        setSelectAllChecked1(allChecked1);
    };

    return (
        <div>
            <Card component={Box} p={1} sx={{ backgroundColor: "red" }}>
                <Grid container >
                
                    <Grid item xs={3}>
                        <Typography> RollNo</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography> Name</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Checkbox
                            checked={selectAllChecked}
                            onChange={handleSelectAllChange}
                        />
                        Weight
                    </Grid>

                    <Grid item xs={3}>
                        <Checkbox
                            checked={selectAllChecked1}
                            onChange={handleSelectAllChange1}
                        />
                        Height
                    </Grid>
                </Grid>


            </Card>
            <Card component={Box} p={2}>
                {ItemList.map((item, i) => (
                    <div key={i}>
                        <Grid container>
                           
                            <Grid item xs={3}>
                                <Typography> {item.RollNo}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography> {item.Text}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Checkbox
                                    checked={checkboxStates[i]}
                                    onChange={() => handleCheckboxChange(i)}
                                />
                                {item.Name}
                            </Grid>
                            <Grid item xs={3}>
                                <Checkbox
                                    checked={checkboxStates1[i]}
                                    onChange={() => handleCheckboxChange1(i)}
                                />
                                {item.Name}
                            </Grid>
                        </Grid>


                    </div>
                ))}
            </Card>


        </div>
    );
}

export default AllCheck;
