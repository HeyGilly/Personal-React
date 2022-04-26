import icons from '../src/Assets/sun.png'
import React, { useState } from 'react';

function App() {

    //It is free anyone can get one, that is why it is not hidden.
    const REACT_APP_API_KEY= "c6734099ed5daa0f854247202a5a8f59";
    const weather_API_call = "https://api.openweathermap.org/data/2.5/";


    // UseState
    //a Hook that allows you to have state variables in functional components.
    const [searchedCityName, setLocation] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            // console.log(REACT_APP_API_KEY)
            fetch(`${weather_API_call}weather?q=${searchedCityName}&appid=${REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);     // passed through another promise and this is going to be saved under variable name weather.
                    setLocation('');     // turn the search bar into (" "), so you can put in your next location.
                    console.log(result);    // this should show you the data of the location you searched.
                });
        }
    }

    // Date - present day 00 month year
    const dateDisplay = new Date().toLocaleDateString(
        'en-gb',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    );
    // Time - 2:00 PM
    const timeDisplay = Intl.DateTimeFormat(
        'en',
        {
            hour: "numeric",
            minute: "numeric",
            hour12: true }
    ).format(new Date());


  return (
    <div className="App">
        {/*Search Bar*/}
        <nav>
            <input
            type={"text"}
            className={"searchBar"}
            placeholder={"Search..."}
            onChange={event => setLocation(event.target.value)}
            value = {searchedCityName}
            onKeyPress={search} // run the function on key press, enter
            />
        </nav>
        {/*Time, location, date display*/}
        <header className="timeDateContainer">
          <p className={'time'}>{timeDisplay}</p>                    {/* Time display*/}
          <p className={'location'}>{"Los Angeles, US"}</p>          {/* location    */}
          <p className={'date'}>{dateDisplay}</p>                    {/* Date - day month year*/}
        </header>
        {/*Weather Display*/}
        <main>
            <section className={"weather-Container"}>
                <p className={'temperatureDisplay'}>73°F</p>          {/* Temp   */}
                <p className={'describeWeather'}>Sunny</p>          {/* Description of Weather   */}
            </section>
        </main>
        {/*Weather Icons*/}
        <div className={'iconContainer'}>
            <img src={icons} alt="Weather Icons" className={'icons'} />
        </div>

    </div>
  );
}

export default App;
