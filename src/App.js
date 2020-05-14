import React from 'react';
import './App.css';
import Knob from "./components/Knob"

function App() {
  return (
    <div className="App">
      <Knob
          size={100}
          numTicks={25}
          degrees={260}
          min={1}
          max={100}
          value={30}
          color={true}
      />
    </div>
  );
}

export default App;
