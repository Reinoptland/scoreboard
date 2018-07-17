import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scoreboard from './components/Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Hello
        </p>
        <Scoreboard />
      </div>
    );
  }
}

export default App;
