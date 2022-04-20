
const Weather_API = {
    keys: "c6734099ed5daa0f854247202a5a8f59",
    base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
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
         </main>
     </div>
    )
}

export default App;
