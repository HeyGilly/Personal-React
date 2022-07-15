import './App.css';

// Header Section
function Header(){
  return(
      <>
        {/*Header*/}
        <header className="bg-dark shadow p-0 m-0 w-100">
          <section className={"container py-3 d-flex align-items-center "}>
            <img src={"/favicon.ico"} className={"App-logo"} alt="logo" />
              <p className={"text-warning pt-4 ps-3"}><b>PlayGround 02</b></p>
          </section>
        </header>
      </>
  )
}


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
  return (
    <>
      <Header />
        <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
