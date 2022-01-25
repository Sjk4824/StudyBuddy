import React, {useState} from "react"; 
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home"; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login"; 
import PomodoroConfig from "./components/PomodoroConfig"; 
import SettingContext from "./components/SettingContext";
import useAuth from "./components/useAuth";

function App() {

  const [popUp, setPopUp] = useState(false); 
  const [workHours, setWorkHours] = useState(0); 
  const [workMinutes, setWorkMinutes] = useState(0); 
  const [breakHours, setBreakHours] = useState(0); 
  const [breakMinutes, setBreakMinutes] = useState(0); 
  
  const openPopUp = () => {
    setPopUp(!popUp); 
  }

  const code = new URLSearchParams(window.location.search).get("code"); 
  const accessToken = useAuth(code); 

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path = "/dashboard">
            <Header openPopUp = {openPopUp}/>
            <SettingContext.Provider value ={{workMinutes, breakMinutes, workHours, breakHours, setWorkMinutes, setBreakMinutes, setWorkHours, setBreakHours}}>
              <Home code = {code} at = {accessToken}/>
            </SettingContext.Provider>
          </Route>
          
          <Route path = "/">
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
