import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './css/global.css';

import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';
import Admin from './components/Admin';


class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
