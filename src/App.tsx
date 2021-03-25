import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tracker from './components/Tracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Sandbox project for RIF Analytics
        </p>
        <Tracker />
      </header>
    </div>
  );
}

export default App;
