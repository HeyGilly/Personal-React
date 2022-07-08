import './App.css';
import React, { useState } from 'react';

function App() {
  const [feelingStatus, setFeelingStatus] = useState("Default");
  return (
    <>
      <h1>Welcome!</h1>
      <h3>Today we are feeling: {feelingStatus}</h3>

      <button onClick={()=> setFeelingStatus("Happy")}>Happy</button>
      <button onClick={()=> setFeelingStatus("Tired")}>Tired</button>
      <button onClick={()=> setFeelingStatus("Excited")}>Excited</button>
    </>
  );
}

export default App;
