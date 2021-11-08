import React, {useState, useContext, useEffect, useRef} from 'react'
import "./PomodoroTimer.css"; 
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {BsPauseFill} from "react-icons/bs"; 
import {BsFillPlayFill} from "react-icons/bs"; 
import {MdSettings} from "react-icons/md"; 
import SettingContext from './SettingContext';
import {AiOutlineClose} from "react-icons/ai";

function PomodoroTimer(props) {
    
    const settingsInfo = useContext(SettingContext); 
    const [isPaused, setIsPaused] = useState(true); 
    const [mode, setMode] = useState("work"); //work / break
    const [secondsLeft, setSecondsLeft] = useState((settingsInfo.workHours*60*60) + (settingsInfo.workMinutes*60)); 

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused); 
    const modeRef = useRef(mode);  

    //must be triggered only if seconds left is 0
    function switchMode(){
        const nextMode = modeRef.current === "work" ? "break" : "work"; 
        const nextSeconds = nextMode === "work" ? ((settingsInfo.workHours*60*60) + (settingsInfo.workMinutes*60)) : ((settingsInfo.breakHours*60*60) + (settingsInfo.breakMinutes*60));
        setMode(nextMode); 
        modeRef.current = nextMode; 

        setSecondsLeft(nextSeconds); 
        secondsLeftRef.current = nextSeconds; 
    }

    function tick(){
        secondsLeftRef.current = secondsLeftRef.current-1; 
        setSecondsLeft(secondsLeftRef.current); 
    }

    function initTimer(){
        setSecondsLeft((settingsInfo.workHours*60*60) + (settingsInfo.workMinutes*60)); 
    }

    useEffect(() => {
        initTimer(); 
        const interval = setInterval(() => {
            if(isPausedRef.current){
                return; 
            }
            if(secondsLeftRef.current === 0){
                return switchMode(); 
            }
            tick();

        }, 1000); 

        return () => clearInterval(interval); 

    }, [settingsInfo]); 

    const totalSeconds = mode === "work" ? ((settingsInfo.workHours*60*60) + (settingsInfo.workMinutes*60)) : ((settingsInfo.breakHours*60*60) + (settingsInfo.breakMinutes*60));
    const percentage = Math.round((secondsLeft / totalSeconds) * 100) ; 

    let t = secondsLeft; 
    let hours = Math.floor(t/(60*60)); 
    t = (t - (hours * 3600)); 
    let minutes = Math.floor(t/60); 
    t = (t - (minutes * 60)); 
    let seconds = t; 

    if(minutes < 10){
        minutes = "0" + minutes; 
    }
    if(seconds < 10){
        seconds = "0" + seconds; 
    }

    return (
        <div className = "pm__timer">
            <div className = "pmTimer__container">
                <AiOutlineClose onClick={() => props.setHome(true)} color="#354477" style={{position : "absolute", top : "40px", right: "50px"}}/>
                <div className = "pmTimer__timer">
                    <CircularProgressbar value={percentage} text={hours + ":" + minutes + ":" + seconds} styles={buildStyles({
                        textColor : "#354477",
                        pathColor : mode === "work" ? "rgba(216, 36, 129, 0.8)" : "#39A388", 
                        trailColor: "rgba(205, 203, 204, 0.8)", 
                        textSize : "15px"
                    })}/>
                </div>
                <div className="timer__controls">
                    {isPaused ? <BsFillPlayFill onClick={() => {setIsPaused(false); isPausedRef.current = false;}} color="#354477" size={55} style={{cursor : "pointer"}}/> :  <BsPauseFill onClick={() => {setIsPaused(true); isPausedRef.current = true;}} color="#354477" size={55} style={{cursor : "pointer"}}/>}
                    {/* <BsPauseFill color="#354477" size={55} style={{cursor : "pointer"}}/>
                    <BsFillPlayFill color="#354477" size={55} style={{cursor : "pointer"}}/> */}
                    <MdSettings color="#354477" size={41} style={{cursor : "pointer"}} onClick = {() => props.setShowSettings(true)}/>
                </div>
            </div>
        </div>
    )
}

export default PomodoroTimer
