import {useEffect, useState} from "react";

function App() {
    //Capture the input and stores in an
    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");

    // Console log the value after every push.
    // Adding a dependency array this will allow you to showcase only this console log.
    useEffect(()=> {
        console.log(`field 1: ${val}`);
    }, [val])

    // Console log the value after every push.
    // Adding a dependency array this will allow you to showcase both values.
    useEffect(()=> {
        console.log(`field 2: ${val2}`);
    }, [val,val2])


    return (
        <>
            <label>
                Favorite Phrase:
                <input value={val} onChange={e=> setVal(e.target.value)}/>
            </label>
            <br />
            <label>
                Second Favorite Phrase:
                <input value={val2} onChange={e=> setVal2(e.target.value)}/>
            </label>
        </>
    )
}

export default App;
