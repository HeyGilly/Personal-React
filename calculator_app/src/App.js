import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/','*','+','-','.'];

    const updateCal = value => {
        // if statement
        const option1 = ops.includes(value) && calc === '';
        const option2 = ops.includes(value) && ops.includes(calc.slice(-1))

        if (option1 || option2) {return;}
        else{ setCalc(calc + value)};

        //if the last item was not a value of an ops (operator)
        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }

    const createDigits = () => {
        // Create an array of digits that will store your array elements [ 1,2,3,4,5,6,7,8,9]
        const digits = [];

        // a for loop that will create the numbers 1 -9
        // this will push the numbers that are now buttons to the digits array.
        for(let xy = 1; xy <10;xy++ ){
            digits.push(
                <button key={xy} onClick={()=> updateCal(xy.toString())}>{xy}</button>
            )
        }
        return digits;
    }

    // result key
    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    //Delete button
    const deleteLast = () =>{
        if (calc == " "){
            return;
        }

        const value = calc.slice(0,-1);

        setCalc(value);
    }


    // building of html
  return (
    <div className="App">

        <main className={"calculator"}>
            {/*Display of results and numbers*/}
            <section className={"display"}>
                {result ? <span>({result})</span> : ''}
                &nbsp;  {/* non breaking space*/}
                { calc || "0"}
            </section>
            {/*---Buttons---*/}
            <section className={"operators"}>
                <button onClick={()=> updateCal('/')}>/</button>
                <button onClick={()=> updateCal('*')}>*</button>
                <button onClick={()=> updateCal('+')}>+</button>
                <button onClick={()=> updateCal('-')}>-</button>
                <button onClick={deleteLast}>C</button>
            </section>

            {/*Going to use a function that will display the numbers for us. */
            /*If we wrote it, the code will be long and repetitive. */
            /*long list of buttons*/}
            <section className={"digits"}>
                { createDigits() }    {/*} //This is calling the function*/}
                <button onClick={()=> updateCal('0')}>0</button>
                <button onClick={()=> updateCal('.')}>.</button>
                <button onClick={calculate}>=</button>
            </section>

        </main>


    </div>
  );
}

export default App;
