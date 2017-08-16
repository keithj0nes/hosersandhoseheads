import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      active : false
    }
  }



  toggleHamburger() {
    console.log("WORKING HELLO!");
    const currentState = this.state.active;
    console.log(currentState);
    this.setState({active : !currentState})
  }

  render() {
    return (
      <header>
        <div className="navbar">
          <div className="logo">
            <img src="http://placehold.it/50x50" alt="logo" />
          </div>

          <nav>
            <div className="hamburger-icon" onClick={this.toggleHamburger.bind(this)}>
              <div className="hamburger-icon-top"></div>
              <div className="hamburger-icon-middle"></div>
              <div className="hamburger-icon-bottom"></div>
            </div>
          </nav>
        </div>

        <ul className="mobile-menu">
          <li className="nav-link">League News</li>
          <li className="nav-link">The GMs</li>
          <li className="nav-link">Rules</li>
          <li className="nav-link">Awards</li>
          <li className="nav-link">League Info</li>
          <ul className="social-links">
            <li><img src="http://placehold.it/50x50" alt="League of Extraordinary Hosers Facebook" /></li>
            <li><img src="http://placehold.it/50x50" alt="Yahoo! Fantasy Hockey" /></li>
            <li><img src="http://placehold.it/50x50" alt="NHL Fantasy Hockey News" /></li>
          </ul>
          <ul className="admin-login">
            <li>ADMIN LOGIN</li>
          </ul>
        </ul>
      </header>
    );
  }
}


export default Header;
