import './App.css';
import React, { useState} from "react";

function App() {

    const [count, setCount] = useState(0)

    //Creating two functions that have two different color text display
    function PositiveNumber() {
        return (
        <h1 className={"text-success text-center"}>
            {count} points!
        </h1>
        )
    }

    function NegativeNumber() {
        return (
            <h1 className={"text-danger text-center"}>
                {count} points!
            </h1>
        )
        }
    function ZeroNumber() {
        return (
            <h1 className={"text-light text-center"}>
                {count} points!
            </h1>
        )
    }
    function PositiveNegativeNumber() {
        if (count > 0) {
            return <PositiveNumber />;
        } else if ( count < 0){
            return <NegativeNumber />;
        } else {
            return <ZeroNumber />;
        }
    }

    function PositiveButton(){
        return (
            <button type="button" className="btn btn-success w-100 h-100 rounded-4 buttonText" onClick={() => setCount(prevCount => prevCount + 1)}>
                +1
            </button>
        )
    }
    function NegativeButton(){
        return (
            <button type="button" className="btn btn-danger w-100 h-100 rounded-4 buttonText" onClick={() => setCount(prevCount => prevCount - 1)}>
                +1
            </button>
        )
    }


  return (
    <>
      <div className={'bg-dark vh-100 mx-auto d-flex row align-items-center justify-content-center'}>
          <section className={" col-12 col-md-3 h-25"}>
              <PositiveButton  />;
          </section>
          <section className={" col-12 col-md-6 col-lg-4 p-0 m-0"}>
              <PositiveNegativeNumber  />;
          </section>
          <section className={" col-12 col-md-3 h-25"}>
              <NegativeButton  />;
          </section>
          <button type="button" className="btn btn-warning w-75 rounded-4 buttonText p-0 m-0" onClick={() => setCount(0)}>
              0
          </button>
      </div>



    </>
  );
}

export default App;
