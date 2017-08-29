import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/header.css';

class Header extends Component {

  toggleHamburger() {
    console.log("WORKING HELLO!");
    const toggleNav = document.getElementById('mobile-menu');

    console.log(toggleNav);

    if (toggleNav.style.marginLeft === "0%") {
      toggleNav.style.marginLeft = "100%";
    } else {
      toggleNav.style.marginLeft = "0%";
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="navbar">
            <div className="logo">
              <img src="http://placehold.it/50x50" alt="logo" />
            </div>

            <div className="hamburger-icon" onClick={this.toggleHamburger.bind(this)}>
              <div>
                <div className="hamburger-icon-top"></div>
                <div className="hamburger-icon-middle"></div>
                <div className="hamburger-icon-bottom"></div>
              </div>
            </div>
          </div>

          <ul id="mobile-menu" className="mobile-menu">
            <li className="nav-link">League News</li>
            <li className="nav-link">The GMs</li>
            <li className="nav-link">Rules</li>
            <li className="nav-link">Awards</li>
            <li className="nav-link">League Info</li>
            <ul className="social-links">
              <li><img src="http://placehold.it/40x40" alt="facebook" /></li>
              <li><img src="http://placehold.it/40x40" alt="yahoo" /></li>
              <li><img src="http://placehold.it/40x40" alt="nhl news" /></li>
            </ul>
            <ul className="admin-login">
              <li><Link to="/admin"><img src="http://placehold.it/16x16" alt="Lock" />ADMIN LOGIN</Link></li>
            </ul>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
