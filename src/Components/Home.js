import React, { Component } from 'react';
import axios from 'axios';

import '../css/blog-posts.css';

class Home extends Component {

  constructor() {
    super()

    this.state = {
      posts : []
    }
  }

  componentDidMount() {
    console.log("WORKING!")
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      const posts = res.data.map((item, index) => {
        return item;
      })

      this.setState({ posts : posts });
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.posts.map((post, key) => {
          return (
            <div key={key} className="post">
              <img src="http://placehold.it/255x125" alt="post" />
              <h1 className="post-title">{ post.title }</h1>
              <p className="post-date">Published on Sep 1, 2017</p>
              <p className="post-description">{ post.body }</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Home;
