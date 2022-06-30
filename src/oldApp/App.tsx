import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from '../Message';



function App() {
  let firstValue:string = "Shaman" 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          el valor de {firstValue} es de {typeof firstValue} type
        </p>
        <Message name="shaman" message='Simple message' />
      </header>
    </div>
  );
}

export default App;
