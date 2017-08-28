import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(res => {
      return res.json();
    })
    .then(posts => {
      this.setState({ posts });
    })
  }

  render() {
    return (
      <div className="row">
        {this.state.posts.map((post) => (
          <div className="col s12 m6" key={post._id}>
            <div className="card pink lighten-4">
              <div className="card-content white-text">
                <span className="card-title"><Link to={`/posts/${post._id}`}>{post.title}</Link></span>
                <p>{post.blogPost}</p>
              </div>
              <div className="card-action">
                <p>Written by: {post.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}





}
