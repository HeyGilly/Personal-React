import {useEffect, useState} from "react";


function GitHubUser({ login }){
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())        // Grabbing the file and turning it inot a json file.
        .then(setData)    // goin to call the function and that's going to  call the function with the new data.
        .catch(console.error);
  }, [])

  if (data){
    return(
        <div>
          <h1>{`${data.login} `}</h1>
            <small>{`${data.id}`}</small>
          <img src={`${data.avatar_url}`} width={100} />
        </div>
    )
  }
  return null;      // If there is not a user then it will return null.
}


function App() {
  return (
    <div className="App">
      <GitHubUser login={"lukas"} />
    </div>
  );
}

export default App;
