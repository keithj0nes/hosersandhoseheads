import React, { Component } from 'react';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      active : false
    }
  }

  toggleHamburger() {
    console.log("WORKING!");
    const currentState = this.state.active;
    console.log(currentState);
    this.setState({active : !currentState})
  }

  render() {
    return (
      <header>
        <div className="logo">
          <img src="http://placehold.it/50x50" alt="logo" />
        </div>

        <nav>
          <div className="hamburger-icon" onClick={this.toggleHamburger.bind(this)}>
            <div className={this.state.active ? "change" + "navbar-top" : "navbar-top"}></div>
            <div className="navbar-middle"></div>
            <div className="navbar-bottom"></div>
          </div>

          <ul>
            <li>League News</li>
            <li>The GMs</li>
            <li>Rules</li>
            <li>Awards</li>
            <li>League Info</li>
            <ul className="social-links">
              <li>Facebook</li>
              <li>Yahoo! League</li>
              <li>NHL Fantasy News</li>
            </ul>
            <div className="admin-login">
              <p>ADMIN LOGIN</p>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
