import './App.css';

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

const listOfSkills = [
    "React", "Javascript", "JQuery", "Boostrap", "Java", "spring"
]

const SkillObject = listOfSkills.map((skill, i) => ({
    id:i,
    name:skill
}))

function MainSection({image, listOfSkills}){
    return (
        <>
            <main className={"vh-100 d-flex align-items-center position-relative"}>
                <img src={image} className={"rounded shadow ms-5"} alt={"HeyGilly"}/>
                {/*Skills Set*/}
                <div className={"SkillSetContainer"}>
                    <section className={"SkillsTopContainer shadow bg-dark text-light"}>
                        <h2 className={"mx-5 my-2"}><strong>Set of Skills:</strong></h2>
                        <aside className={"listSection border bg-light text-dark ps-3"}>
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