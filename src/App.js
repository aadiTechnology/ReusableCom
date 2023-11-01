import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, ThemeProvider ,CssBaseline,} from '@mui/material';
import MonthWiseAttandace from './Components/MonthWiseAttandace';
import Calender from './Components/Calender';
import DashBoard from './Components/DashBoard';
import ProgressRemarks from './Components/ProgressRemarks';
import SchoolAttendaceOverview from './Components/SchoolAttendaceOverview';
import AttandaceTable from './Components/AttandaceTable';
import CheckBoxSchool from './Components/CheckBoxSchool';



function App() {
  return (
    <Container maxWidth={"xl"}>
      <br></br>
    

      {/* <ThemeProvider> */}
    <CssBaseline />
      <BrowserRouter>
 
      <Routes>

      <Route path="/" element={<DashBoard/>} > </Route>
 
    <Route exact path='/MonthWiseAttandace' element={<MonthWiseAttandace/>}></Route>
    <Route exact path='/Calender' element={<Calender/>}></Route>
    <Route exact path='/ProgressRemarks' element={<ProgressRemarks/>}></Route>
    <Route exact path='/SchoolAttendaceOverview' element={<SchoolAttendaceOverview/>}></Route>
    <Route exact path='/AttandaceTable' element={<AttandaceTable/>}></Route>
    <Route exact path='/CheckBoxSchool' element={<CheckBoxSchool/>}></Route>
    </Routes>
    
    </BrowserRouter>
  
    {/* </ThemeProvider>   */}
    </Container>
  );
}

export default App;
