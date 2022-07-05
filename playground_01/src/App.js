import './App.css';

function SetOfPersonalSkills({setSkills}){
    return <p>{setSkills}</p>;
}



// App Component
function Playground_Component({username, currentTime}) {
  return (
    <>
        <h1>Welcome to the playground, {username}!</h1>
        <div className="timeContainer">
            <p>{currentTime}</p>
        </div>
        <div className="skillsContainer">
            <SetOfPersonalSkills setSkills="Javascript" />
            <SetOfPersonalSkills setSkills="React" />
            <SetOfPersonalSkills setSkills="Java" />
            <SetOfPersonalSkills setSkills="Spring" />
            <SetOfPersonalSkills setSkills="Python" />
        </div>
    </>
  );
}

export default Playground_Component;
