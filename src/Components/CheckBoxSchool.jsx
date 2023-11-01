import React from 'react'
import CardCheckBox from '../Library/CardCheckBox'

function CheckBoxSchool() {
    const itemList = [{id:1, text1:"junior Kg" , text2:"A" , text3:"B" , text4:"C" , text5:"D"},{id:1, text1:"senior Kg" , text2:"A" , text3:"B" , text4:"C" , text5:"D"},{id:1, text1:"1" , text2:"A" , text3:"B" , text4:"C" , text5:"D"},{id:1, text1:"2" , text2:"A" , text3:"B" , text4:"C" , text5:"D"}]
  return (
    <div>
   <CardCheckBox itemList={itemList}/>
    </div>
  )
}

export default CheckBoxSchool