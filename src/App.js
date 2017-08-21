import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './css/global.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Home />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
