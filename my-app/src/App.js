
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#021f2c';
      showAlert("Dark mode has been enabled","Success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>

    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> 
     <Navbar/> */}

     {/* /users ----> Component -1
      /users/home ---> ---> Component -2
      It means if we don't use exact path then react will do partial matching and see only users and render Component -1 again and again */}

    {/* <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="about/" element={<About/>}>
          </Route>
          <Route exact path="/" element=
          {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router> */}


    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
       <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
