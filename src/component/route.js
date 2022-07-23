

  // import React ,{ useState } from 'react';
  // import './App.css';
  // import Navbar from './component/Navbar';
  // import TextForm from './component/TextForm';
  // import Alert from './component/Alert';
  // import {
  //   BrowserRouter as Router,
  //   Routes,
  //   Route,
  //   Link
  // } from "react-router-dom";
  
  
  // function App() {
  //   const[mode, setMode]= useState('light');
  //   const[alert,setAlert] =useState(null);
    
  //   const showAlert = (massage, type)=>{
  //     setAlert({
  //       msg: massage,
  //       type: type
  //     })
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 1500);
  //   }
  //   const toggleMode = ()=>{
  //       if(mode === 'light'){
  //         setMode('dark')
  //         document.body.style.background='blue';
  //         showAlert("Dark Mode has been enabled","success");
  //         document.title = 'dasabhishek955 - Dark';
  //        // setInterval(() => {
  //         //  document.title = 'Sexy Boy';
  //         //}, 2000);
  //         //setInterval(() => {
  //         //  document.title = 'Nice Boy';
  //        // }, 1500);
  //       }
  //       else {
  //         setMode('light')
  //         document.body.style.background='white';
  //         showAlert("light Mode has been enabled","success");
  //         document.title = 'dasabhishek955 - Light';
  //       }
  //     }
  //   return (
  //     <>
  //       <Navbar title="Appname" mode={mode} toggleMode = {toggleMode} />
  //       {<Alert alert={alert}/>}
  //       <div className="container">
  //       {/* <Link to="/about">About</Link> */}
        
           
  //             <TextForm showalert={showAlert} heading = "enter your text" mode={mode}/>
             
  //             {/* <Routes>
  //                  <Route  path="/" element={<Home/>}/>
  //                  <Route  path="/about" element={<About/>}/>
  //             </Routes> */}
  
  
  //           {/* <Route path="/about">
  //             <About/>
  //           </Route> */}
  //       </div>
  //       </>     
  //           );
  // }
  
  // export default App;
  