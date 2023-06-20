import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

function App() {
  const [ids, setIds] = useState(uuidv4());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={200}/>
        <div>UUID: {ids}</div><br/>
        <div>UUID: {ids}</div><br/>
        <div>UUID: {ids}</div><br/>
      </header>
    </div>
  );
}

export default App;
