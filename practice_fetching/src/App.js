import './App.css';

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
  return (
  <>
    <Navigation />
  </>
  );
}

export default App;
