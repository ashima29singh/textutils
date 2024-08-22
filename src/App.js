import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const[mode, setmode] = useState('light');
  const[alert, setalert] = useState(null);

  const showAlert = (message , type)=>{
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }  
  }
  return (
    


<Router>
        <Navbar title='TextUtils'About='About' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
      <Routes>
      <Route path="/about" element={<About mode={mode}/>}/>
      <Route path="/" element={<TextForm heading='Try TextUtils- Word counter, Character counter' mode={mode} />} />
      </Routes>
        </div>
</Router>


  );
}

export default App;
