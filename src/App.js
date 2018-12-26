import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="App">
      <h1 id="appTitle">Timestamp App</h1>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
        </div>
      </div>
    </Router>
    </div> 
    );
  }
}

export default App;
