import './App.css';
import {useState, useEffect} from "react";

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

function MainSection({image, listOfSkills}){

    const [emotion, setEmotion] = useState("_______")
    const [hobbies, setHobbies] = useState("_______")

    const [lights, setLights] = useState(true)

// when you pass an empty array, it means that the effect will not be called after the first render
    // when you pass in a property, it will run after every change
    useEffect(()=>{
        console.log(`It's ${emotion} right now`)
    },[emotion]) // Dependency array

    return (
        <>
            <div id={"mainContainer"} className={"vh-100 d-flex"}>
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
                        <h2 className={"mx-5 text-center my-2"}><strong>Today's Feeling:</strong></h2>
                        <aside className={"listSection border bg-light text-dark ps-3 text-center py-4"}>
                            <input type={"checkbox"} value={lights} onChange={()=> setLights((lights) => !lights)} />
                            <label>{lights ? "Lights are off!" : <Wow /> }</label>
                        </aside>
                    </section>
                </div>
            </div>
        </>
    )
}
function Wow(){
    return(
        <>
        <p>Lights are On! </p>
        <img src={"images/lightOn.png"} alt={"lights on"}/>
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
