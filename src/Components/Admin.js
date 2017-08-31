import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/admin.css';

class Admin extends Component {

  constructor(){
    super();
    this.state = {
      postTitle: "",
      postBody: "Start writing your blog post!",
      postImgUrl: "",
      news: false,
      weeklyRecaps: false,
      draft: false,
      playoffs: false,
      rules: false
    };
  }

  handleChange(e){

    //getting checkbox values based on its e.target.id

    let name = e.target.type === "checkbox" ? e.target.id : e.target.name;
    // let id = e.target.id;
    if(e.target.type === "textarea"){
      this.setState({postBody: e.target.value})
    } else if(e.target.type === "checkbox"){
      console.log("setting checkvox state");
      this.setState({[name]: e.target.checked})
    } else {
      console.log("setting state in else");
      this.setState({[name]: e.target.value})
    }
  }


componentDidUpdate(){
  console.log(this.state);
}

  postPosts(e) {
    e.preventDefault();

    if(this.state.postBody === "" || this.state.postTitle === "" || this.state.postImgUrl === ""){
      alert("please fill in all fields")
    }
    // axios.post('http://localhost:9000/api/google', { title: 'Your Team Name Sucks' }).then(function(response) {
    //   console.log('This is the response: ', response.data);
    //
    // });

    let blogPostData = this.state;
    console.log(blogPostData, "logging BLOGPOSTDATA!");


  }

  render() {
    return (
      <div className="App">
        <div className="admin-header">

        </div>

        <form>
          <h2>Post Title</h2>
          <p>Lorem</p>
          <input type="text" name="postTitle" onChange={this.handleChange.bind(this)}/>

          <h2>Category</h2>
          <p>Lorem</p>
          <input id="news" type="checkbox" name="chx" checked={this.state.news} onChange={this.handleChange.bind(this)}/><label htmlFor="news">News</label>
          <input id="weeklyRecaps" type="checkbox" name="chx" checked={this.state.weekly} onChange={this.handleChange.bind(this)} /><label htmlFor="weeklyRecaps">Weekly Recaps</label>
          <input id="draft" type="checkbox" /><label htmlFor="draft">Draft</label>
          <input id="playoffs" type="checkbox" /><label htmlFor="playoffs">Playoffs</label>
          <input id="rules" type="checkbox" /><label htmlFor="rules">Rules</label>

          <h2>Post Body</h2>
          <p>Lorem</p>
          <textarea value={this.state.postBody} onChange={this.handleChange.bind(this)}>
          </textarea>

          <h2>Image URL</h2>
          <p>Lorem</p>
          <input type="text" name="postImgUrl" onChange={this.handleChange.bind(this)}/>

          <button type="submit" onClick={this.postPosts.bind(this)}>SUBMIT</button>
        </form>

        <Link to="/"><p>HOME</p></Link>

        {this.state.users}

        <ul>

        </ul>
      </div>
    );
  }
}

export default Admin;
