import './App.css';
import {useState} from "react";

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
//--- Footer
function Footer({year}){
    return(
        <>
            <footer className={"text-center bg-dark text-light fixed-bottom"} >
                <p><small>{year}
                    <a className={"text-white text-decoration-none"} href="https://www.linkedin.com/in/heygilly/"> HeyGilly</a>
                </small></p>
            </footer>
        </>
    )
}

function App() {

    const [inputValue, setInputValue] = useState("");

  return (
    <>
        <Navigation />
            <main>
                <section className={"d-flex align-items-center border justify-content-center formContainer"}>
                    <form className={"bg-dark p-3 rounded-3"}>
                        <input value={inputValue} onChange={(event => setInputValue(event.target.value))} type={"text"} placeholder={"Place your Input here"}
                        />
                    </form>
                </section>
            </main>
        <Footer />
    </>
  );
}

export default App;
