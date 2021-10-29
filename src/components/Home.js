import React, {useState, useEffect} from 'react'
import "./Home.css"; 
import "./Sidebar"; 
import Sidebar from './Sidebar';
import MusicComponent from "./MusicComponent";
import Todo from "./Todo"; 
import QuickLinks from './QuickLinks';

var _ = require('lodash');

function Home() {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const month_names =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    const day_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    const getGreeting=()=>{
        if(time.getHours()>=0 && time.getHours()<12){
            return "Good Morning"
        }
        else if(time.getHours()>=12 && time.getHours()<4){
            return "Good Afternoon"
        }
        else{
            return "Good Evening"
        }
    }

    //we need a state to handle display for side bar. 
    const [display, setDisplay] = useState(true); 
    const [music, setMusic] = useState(false); 
    const [toDo, setToDo] = useState(false); 
    const [link, setLink] = useState(false); 

    return (
        <div className = "home">
            <div className = "home__greetings">
                <p className = "home__greetings__time">{time.getHours()}:{time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}</p>
                <p className ="home__greetings__date">{day_of_week[time.getDay()]}, {time.getDate()} {month_names[time.getMonth()]}</p>
                <p className = "home__greetings__greet">{getGreeting()}, <strong>{_.startCase(_.toLower(JSON.parse(localStorage.getItem("user")).name))}!</strong></p>
            </div>
            {display? <Sidebar removeSidebar={setDisplay} setMusic={setMusic} setToDo={setToDo} setLink={setLink} />: ""}
            
            {music &&  <MusicComponent removeSidebar={setDisplay} setMusic={setMusic}/>}
            {toDo && <Todo removeSidebar={setDisplay} setToDo={setToDo}/>}
            {link && <QuickLinks removeSidebar={setDisplay} setLink={setLink}/> }
        </div>
    )
}

export default Home
