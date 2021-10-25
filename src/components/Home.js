import React, {useState, useEffect} from 'react'
import "./Home.css"; 
import "./Sidebar"; 
import Sidebar from './Sidebar';

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



    return (
        <div className = "home">
            <div className = "home__greetings">
                <p className = "home__greetings__time">{time.getHours()}:{time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}</p>
                <p className ="home__greetings__date">{day_of_week[time.getDay()]}, {time.getDate()} {month_names[time.getMonth()]}</p>
                <p className = "home__greetings__greet">Good Evening, <strong>Sadhana!</strong></p>
            </div>
            <Sidebar />
        </div>
    )
}

export default Home
