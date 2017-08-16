import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {

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
            <div key={key}>
              <h1>{ post.title }</h1>
              <p>{ post.body }</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Main;
