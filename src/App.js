import React, { Component } from 'react';
//components
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
//styles
//modules
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink, Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-content">
        <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
