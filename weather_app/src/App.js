import pic from "./img/icons/sunny.png";
import {useState} from "react";
import Moment from 'moment';

const Weather_API = {
    keys: "c6734099ed5daa0f854247202a5a8f59",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
    // This is for the date
    const formatDate = Moment().format("MMM Do YY");

    //UseState will change the data
    const [locationData, setData] = useState('');
    const [weather, setWeather] = useState({});

    // search function
    const search = e => {
        if (e.key === 'Enter'){
            fetch(`${Weather_API.base}weather?q=${locationData}&units=metric&APPID=${Weather_API.keys}`)
            .then(res  => res.json())      //turns into json and readable
                .then(result => {
                    setWeather(result)
                    setData('');
                    console.log(result)
                })
        }
    }



    return (
     <div className={"app"}>
         <main>
             <section className={"search-container"}>
                 <input
                     type={"Text"}
                     className={"searchBar"}
                     placeholder={"City..."}
                     onChange={e => setData(e.target.value)}
                     value={locationData}
                     onKeyPress={search}  // when enter button is pushed it will run function
                 />
             </section>

             {/*If statement that when on start up you will not get an error, instead you will get a welcome page.*/}
             {(typeof weather.main != 'undefined') ? (
                 <div>
                     <section className={"location-container"}>
                         <p className={"location"}>{weather.name},{weather.sys.country}</p>
                         <p className={"date"}>{formatDate}</p>
                     </section>
                     <section className={"weather-container"}>
                         <p className={"temp"}> 72˚F</p>
                         <p className={"weather"}>Sunny</p>
                         <div className={'img-container'}>
                             <img src={pic}  alt={'sunny'}/>
                         </div>
                     </section>
                 </div>
             ) : (
                 <div className={"welcomePage"}>
                     <h1>Welcome to Weather App</h1>
                     <p className={'welcomeSmall'}>Search for any city and press Enter</p>
                 </div>
             )}
         </main>
     </div>
    )
}

export default App;
