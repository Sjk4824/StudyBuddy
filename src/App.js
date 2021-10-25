import React from "react"; 
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home"; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path = "/dashboard">
            <Header />
            <Home />
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
