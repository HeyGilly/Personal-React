import './App.css';
import {useState, useEffect, useReducer, useRef} from "react";

//--- Header
function Navigation(){
    return(
        <>
            {/*Header*/}
            <nav className="bg-dark shadow p-0 m-0 w-100 fixed-top">
                <section className={"container py-3 d-flex align-items-center "}>
                    <img src={"/favicon.ico"} className={"App-logo"} alt="logo" />
                    <p className={"text-warning pt-4 ps-3"}><b>PlayGround 02</b></p>
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

//Global Variable
const listOfSkills = [
    "React", "Javascript", "JQuery", "Boostrap", "Java", "spring"
]

// Established an id for this array.
const SkillObject = listOfSkills.map((skill, i) => ({
    id:i,
    name:skill
}))

function Wow(){
    return(
        <>
            <p>Lights are On! </p>
            <img src={"images/lightOn.png"} alt={"lights on"}/>
        </>
    )
}
function Cat(){
    return(
        <>
            <p>You're a CAT person</p>
            <img src={"images/cat.jpg"} alt={"Cat"}/>
        </>
    )
}
function Dog(){
    return(
        <>
            <p>You're a DOG person</p>
            <img src={"images/dog.jpg"} alt={"Dog"}/>
        </>
    )
}

function MainSection({image, listOfSkills}){

    const [emotion, setEmotion] = useState("_______")
    const [hobbies, setHobbies] = useState("_______")

    const [lights, setLights] = useState(true)
    const [catdog, setCatDog] = useReducer(yourResults => ! yourResults, 'none')

// when you pass an empty array, it means that the effect will not be called after the first render
    // when you pass in a property, it will run after every change
    useEffect(()=>{
        console.log(`It's ${emotion} right now`)
    },[emotion]) // Dependency array


    const txtInput = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const name = txtInput.current.value;
        const color = hexColor.current.value;
        alert(`${name}, ${color}`)
        txtInput.current.value = "";
        hexColor.current.value = "";
    }

    const [colorTitle, setcolorTitle] = useState("");
    const [hexColor2, sethexColor2] = useState("#1e1e1e")
    const submit2 = (e) => {
        e.preventDefault();
        alert(`${colorTitle}, ${hexColor2}`)
        setcolorTitle("");
        sethexColor2("#1e1e1e ")
    }


    return (
        <>
            <main id={"mainContainer"} className={"vh-100 d-flex"}>
                <div className={"SetContainer"}>
                    <img src={image} className={"rounded shadow ms-5"} alt={"HeyGilly"}/>
                </div>
                {/*Skills Set*/}
                <div className={"SetContainer"}>
                    <section className={"SkillsTopContainer shadow bg-dark text-light"}>
                        <h2 className={"mx-5 my-2"}><strong>Set of Skills:</strong></h2>
                        <aside className={" border bg-light text-dark ps-3"}>
                                <ul>
                                    {listOfSkills.map(skill => (
                                        <li  key={skill.id}>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                        </aside>
                    </section>
                </div>
                <div className={"SetContainer"}>
                    <section className={"SkillsTopContainer shadow bg-dark text-light"}>
                        <h2 className={"mx-5 text-center my-2"}><strong>Today's Feeling:</strong></h2>
                        <aside className={"listSection border bg-light text-dark ps-3"}>
                           <p className={"p-5 "}>Current Emotion is: {emotion}</p>
                            <section className={"d-flex justify-content-between m-3"}>
                                <button type="button" className="btn btn-dark" onClick={()=> setEmotion("Excited")}>Excited</button>
                                <button type="button" className="btn btn-dark" onClick={()=> setEmotion("Motivated")}>Motivated</button>
                                <button type="button" className="btn btn-dark" onClick={()=> setEmotion("Ready")}>Ready</button>
                            </section>
                        </aside>
                    </section>
                </div>
                <div className={"SetContainer"}>
                    <section className={"SkillsTopContainer shadow bg-dark text-light"}>
                        <h2 className={"mx-5 text-center my-2"}><strong>Today's Feeling:</strong></h2>
                        <aside className={"listSection border bg-light text-dark ps-3"}>
                            <p className={"p-5 "}>Favorite Hobby: {hobbies}</p>
                            <section className={"d-flex justify-content-between m-3"}>
                                <button type="button" className="btn btn-dark" onClick={()=> setHobbies("Basketball")}>Basketball</button>
                                <button type="button" className="btn btn-dark" onClick={()=> setHobbies("Hiking")}>Hiking</button>
                                <button type="button" className="btn btn-dark" onClick={()=> setHobbies("Festivals")}>Festivals</button>
                            </section>
                        </aside>
                    </section>
                </div>
                <div className={"SetContainer"}>
                    <section className={"SkillsTopContainer shadow bg-dark text-light"}>
                        <h2 className={"mx-5 text-center my-2"}><strong>Lights are on/off</strong></h2>
                        <aside className={"listSection border bg-light text-dark ps-3 text-center py-4"}>
                            <input type={"checkbox"} value={lights} onChange={()=> setLights((lights) => !lights)} />
                            <label>{lights ? "Lights are off!" : <Wow /> }</label>
                        </aside>
                    </section>
                </div>
                {/*Toggle Between Cats and Dogs*/}
                <div className={"SetContainer"}>
                    <section className={"SkillsTopContainer shadow bg-dark text-light"}>
                        <h2 className={"mx-5 text-center my-2"}><strong>Are you a Dog/Cat Person?</strong></h2>
                        <aside className={"listSection border bg-light text-dark ps-3 text-center py-4"}>
                            <input className="form-check-input" value={catdog}  onChange={setCatDog} type="checkbox" id="flexSwitchCheckChecked" />
                            <label>{catdog ? <Cat /> : <Dog /> }</label>
                        </aside>
                    </section>
                </div>
                {/*Form Number 1*/}
                <div className={"SetContainer"}>
                    <section className={"SkillsTopContainer shadow bg-dark text-light"}>
                        <h2 className={"mx-5 text-center my-2"}><strong>Form Filling:</strong></h2>
                        <aside className={"listSection border bg-light text-dark ps-3"}>
                           <form onSubmit={submit} className={"border p-3 m-3"}>
                               <input type={"text"} placeholder={"Name of color:"} ref={txtInput}/><br />
                               <input type={"color"} placeholder={"#1e1e1e"} ref={hexColor}/><br />
                               <button type="submit" className="btn btn-dark">Submit</button>
                           </form>
                        </aside>
                    </section>
                </div>
                {/*Form Number 2*/}
                <div className={"SetContainer"}>
                    <section className={"SkillsTopContainer shadow bg-dark text-light"}>
                        <h2 className={"mx-5 text-center my-2"}><strong>Form Filling pt2:</strong></h2>
                        <aside className={"listSection border bg-light text-dark ps-3"}>
                            <form onSubmit={submit2} className={"border p-3 m-3"}>
                                <input type={"text"} placeholder={"Name of color:"} value={colorTitle} onChange={(e) => setcolorTitle(e.target.value)}/><br />
                                <input type={"color"} placeholder={"#1e1e1e"} value={hexColor2} onChange={(event) => sethexColor2(event.target.value)}/><br />
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </form>
                        </aside>
                    </section>
                </div>
            </main>
        </>
    )
}


//--- App
function App() {
  return (
    <>
      <Navigation />
        <MainSection image={"images/meow.jpg"} listOfSkills={SkillObject}/>
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
