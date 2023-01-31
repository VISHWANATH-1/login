import './App.css';
import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';
function App() {
  const [currentform, setCurrentForm]= useState ('');
  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div className="App">
     {
      currentform === "Login" ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm} />
     }
    </div>
  );
}

export default App;
