import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import './App.css';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
