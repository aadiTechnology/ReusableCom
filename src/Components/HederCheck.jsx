import React from 'react'
import HeaderCheckBox from '../Library/HeaderCheckBox'
import TableColor from '../Library/TableColor'
import PublishButton from '../Library/PublishButton'
import AllCheck from '../Library/AllCheck'

function HederCheck() {
    const Header = [
        {Id:1,Text1:"Roll No."},
        {Id:2,Text1:"Student Name"},
        {Id:3,Text1:"Height", IsActive:true },
        {Id:4,Text1:"Weight",  IsActive:true},
        
     ]
  
     const list = [
      {Id:1,Text1:"1",Text2:"aayushi" , Text3:"6" , Text4:"78" ,IsActive:true},
      {Id:1,Text1:"2",Text2:"dhiraj" , Text3:"6" , Text4:"78", IsActive:true},
      {Id:1,Text1:"3",Text2:"Anju" , Text3:"6" , Text4:"78" ,IsActive:true},
      {Id:1,Text1:"4",Text2:"Apurva" , Text3:"6" , Text4:"78",IsActive:true},
      {Id:1,Text1:"5",Text2:"qeuufh" , Text3:"6" , Text4:"78",IsActive:true},
    
     ]


     const HeaderArray = [
        {Id:1,Header:"Class"},{Id:2,Header:"Subject" },{Id:3,Header:"Assign" }
     ]

     const itemList = [ 
        
    { Id:"1",Text1:"7B", Text2:"Library",IsActive:true, Text3:"Assign" },
    { Id:"2",Text1:"6B", Text2:"Books",IsActive:true, Text3:"Assign" }
     ]


     const HeaderPublish = [
        {Id:1,Header:"Date"},{Id:2,Header:"AttachMent" },{Id:3,Header:"Publish/UnPublish" }
        ,{Id:4,Header:"Edit" }
        ,{Id:5,Header:"Delete" }
     ]

     const itemPublish = [ 
        
    { Id:"1",Text1:"3-11-2023", Text2:"link", IsActive:true, },
    { Id:"2",Text1:"4-11-2023", Text2:"linkAttachment",IsActive:true,  }
     ]

     const ItemListCheck = [ 
        
      { Id:"1",RollNo:"1" ,Name:"KG1",IsActive:false ,Text:"stdent2"}, { Id:"2",RollNo:"2",Name:"KG2",IsActive:false,Text:"stdent4"},{ Id:"3",RollNo:"3",Name:"KG4",IsActive:false,Text:"stdenr"},{ Id:"4",Name:"KG6",IsActive:false,Text:"stden45",RollNo:"4"},
  
      
      ]
  return (
    <div>
       <AllCheck ItemList={ItemListCheck}/>
       <br></br>
       <br></br>
       <br></br>
       <TableColor ItemList={itemList} HeaderArray={HeaderArray}/>

       <br></br>   
       <br></br>  
       <br></br>  

       <PublishButton ItemList={itemPublish} HeaderArray={HeaderPublish}/>
    </div>
  )
}

export default HederCheck