import React from 'react';
import './App.css';
import Knob from "./components/Knob"

function App() {
  return (
    <div className="App">
      <Knob low={50} high={360-50}/>
    </div>
  );
}

export default App;
