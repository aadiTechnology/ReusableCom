import React from 'react'
import TableAttendaceOverview from '../Library/TableAttandaceOverview';
import ClearIcon from '@mui/icons-material/Clear';

function SchoolAttendaceOverview() {
    const HeaderArray = [
        {Id:1,Header:"Standard"},{Id:2,Header:"A" },{Id:3,Header:"B" },{Id:4,Header:"C" },{Id:5,Header:"D" },{Id:6,Header:"E" },{Id:7,Header:"F" }
     ]

     const ItemList = [ 
        
    { Id:"1",Name:"KG1",IsActive:true }, { Id:"2",Name:"KG2",IsActive:false},{ Id:"3",Name:"KG4",IsActive:false},{ Id:"4",Name:"KG6",IsActive:true},

    
    ]
  return (
    <div>
      <TableAttendaceOverview ItemList={ItemList} HeaderArray={HeaderArray} />  
    </div>
  )
}

export default SchoolAttendaceOverview