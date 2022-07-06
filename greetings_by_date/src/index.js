import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// The Current time
const current = new Date();
const CurrentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const CurrentHourRightNow = `${current.getHours()}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App currentDate={CurrentDate} currentHour={CurrentHourRightNow}/>
  </React.StrictMode>
);
