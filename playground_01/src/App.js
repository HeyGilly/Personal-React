import './App.css';

function SetOfPersonalSkills({setSkills}){
    return <p>{setSkills}</p>;
}


// App Component
function Playground_Component({username, currentTime, hobbiesList, bookList}) {
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
        <div className="hobbiesContainer">
            <h2>Hobbies are:</h2>
            <p>
            {hobbiesList.map(hobbies => (
                <span>{hobbies}, </span>
                    ))}
            </p>
        </div>
        <div className={"bookListContainer"}>
            <h2>{username}'s top book</h2>
            {bookList.map(book => (
                <section className={"bookContainer"}>
                    <p>{book.title}<br />
                        by {book.author}</p>
                </section>
            ))}
        </div>

    </>
  );
}

export default Playground_Component;
