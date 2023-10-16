import React, { useState , useEffect} from 'react'
import CardCalender from '../Library/CardCalender'
import CardToggle from '../Library/CardToggle'
const ItemList = [
    {id:1 , Name:"1" ,value:1 , IsActive:false, category:"1" ,categoryName:"Holiday"},
    {id:2 , Name:"2" ,value:2, IsActive:false , category:"3" ,categoryName:"Present"},
    {id:3 , Name:"3" ,value:3, IsActive:false,category:"3" ,categoryName:"Present"}, 
    {id:4, Name:"4" , value:4 ,IsActive:false,category:"3" ,categoryName:"Present"},
    {id:5 , Name:"5" ,value:5 , IsActive:false ,category:"3" ,categoryName:"Present"},
    {id:6 , Name:"6" ,value:0, IsActive:false ,category:"2",categoryName:"Weekend"} ,
    {id:7 ,value:0, Name:"7",IsActive:false,category:"2" ,categoryName:"Weekend"},
    {id:8 ,value:8, Name:"8",IsActive:false,category:"3" ,categoryName:"Present"},
    {id:9 ,value:9, Name:"9",IsActive:false,category:"3" ,categoryName:"Present"},
    {id:10 ,value:10, Name:"10",IsActive:false,category:"4" ,categoryName:"Absent"},
    {id:11 ,value:11, Name:"11",IsActive:false,category:"5" ,categoryName:"Attendance Unavailable"},
    {id:12 ,value:12, Name:"12",IsActive:false,category:"5",categoryName:"Attendance Unavailable"},
    {id:13 ,value:0, Name:"13",IsActive:false,category:"2" ,categoryName:"Weekend"},
    {id:14 ,value:0, Name:"14",IsActive:false,category:"2" ,categoryName:"Weekend"},
    {id:15,value:15, Name:"15",IsActive:false,category:"3" ,categoryName:"Present"},
    {id:16 ,value:16, Name:"16",IsActive:false,category:"3" ,categoryName:"Present"},
    {id:17 ,value:17, Name:"17",IsActive:false,category:"3",categoryName:"Present"},
    {id:18 ,value:18, Name:"18",IsActive:false,category:"3",categoryName:"Present"},
    {id:19 ,value:19, Name:"19",IsActive:false,category:"3",categoryName:"Present"},
    {id:20 ,value:0, Name:"20",IsActive:false,category:"2",categoryName:"Weekend"},
    {id:21 ,value:0, Name:"21",IsActive:false,category:"2",categoryName:"Weekend"},
    {id:22 ,value:22, Name:"22",IsActive:false,category:"3" ,categoryName:"Present"},
    {id:23, value:23, Name:"23",IsActive:false,category:"3" ,categoryName:"Present"},
    {id:24 ,value:24, Name:"24",IsActive:false,category:"3",categoryName:"Present"},
    {id:25 ,value:25, Name:"25",IsActive:false,category:"3",categoryName:"Present"},
    {id:26 ,value:26, Name:"26",IsActive:false,category:"3",categoryName:"Present"},
    {id:27 ,value:27, Name:"27",IsActive:false,category:"2",categoryName:"Weekend"},
    {id:28 ,value:28, Name:"28",IsActive:false,category:"2",categoryName:"Weekend"},
    {id:29, value:29, Name:"29",IsActive:false,category:"1",categoryName:"Hoilday"},
    {id:30 ,value:30, Name:"30",IsActive:false,category:"4",categoryName:"Absent"},
    {id:31 ,value:0, Name:"31",IsActive:false,category:"4",categoryName:"Absent"},]
function Calender() {
    const [ItemList1 , setItemList1]=useState(ItemList)

    const ClickItemList=(value)=>{
        alert(value)
    //  setItemList1(value)
   
    }
    const [date, setDate] = useState(new Date());
    const formattedDate = ` ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
      
    const handlePrevMonth = () => {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() - 1);
          setDate(newDate);
    };
    
    const handleNextMonth = () => {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() +1);
          setDate(newDate);
    };
    const ItemListT=[
        {id:1, Text:"Present"}, {id:2, Text:"Absent"}
      ]

  
       
      const [itemListT , setitemListT]=useState(ItemListT)

      const [alignment, setAlignment] = React.useState(1);
    
        const handleChange =(value)=>{
           setAlignment(value)
           }
          
           useEffect(()=>{
            setitemListT(itemListT)
           },[alignment])
  return (
    <div>
    <CardToggle itemList={ItemListT} clickToggle={handleChange} defaultvalue={alignment}/>
       <CardCalender ItemList={ItemList1} 
      ClickItemList={ClickItemList} 
      handlePrevMonth={handlePrevMonth} handleNextMonth={handleNextMonth} 
      formattedDate={formattedDate}/> 
    </div>
  )
}

export default Calender