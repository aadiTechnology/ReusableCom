import React from 'react'
import TableView from '../Library/TableView'
import { Container } from '@mui/material'


function MonthWiseAttandace() {
const HeaderArray = [{Id:1, Header:"Roll No."},{Id:2, Header:"Student Name"},{Id:3, Header:"Mar"} ,{Id:4, Header:"April"},{Id:5, Header:"May"} ,{Id:6, Header:"June"}
    ,{Id:7, Header:"July"} ,{Id:8, Header:"Aug"},{Id:9, Header:"Sep"},{Id:10, Header:"Oct"},{Id:10, Header:"Nov"},{Id:10, Header:"Des"},{Id:11, Header:"Jan"},{Id:12, Header:"Feb"},{Id:13, Header:"Present Days"},{Id:14, Header:"Total Days"},{Id:15, Header:"%"}
     ]

     const ItemList = [{Id:1,Text1:"studentName1", Text2:"3/5" , Text3:"1/7"  , Text4:"3/5"  , Text5:"3/5"  , Text6:"3/5"  , Text7:"3/5"},{Id:1,Text1:"studentName1", Text2:"3/5" , Text3:"1/7"  , Text4:"3/5"  , Text5:"3/5"  , Text6:"3/5"  , Text7:"3/5"},{Id:1,Text1:"studentName1", Text2:"3/5" , Text3:"1/7"  , Text4:"3/5"  , Text5:"3/5"  , Text6:"3/5"  , Text7:"3/5"},
     {Id:1,Text1:"studentName1", Text2:"3/5" , Text3:"1/7"  , Text4:"3/5"  , Text5:"3/5"  , Text6:"3/5"  , Text7:"3/5"},{Id:1,Text1:"studentName1", Text2:"3/5" , Text3:"1/7"  , Text4:"3/5"  , Text5:"3/5"  , Text6:"3/5"  , Text7:"3/5"}]
  return (
    <Container maxWidth={'xl'}>
        <TableView  ItemList={ItemList} HeaderArray={HeaderArray}/>
      
    </Container>
  )
}

export default MonthWiseAttandace