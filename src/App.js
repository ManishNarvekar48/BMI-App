import React, { useMemo, useState } from 'react'
import "./App.css";

function App() {

  const [height, setHeight] = useState(1);
  const [weight, setWeight] = useState(1);

  function onWeightChange(event) {
    setWeight(event.target.value)
  }

  function onHeightChange(event) {
    setHeight(event.target.value)
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1)
  }, [weight, height]);

  return (
    <div className="App">
      <div className='cen'>
        <div id='nav'>
          <h1>BMI Calculator</h1>
        </div>
        <div className='input-section'>
          <p className='slider-output'>
            <h4>Weight : {weight}kg</h4>
          </p>
          <input className='input-slider' type='range' step="1" min="1" max="200" onChange={onWeightChange}></input>
          <p className='slider-output'>
            <h4>Height : {height}cm</h4>
          </p>
          <input className='input-slider' type='range' step="1" min="1" max="200" onChange={onHeightChange}></input>

        </div>
        <div className='output-section'>
          <p>
            <b>Your BMI is</b>
          </p>
          <h2><p className='output'>{output}</p></h2>
        </div>
      </div>
    </div>


  );
}

export default App;
