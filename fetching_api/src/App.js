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

function displaySearch(e){
    if(e.keyCode === 13){
        alert("you git enter")
    }
}


function App() {

    const [inputValue, setInputValue] = useState("");

    const submit = (e) =>{
        e.preventDefault();         // This prevents the page from refreshing
        alert(`${inputValue}`)
        setInputValue(" ");
    }

  return (
    <>
        <Navigation />
            <main>
                <section className={"d-flex align-items-center border justify-content-center formContainer"}>
                    <form className={"bg-dark p-3 rounded-3"} onSubmit={submit}>
                        <input
                            value={inputValue}
                            onChange={(event => setInputValue(event.target.value))}
                            type={"text"}
                            placeholder={"Place your Input here"}
                            className={""}
                        />
                        <button type="submit" className="btn btn-light mb-2 ms-2">Submit</button>
                    </form>
                </section>
                <section>

                </section>
            </main>
        <Footer />
    </>
  );
}

export default App;
