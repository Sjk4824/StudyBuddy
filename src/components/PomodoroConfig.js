import React from 'react'
import "./PomodoroConfig.css"; 

function PomodoroConfig() {
    return (
        <div className = "pomoConfig">
            <div className="pomoContainer">
                <h1>Configure your session</h1>
                <div className = "time work__time">
                    <p>Work Session</p>
                    <form>
                        <input className="input1 pomoInput" type="text" placeholder="hours"></input>
                        <strong>:</strong>
                        <input className ="pomoInput input2" type="text" placeholder="minutes"></input>
                    </form>
                </div>
                <div className = "time shortBreak__time">
                    <p>Short Break</p>
                    <form>
                        <input className="input1 pomoInput" type="text" placeholder="hours"></input>
                        <strong>:</strong>
                        <input className ="pomoInput input2" type="text" placeholder="minutes"></input>
                    </form>
                </div>
                <div className = "time longBreak__time">
                    <p>Long Break</p>
                    <form>
                        <input className="input1 pomoInput" type="text" placeholder="hours"></input>
                        <strong>:</strong>
                        <input className ="pomoInput input2" type="text" placeholder="minutes"></input>
                    </form>
                </div>
                <button className="pomo__start">Start Pomodoro Session</button>
            </div>
        </div>
    )
}

export default PomodoroConfig
