import React ,{ useState } from 'react';
import './App.css';
import About from './component/About';
import TextForm from './component/TextForm';
import Home from './component/Home';
import Alert from './component/Alert'
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
      function App() {
        const[mode, setMode]= useState('light');
        const[alert,setAlert] =useState(null);
        
        const showAlert = (massage, type)=>{
          setAlert({
            msg: massage,
            type: type
          })
          setTimeout(() => {
            setAlert(null);
          }, 1500);
        }
        const toggleMode = ()=>{
            if(mode === 'light'){
              setMode('dark')
              document.body.style.background='blue';
              showAlert("Dark Mode has been enabled","success");
              document.title = 'dasabhishek955 - Dark';
            // setInterval(() => {
              //  document.title = 'Sexy Boy';
              //}, 2000);
              //setInterval(() => {
              //  document.title = 'Nice Boy';
            // }, 1500);
            }
            else {
              setMode('light')
              document.body.style.background='white';
              showAlert("light Mode has been enabled","success");
              document.title = 'dasabhishek955 - Light';
            }
            }
      return (
        <>
        <Router>
            <Navbar title="Appname" mode={mode} toggleMode = {toggleMode} aboutText="About"/>
            {<Alert alert={alert}/>}
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<Home mode={mode} showAlert={showAlert}/>} />
            </Routes>
            
          </Router>
          </>     
        );
    }
  
   export default App;