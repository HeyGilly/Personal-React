import './App.css';

// App Component
function Playground_Component({username, currentTime}) {
  return (
    <>
        <h1>Welcome to the playground, {username}!</h1>
        <div className="timeContainer">
            <p>{currentTime}</p>
        </div>
    </>
  );
}

export default Playground_Component;
