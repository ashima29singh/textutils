import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import Alert from './components/Alert';

function App() {

  const[mode, setmode] = useState('light');
  // const[alert, setalert] = useState(null);

  // const showAlert = (message , type)=>{
  //   setalert({
  //     message: message,
  //     type: type
  //   })
  // }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }  
  }
  return (
    <>
    
<Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
{/* <Alert alert= {alert}/> */}
<div className="conatiner my-3">
<TextForm heading = "Enter the text below"/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
