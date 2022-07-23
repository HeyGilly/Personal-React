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


    //-- Fetching Data When Button is Called
    const FetchThatData = () => {
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${userInput}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInfo(data)
            })
    }

  return (
  <>
    <Navigation />
      <main className={"mt-5 pt-5 mx-5 px-5"}>
          <section className={"mt-5 pt-5 mx-5 px-5"}>
              <div className="input-group mb-3 mt-5 pt-5 mx-5 px-5">
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
          <section className={"border py-5"}>
              {info
                  ? <pre>{JSON.stringify(info, null,2)}</pre>
                  : <h2> No Data</h2>
              }
          </section>
          <section>
              <p>{info.name}</p>
          </section>
      </main>
  </>
  );
}

export default App;
