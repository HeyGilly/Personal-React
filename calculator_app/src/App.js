

function App() {
    const createDigits = () => {
        // Create an array of digits that will store your array elements ( 1,2,3,4,5,6,7,8,9)
        const digits = [];

        // a for loop that will create the numbers 1 -9
        // this will push the numbers that are now buttons to the digits array.
        for(let xy = 1; xy <10;xy++ ){
            digits.push(
                <button key={xy}>{xy}</button>
            )
        }
        return digits;
    }


  return (
    <div className="App">

        <main className={"calculator"}>
            {/*Display of results and numbers*/}
            <section className={"display"}>
              <span>(0)</span> 0
            </section>
            {/*Buttons*/}
            <section className={"operators"}>
                <button>/</button>
                <button>*</button>
                <button>+</button>
                <button>-</button>
                <button>C</button>
            </section>

            {/*Going to use a function that will display the numbers for us. */
            /*If we wrote it, the code will be long and repetitive. */
            /*long list of buttons*/}
            <section className={"digits"}>
                { createDigits() }    {/*} //This is calling the function*/}
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </section>

        </main>


    </div>
  );
}

export default App;
