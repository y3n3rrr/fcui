import React, { Component } from 'react';
//components
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import FileU from './components/FileUpload'
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
      <div className="dashboard2 site-navbar-small">
        <Navbar />
        <div className="main-content">
        <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/file" component={FileU} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
