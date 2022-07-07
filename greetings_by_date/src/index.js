import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// The Current time
const current = new Date();
const CurrentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const CurrentTimeRightNow = current.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' });
const CurrentHourTime = `${current.getHours()}`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App currentDate={CurrentDate} currentTime={CurrentTimeRightNow} currentHour={CurrentHourTime}/>
  </React.StrictMode>
);
