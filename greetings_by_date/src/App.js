import './App.css';

function Morning({props}){
    return(
        <>
            <img src={"img/goodMorning.png"} alt={"Good Morning World!"} className={"mx-auto"} height={'auto'} width={"820px"}/>
        </>
    );
}
function Evening({props}){
    return(
        <>
            <img src={"img/goodNight.png"} alt={"Good Evening World!"} className={"mx-auto"} height={'auto'} width={"820px"}/>
        </>
    );
}
function LateNight({props}){
    return(
        <>
            <img src={"img/midnight.png"} alt={"Late Night!"} className={"mx-auto"} height={'auto'} width={"820px"}/>
        </>
    );
}


function App({currentDate, currentHour}) {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <h1 className={"text-center w-100 text-dark display-4 pt-4 pb-2"}>Welcome to the playground!</h1>
                </div>
            </nav>
            <main className={"vh-100 bg-dark pt-5"}>
                <p className={"text-center text-dark rounded-5 w-25 mx-auto p-2 bg-warning"}>({currentDate})</p>
                <p>{currentHour}</p>
                <section className={"d-flex flex-column justify-content-center "}>
                    <Morning />
                    <Evening />
                    <LateNight />
                </section>

            </main>
        </>
    );
}

export default App;

