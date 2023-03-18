import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import About from './components/About';

// const About = require('./components/About') ;


function App() {
  const [mode, setMode] = useState('light') ;
  const [modeText, setModeText] = useState('dark') ;
  const [text, setText] = useState('Enable light Mode') ;
  const [alert, setalert] = useState(null) ;

  function showAlert(message, type){
    setalert({
      msg:message,
      type:type
    }) ;
    setTimeout(() => {
       setalert(null) ;
    }, 1500);
  }
  function toggleMode(){
   if(mode === 'light'){
    setMode('dark') ;
    setModeText('light') ;
    setText('Enable Light Mode') ;
    document.body.style.backgroundColor = '#393633' ;
    document.body.style.color="white" ;
    showAlert("enabled dark mode", "success") ;
   }else{
    setMode('light') ;
    setText('Enable Dark Mode') ;
    setModeText('dark') ;
    document.body.style.backgroundColor = 'white' ;
    document.body.style.color="black" ;
    showAlert("enabled light mode", "success") ;
   }
  } ;
  return (
    <> 
   <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text} modeText={modeText} />
   <Alert alert={alert}/>
   <div className="container" >
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/About" element={<About />} />
        <Route exact path="/TextForm" element={<TextForm heading="Enter your text" showAlert={showAlert} mode={mode}/>} />
        
      </Routes>
      </div>
    </Router>
  
    </>
  );
}

export default App;
