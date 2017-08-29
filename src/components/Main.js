import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import Admin from './Admin';


class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
