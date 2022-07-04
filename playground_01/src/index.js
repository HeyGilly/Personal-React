import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Playground_Component from './App'; // from App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
const RandomUser = "Snake"

const current = new Date();
const CurrentTime = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

root.render(
  <React.StrictMode>
    <Playground_Component username={RandomUser} currentTime={CurrentTime}/>
  </React.StrictMode>
);
