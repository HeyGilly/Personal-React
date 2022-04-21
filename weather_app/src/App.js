import icons from '../src/Assets/sun.png'
function App() {

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
            <img src={icons} alt="Weather Icons" width={200}/>
        </div>

    </div>
  );
}

export default App;
