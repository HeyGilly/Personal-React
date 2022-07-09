import './App.css';
import React, { useState} from "react";

function App() {

    const [count, setCount] = useState(0)

  return (
    <>
      <div className={'bg-dark vh-100'}>
          <section>
              <button type="button" className="btn btn-success" onClick={() => setCount(prevCount => prevCount + 1)}>
                  Success</button>
          </section>
          <section className={"text-white"}>
              <p>{count} points!</p>
          </section>
          <section>
              <button type="button" className="btn btn-danger" onClick={() => setCount(prevCount => prevCount - 1)}>Danger</button>
          </section>
      </div>



    </>
  );
}

export default App;
