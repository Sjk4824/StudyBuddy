import React, {useState} from 'react'
import "./Home.css"; 
import "./Sidebar"; 
import Sidebar from './Sidebar';
import MusicComponent from "./MusicComponent";
import Todo from "./Todo"; 
import QuickLinks from './QuickLinks';
import PomodoroTimer from "./PomodoroTimer"; 
import HomeTime from "./HomeTime";
import PomodoroConfig from './PomodoroConfig';

function Home(props) {

    
    const [display, setDisplay] = useState(true); 
    const [music, setMusic] = useState(false); 
    const [toDo, setToDo] = useState(false); 
    const [link, setLink] = useState(false); 

    const [showSettings, setShowSettings] = useState(false); 
    const [home, setHome] = useState(true); 

    return (
        <div className = "home">
            {home ? <HomeTime />: showSettings ? <PomodoroConfig setHome={setHome} setShowSettings = {setShowSettings}/> : <PomodoroTimer setHome={setHome}  setShowSettings = {setShowSettings}/> }
            {display? <Sidebar removeSidebar={setDisplay} setMusic={setMusic} setToDo={setToDo} setLink={setLink} setHome = {setHome} setShowSettings = {setShowSettings}/>: ""}
            {music &&  <MusicComponent at={props.at} code={props.code} removeSidebar={setDisplay} setMusic={setMusic}/>}
            {toDo && <Todo removeSidebar={setDisplay} setToDo={setToDo}/>}
            {link && <QuickLinks removeSidebar={setDisplay} setLink={setLink}/> }
        </div>
    )
}

export default Home
