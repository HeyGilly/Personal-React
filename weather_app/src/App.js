import Moment from 'moment';



const Weather_API = {
    keys: "c6734099ed5daa0f854247202a5a8f59",
    base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
    const formatDate = Moment().format("MMM Do YY");




    return (
     <div className={"app"}>
         <main>
             <section className={"search-container"}>
                 <input
                     type={"Text"}
                     className={"searchBar"}
                     placeholder={"City..."}
                 />
             </section>
             <section className={"location-container"}>
                 <p className={"location"}>Los Angeles, California</p>
                 <p className={"date"}>{formatDate}</p>
             </section>
             <section className={"weather-container"}>
                 <p className={"temp"}> 72˚F</p>
                 <p className={"weather"}>Cloudy</p>
             </section>
         </main>
     </div>
    )
}

export default App;
