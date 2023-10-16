import React from 'react'
import TableEvent from '../Library/TableEvent'

function EventOverview() {
    const HeaderArray = [{Id:1, Header:"Month(s)"},{Id:2, Header:"Day"},{Id:3, Header:"EventTitle"} ,{Id:4, Header:"Standards"}]

    const itemList = [{id:1, Name:"April" [{Text1:"TuesDay", Text2:"Event" , Text3:"1st"},{Text1:"TuesDay", Text2:"Event" , Text3:"1st"},
    {Text1:"TuesDay", Text2:"Event" , Text3:"1st"},{Text1:"TuesDay", Text2:"Event" , Text3:"1st"}

]} ,]
  return (
    <div>
        <TableEvent HeaderArray={HeaderArray}  itemList={itemList}/>
    </div>
  )
}

export default EventOverview