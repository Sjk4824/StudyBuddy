import React, {useState} from "react"; 
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home"; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login"; 
import PomodoroConfig from "./components/PomodoroConfig"; 

function App() {

  const [popUp, setPopUp] = useState(false); 

  const openPopUp = () => {
    setPopUp(!popUp); 
  }

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path = "/dashboard">
            <Header openPopUp = {openPopUp}/>
            {popUp ?<PomodoroConfig/> : <Home />}
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
