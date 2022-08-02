
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import Footer from './components/footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  // whether dark mode is enabled or not..
  const [mode,setMode]= useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{

     setAlert(null);
    },1000);

  }

 const  toggleMode=()=>{

    if(mode=='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled","primary")
    }
    else {     
      setMode('light')    
      document.body.style.backgroundColor = '#CDD4DD'
      showAlert("Light Mode has been enabled","info")
    }
    } 

  return (
    <>

    <Navbar title="TestUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
     <Routes>   
        <Route path="/" element={ <TextForm  showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode} />} />
         <Route path="/about" element={<About  mode={mode} />} />
    </Routes>

    <Footer mode={mode} />
 

 


 
    </>
  );
}

export default App;
