import './App.css';
import { useState} from "react";

//--- Header
function Navigation(){
  return(
      <>
        {/*Header*/}
        <nav className="bg-dark shadow p-0 m-0 w-100 fixed-top">
          <section className={"container py-3 d-flex align-items-center "}>
            <img src={"/favicon.ico"} className={"App-logo"} alt="logo" />
            <p className={"text-warning pt-4 ps-3"}><b>Fetching API</b></p>
          </section>
        </nav>
      </>
  )
}



function App() {
    const [info, setInfo] = useState("");
    const [userInput, setUserInput] = useState("");

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    //-- Fetching Data When Button is Called
    const FetchThatData = () => {
        setLoading(true);
        fetch(`https://bobsburgers-api.herokuapp.com/characters/48`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInfo(data)
            })
            .then(()=>setLoading(false))
            .catch(setError);
    }



    return (
  <>
    <Navigation />
      <main className={"mt-5 pt-5"}>
          <section className={"mt-5 pt-5 mx-5 px-5"}>
              <div className="input-group mb-3 px-md-5">
                  <input type={"text"}
                         className="form-control"
                         placeholder="Enter Number"
                         aria-label="Number Is Entered"
                         aria-describedby="basic-addon2"
                         onChange={(e)=> setUserInput(e.target.value)}
                         value={userInput}
                  />
                  <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="button" onClick={FetchThatData}>Button</button>
                  </div>
              </div>
          </section>
          <section className={""}>
              { loading && <h2>Loading...</h2> }
              { error &&  <h2>SOMETHING WENT WRONG</h2>}
              { !info && <h2>No Data</h2> }
              {info &&
                  <div className={"d-md-flex row"}>
                      <section className={"d-flex justify-content-center my-5 py-5 col-md-6 col-lg-4 ms-lg-5"}>
                          <img src={info.image} alt={info.name} height={480} className={"rounded-5 shadow"}/>
                      </section>
                      <section className={"mx-4 px-md-4 mx-md-0 mt-md-5 pt-md-5 col-md-6 col-lg-3"}>
                          <h1 className={"mt-lg-5"}>{info.name}</h1>
                          <a href={info.wikiUrl} target="_blank">Wiki Page</a>
                          <p><strong>Age:</strong> {info.age}</p>
                          <p><strong>Sex:</strong> {info.gender}</p>
                          <p><strong>Occupation:</strong> {info.occupation}</p>
                          <p><strong>First Aired:</strong> {info.firstEpisode}</p>
                          <p><strong>Voiced by:</strong> {info.voicedBy}</p>
                      </section>
                      <section className={"ms-3 col-md-8 mx-md-auto col-lg-4"}>
                          {/*Headers*/}
                          <h2 className={"text-underline text-decoration-underline mx-4 mx-lg-0 mt-5 mb-3"}>Relatives</h2>
                          {/*Relatives*/}
                          <aside className={""}>
                              <section className={"ps-2"}>
                                  <section className={"d-flex flex-wrap"}>
                                      {
                                          Object.entries(info.relatives).map(([key, value]) =>
                                              <>
                                                  <a className={"bg-dark text-light text-center rounded px-3 py-1 my-1 mx-1 text-decoration-none relativesButton"} href={value.wikiUrl} target={"_blank"}>
                                                      <span key={value.id}>{value.name} | </span>
                                                      <small key={value.id}>{value.relationship}</small>
                                                  </a>
                                              </>
                                          )
                                      }
                                  </section>
                              </section>
                          </aside>
                      </section>
                  </div>
              }

          </section>
      </main>
  </>
  );
}

export default App;
