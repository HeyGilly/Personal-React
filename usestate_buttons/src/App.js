import './App.css';
import React, { useState } from 'react';

function App() {
    const [usernameStatus, setUsernameStatus] = useState("LostMindedDev");
    const [feelingStatus, setFeelingStatus] = useState("Crazy");
  return (
    <>
        <header className={"text-center pt-5 pb-5 bg-warning"}>
            <h1>Welcome <span className={"text-decoration-underline"}>{usernameStatus}</span>! </h1>
            <h2>Today we are feeling: <span className={"text-decoration-underline"}>{feelingStatus}</span></h2>
        </header>
        <div className={"d-flex row justify-content-center m-5"}>
            <h4 className={"text-center"}>Change how you feeling today?</h4>
            <button type={"button"} className={"btn btn-dark col-3"} onClick={()=> setFeelingStatus("Happy")}>Happy</button>
            <button type={"button"} className={"btn btn-dark col-3 mx-5"} onClick={()=> setFeelingStatus("Tired")}>Tired</button>
            <button type={"button"} className={"btn btn-dark col-3"} onClick={()=> setFeelingStatus("Excited")}>Excited</button><br />
        </div>
        <div className={"d-flex row justify-content-center m-5"}>
            <h4 className={"text-center"}>Change usernames</h4>
            <button type={"button"} className={"btn btn-dark col-3"} onClick={()=> setUsernameStatus("HappyGilmore")}>HappyGilmore</button>
            <button type={"button"} className={"btn btn-dark col-3 mx-5"} onClick={()=> setUsernameStatus("TiredSusy")}>TiredSusy</button>
            <button type={"button"} className={"btn btn-dark col-3"} onClick={()=> setUsernameStatus("LonelyTraveler")}>LonelyTraveler</button>
        </div>
    </>
  );
}

export default App;
