import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Buy from './components/Buy';
import Sales from './components/Sales';
import Purchases from './components/Purchases';
import Market from './components/Market';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Code for Navigation Topbar */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" exact={true} activeClassName='active' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/buy" activeClassName='active' className="nav-link">Buy</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sales" activeClassName='active' className="nav-link">Sales</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/market" activeClassName='active' className="nav-link">Market</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sell" activeClassName='active' className="nav-link">Orders</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">Register</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          {/* Call the contents of different files using the Router */}
          <Switch> <Route path="/login"><Login /></Route> </Switch>
          <Switch> <Route path="/register"><Register /></Route> </Switch>
          <Switch> <Route path="/buy"><Buy /></Route> </Switch>
          <Switch> <Route path="/purchases"><Purchases /></Route> </Switch>
          <Switch> <Route path="/market"><Market /></Route> </Switch>
          <Switch> <Route path="/sales"><Sales /></Route> </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
