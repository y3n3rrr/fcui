import React, { Component } from 'react';
//components
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import FileUpload from './components/FileUpload'
//styles
//modules
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink, Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Router>
      <div className="dashboard2 site-navbar-small">
        <Navbar />
        <div className="main-content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/file" render={routeProps => <FileUpload {...routeProps} appState={this.props.appState} />} /> 
              {/* <Route path="/watch" render={routeProps => <VideoDetail {...routeProps} appState={this.props.appState} />} /> */}
            </Switch>
        </div>
      </div>
          </Router>
    );
  }
}

export default App;
