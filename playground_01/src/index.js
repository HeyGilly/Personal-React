import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Playground_Component from './App'; // from App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
const RandomUser = "Snake"

const current = new Date();
const CurrentTime = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const TheListOfHobbies = [
    "Basketball",
    "Festivals",
    "Scooter Around",
    "walking",
    "Watching Documentaries",
    "Traveling"
]


const THeListOfBooksIEnjoy = [
    { title:"The Outsiders",author:"S.E. Hinton"},
    { title:"1984",author:"George Orwell"},
    { title:"To Kill A Mockingbird",author:"Harper Lee"},
    { title:"Of Mice and Men",author:"John Steinbeck"}
]

root.render(
  <React.StrictMode>
    <Playground_Component username={RandomUser} currentTime={CurrentTime} hobbiesList={TheListOfHobbies} bookList={THeListOfBooksIEnjoy}/>
  </React.StrictMode>
);
