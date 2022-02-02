import React, {useContext} from 'react'
import "./PomodoroConfig.css"; 
import SettingContext from './SettingContext';
import {AiOutlineClose} from "react-icons/ai"; 

function PomodoroConfig(props) {

    const settingsInfo = useContext(SettingContext); 

    function handleClick(){
        props.setShowSettings(false); 
        props.setHome(true); 
    }

    return (
        <div className = "pomoConfig">
            <div className="pomoContainer">
                <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "480px", marginTop: "30px" , position : "relative", cursor:"pointer"}}/>
                <h1>Configure your session</h1>
                <div className = "time work__time">
                    <p>Work Session</p>
                    <form>
                        <input className="input1 pomoInput" type="number" value = {settingsInfo.workHours} placeholder="hours" onChange={(newValue) => settingsInfo.setWorkHours(newValue.target.value)}></input>
                        <strong>:</strong>
                        <input className ="pomoInput input2" type="number" value = {settingsInfo.workMinutes} placeholder="minutes" onChange={(newValue) => settingsInfo.setWorkMinutes(newValue.target.value)}></input>
                    </form>
                </div>
                <div className = "time shortBreak__time">
                    <p>Break Session</p>
                    <form>
                        <input className="input1 pomoInput" type="number" value = {settingsInfo.breakHours} placeholder="hours" onChange={(newValue) => settingsInfo.setBreakHours(newValue.target.value)}></input>
                        <strong>:</strong>
                        <input className ="pomoInput input2" type="number" value = {settingsInfo.breakMinutes} placeholder="minutes" onChange={(newValue) => settingsInfo.setBreakMinutes(newValue.target.value)}></input>
                    </form>
                </div>
                <button onClick={() => props.setShowSettings(false)} className="pomo__start">Start Pomodoro Session</button>
            </div>
        </div>
    )
}

export default PomodoroConfig
