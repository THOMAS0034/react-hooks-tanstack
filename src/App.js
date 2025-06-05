import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';


const App = () => {

  const [inputval,setinputval] = useState("ryan");

  onchange =(event)=>{
    const newval=event.target.value;
    setinputval(newval)
  }

  return (
    <div className="App">
      <input placeholder='enter the value' onChange={onchange}/>
      <h1>{inputval}</h1>
    </div>
  );
}
export default App;
