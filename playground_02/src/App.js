import './App.css';

// Header Section
function Header(){
  return(
      <>
        {/*Header*/}
        <header className="bg-dark shadow p-0 m-0 w-100">
          <section className={"container py-3 d-flex align-items-center "}>
            <img src={"/favicon.ico"} className={"App-logo"} alt="logo" />
              <p className={"text-warning pt-4 ps-3"}><b>HeyGilly PlayGround 02</b></p>
          </section>
        </header>
      </>
  )
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
