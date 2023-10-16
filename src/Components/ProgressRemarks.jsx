import React from 'react'
import TabletextArea from '../Library/TabletextArea'
import { Container } from '@mui/material'

function ProgressRemarks() {
    const HeaderArray = [
        {Id:1,Header:"Roll No."},{Id:2,Header:"Name" },{Id:3,Header:"Remark" }
     ]

     const ItemList = [ { Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name8" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name7" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name6" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name5" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name4" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name3" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name2" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},
     { Text1:"1",Text2:" Student Name1" ,Text3:"Attentive"},{ Text1:"1",Text2:" Student Name" ,Text3:"Attentive"},]
  return (
    <Container>
        <TabletextArea HeaderArray={HeaderArray} ItemList={ItemList}/>
        
    </Container>
  )
}

export default ProgressRemarks