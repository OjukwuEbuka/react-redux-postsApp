import React from 'react';
import logo from './logo.svg';
import './App.css';
const {proxy} = require('./services/keys')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Emaily
        </a>
      </header>
      <a href="/auth/google">Sign in With Google</a> 
    </div>
  );
}

export default App;
