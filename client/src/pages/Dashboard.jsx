import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import lightModelogo from '../assets/Light-Dark mode photos/sun-icon.png';
import { lightDarkmode } from '../functions/random_frog_img.js';
import { getDailyRandomInt } from '../functions/DailyrandomNumber.jsx';
import DateTime from '../functions/dateandtime.jsx'



export default function Dashboard()  {
   


    const { user } = useContext(UserContext);
    const [DailyrandNum, setDailyrandNum] = useState(0); // Use state for the DailyrandNum

    const daily_frog = import.meta.glob('./src/')

    useEffect(() => {
        // Fetching DailyrandNum after component mounts
        
        setDailyrandNum(getDailyRandomInt());
    }, []); // Empty dependency array means it runs only once when the component mounts

    return (
        <div>
             <header className="App-header">
            <nav>
                <a href="https://www.linkedin.com/in/christopherpdesmond/"> about </a>
                <button id="lightDarkButton" onClick={lightDarkmode}> <img src={lightModelogo} alt="light mode" width="30" height="30" /> </button>
            </nav>
            <div className="header-content">
            <h1>Habbit</h1>
           


            </div>
            <p>Daily Habit Tracker</p>
            {!!user && (<h2>Welcome back {user.name}!</h2>)}
        <div className = "Date and time">
            <hr className = 'solidline'></hr>
            <DateTime></DateTime>
         </div>
            </header>
        </div>
    );
}

