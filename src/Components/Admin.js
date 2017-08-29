import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/admin.css';

class Admin extends Component {

  render() {
    return (
      <div className="App">
        <div className="admin-header">

        </div>

        <form>
          <h2>Post Title</h2>
          <p>Lorem</p>
          <input type="text" />

          <h2>Category</h2>
          <p>Lorem</p>
          <input id="news" type="checkbox" /><label htmlFor="news">News</label>
          <input id="weekly-recaps" type="checkbox" /><label htmlFor="weekly-recaps">Weekly Recaps</label>
          <input id="draft" type="checkbox" /><label htmlFor="draft">Draft</label>
          <input id="playoffs" type="checkbox" /><label htmlFor="playoffs">Playoffs</label>
          <input id="rules" type="checkbox" /><label htmlFor="rules">Rules</label>

          <h2>Post Body</h2>
          <p>Lorem</p>
          <textarea>
          </textarea>

          <h2>Image URL</h2>
          <p>Lorem</p>
          <input type="text" />

          <button type="submit">SUBMIT</button>
        </form>

        <Link to="/"><p>HOME</p></Link>
      </div>
    );
  }
}

export default Admin;
