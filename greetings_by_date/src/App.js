import './App.css';

function Morning({}){
    return(
        <>
            <img src={"img/goodMorning.png"} alt={"Good Morning World!"} className={"mx-auto"} height={'auto'} width={"820px"}/>
        </>
    );
}
function Afternoon({}){
    return(
        <>
            <img src={"img/evening.png"} alt={"Good Afternoon World!"} className={"mx-auto"} height={'auto'} width={"820px"}/>
        </>
    );
}
function Evening({}){
    return(
        <>
            <img src={"img/goodNight.png"} alt={"Good Evening World!"} className={"mx-auto"} height={'auto'} width={"820px"}/>
        </>
    );
}
function LateNight({}){
    return(
        <>
            <img src={"img/midnight.png"} alt={"Late Night!"} className={"mx-auto"} height={'auto'} width={"820px"}/>
        </>
    );
}

function IfStatementForTime({time}){
    return(
        <>
            {time < 5 ? (<LateNight />)
                : time < 12 ? (<Morning />)
                    : time < 18 ? (<Afternoon />)
                        : (<Evening />)}
        </>
    )
}


function App({currentDate, currentTime, currentHour}) {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <h1 className={"text-center w-100 text-dark display-4 pt-4 pb-2"}>Welcome to the playground!</h1>
                </div>
            </nav>
            <main className={"vh-100 bg-dark pt-5"}>
                <p className={"text-center text-dark rounded-5 w-25 mx-auto p-2 bg-warning"}>{currentDate}<br /><b>{currentTime}</b></p>
                <section className={"d-flex flex-column justify-content-center "}>
                    <IfStatementForTime time={currentHour}  />
                </section>

            </main>
        </>
    );
}

export default App;

