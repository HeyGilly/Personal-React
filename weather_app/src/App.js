import icons from './Assets/sun.png';
import iconCloud from './Assets/cloudy.png'
import iconRain from './Assets/rain.png'
import iconSnow from './Assets/snow.png'
import iconThunder from './Assets/thunderstorm.png'
import iconTornado from './Assets/tornado.png'
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
            // console.log(hourDisplay)
            fetch(`${weather_API_call}weather?q=${searchedCityName}&appid=${REACT_APP_API_KEY}&lang={"en"}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);     // passed through another promise and this is going to be saved under variable name weather.
                    setLocation('');     // turn the search bar into (" "), so you can put in your next location.
                    // console.log(result);    // this should show you the data of the location you searched.
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

    // Current hour in 24 horus
    const hourDisplay = Intl.DateTimeFormat(
        'en',
        {
            hour: "numeric",
            hour12: false }
    ).format(new Date());






  return (
      <div className={(hourDisplay >= 18) ? 'App Evening' : 'App'}>
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
        {/*If else Statement*/}
        {(typeof weather.main != "undefined") ? (
            <div>
                {/*Time, location, date display*/}
                <header className="timeDateContainer">
                    <p className={'time'}>{timeDisplay}</p>                    {/* Time display*/}
                    <div className="location">{weather.name}, {weather.sys.country}</div> {/* location */}
                    <p className={'date'}>{dateDisplay}</p>                    {/* Date - day month year*/}
                </header>
                {/*Weather Display*/}
                <main>
                    <section className={"weather-Container"}>
                        {/*Change from kelvin to Fahrenheit*/}
                        <p className={'temperatureDisplay'}>{Math.round(((weather.main.temp - 273.15)* 1.8000) + 32.00)}°F</p>          {/* Temp   */}
                        <p className={'describeWeather'}>{weather.weather[0].main}</p>          {/* Description of Weather   */}
                    </section>
                </main>
                {/*Weather Icons*/}
                <div className={'iconContainer'}>
                    <img src={
                        (weather.weather[0].main === "Clouds") ? (iconCloud):
                            (weather.weather[0].main === "Sunny") ? (icons):
                                (weather.weather[0].main === "Clear") ? (icons):
                                    (weather.weather[0].main === "ThunderStorm") ? (iconThunder):
                                        (weather.weather[0].main === "Drizzle") ? (iconRain):
                                            (weather.weather[0].main === "Rain") ? (iconRain):
                                                (weather.weather[0].main === "Snow") ? (iconSnow):
                                                    (weather.weather[0].main === "Tornado") ? (iconTornado):('')
                    } alt="Weather Icons" className={'icons'} />
                </div>
            </div>

        ) : (

            <div>
                {/*Time, location, date display*/}
                <header className="welcomePage">
                    <p className={'welcomeTime'}>{timeDisplay}</p>                    {/* Time display*/}
                    <h1 className={'welcome'}>Welcome to the Weather App</h1>
                    <hr />
                    <p className={'smallText'}>Search for any city and press enter. </p>
                </header>
            </div>
        )}

    </div>
  );
}
export default App;
