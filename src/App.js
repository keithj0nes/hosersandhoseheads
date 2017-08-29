import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './css/global.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


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
