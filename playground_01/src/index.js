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
    {id:1, title:"The Outsiders",author:"S.E. Hinton"},
    {id:2, title:"1984",author:"George Orwell"},
    {id:3, title:"To Kill A Mockingbird",author:"Harper Lee"},
    {id:4, title:"Of Mice and Men",author:"John Steinbeck"}
]

root.render(
  <React.StrictMode>
    <Playground_Component username={RandomUser} currentTime={CurrentTime} hobbiesList={TheListOfHobbies} bookList={THeListOfBooksIEnjoy}/>
  </React.StrictMode>
);
