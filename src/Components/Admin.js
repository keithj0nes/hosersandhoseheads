import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/admin.css';

class Admin extends Component {

  constructor(){
    super();
    this.initState = {
      postTitle: "",
      postBody: "",
      postImgUrl: "",
      news: false,
      weeklyRecaps: false,
      draft: false,
      playoffs: false,
      rules: false
    }
    this.state = this.initState;
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
  console.log(this.state, "componentDidUpdate");
}

  postPosts(e) {
    e.preventDefault();

    if(this.state.postBody === "" || this.state.postTitle === "" || this.state.postImgUrl === ""){
      alert("please fill in all fields")
    } else {
      let blogPostData = this.state;
      console.log(blogPostData, "logging BLOGPOSTDATA!");

      axios.post('http://localhost:9000/api/admin/post', blogPostData).then((response) => {
        console.log('This is the response: ', response.data);


        this.setState(this.initState)
        console.log("setState changed to initState");
      });


    }



  }

  render() {
    return (
      <div className="App">
        <div className="admin-header">

        </div>

        <form>
          <h2>Post Title</h2>
          <p>Lorem</p>
          <input type="text" value={this.state.postTitle} name="postTitle" onChange={this.handleChange.bind(this)}/>

          <h2>Category</h2>
          <p>Lorem</p>
          <input id="news" type="checkbox" name="chx" value={this.state.news} checked={this.state.news} onChange={this.handleChange.bind(this)}/><label htmlFor="news">News</label>
          <input id="weeklyRecaps" type="checkbox" name="chx" value={this.state.weeklyRecaps} checked={this.state.weeklyRecaps} onChange={this.handleChange.bind(this)} /><label htmlFor="weeklyRecaps">Weekly Recaps</label>
          <input id="draft" type="checkbox" name="chx" value={this.state.draft} checked={this.state.draft} onChange={this.handleChange.bind(this)}/><label htmlFor="draft">Draft</label>
          <input id="playoffs" type="checkbox" name="chx" value={this.state.playoffs} checked={this.state.playoffs} onChange={this.handleChange.bind(this)}/><label htmlFor="playoffs">Playoffs</label>
          <input id="rules" type="checkbox" name="chx" value={this.state.rules} checked={this.state.rules} onChange={this.handleChange.bind(this)}/><label htmlFor="rules">Rules</label>

          <h2>Post Body</h2>
          <p>Lorem</p>
          <textarea placeholder="We're all hosers" value={this.state.postBody} onChange={this.handleChange.bind(this)}>
          </textarea>

          <h2>Image URL</h2>
          <p>Lorem</p>
          <input type="text" value={this.state.postImgUrl} name="postImgUrl" onChange={this.handleChange.bind(this)}/>

          <button type="submit" onClick={this.postPosts.bind(this)}>SUBMIT</button>
        </form>

        <Link to="/"><p>HOME</p></Link>

      </div>
    );
  }
}

//putting value={this.state...} on each input type will allow for this.state reset to work

export default Admin;
