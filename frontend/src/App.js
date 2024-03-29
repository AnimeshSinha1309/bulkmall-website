import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Buy from './components/Buy';
import Sales from './components/Sales';
import Market from './components/Market';
import Orders from './components/Orders';
import DetailOrder from './components/Detail';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('id') === undefined) {
      localStorage.removeItem('id');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }
  }

  renderLoginLogout() {
    if (localStorage.getItem('id') === null) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">Register</NavLink>
          </li>
        </ul>
      )
    }
    else {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/logout" className="nav-link">Hello {localStorage.getItem('name')}</NavLink>
          </li>
        </ul>
      )
    }
  }

  render() {
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
                    <NavLink to="#" className="nav-link active">BulkMall</NavLink>
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
                    <NavLink to="/orders" activeClassName='active' className="nav-link">Orders</NavLink>
                  </li>
                </ul>
                {this.renderLoginLogout()}
              </div>
            </nav>
          </header>
          <main>
            {/* Call the contents of different files using the Router */}
            <Switch>
              <Route path="/login"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/buy" exact={true}><Buy /></Route>
              <Route path="/buy/:id"><Buy /></Route>
              <Route path="/sales"><Sales /></Route>
              <Route path="/market"><Market /></Route>
              <Route path="/orders"><Orders /></Route>
              <Route path="/logout"><Logout /></Route>
              <Route path="/order/view/:id"><DetailOrder /></Route>
              <Route><Market /></Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
