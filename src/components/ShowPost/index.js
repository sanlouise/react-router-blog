import React, { Component } from 'react';

class ShowPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: "",
      title: "",
      blogPost: "",
    }
  }

  componentDidMount() {
    console.log("Hey I mounted!");
    const { id } = this.props.match.params;
    console.log(id);
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(URL).then(results => {
      return results.json();
    }).then(res => {
      this.setState({
        author: res.author,
        title: res.title,
        blogPost: res.blogPost,
      });
    })
  }

  render() {
    return (
      <div className="">
        <h1>{this.state.title}</h1>
        <p className="author">{this.state.author}</p>
        <p>{this.state.blogPost}</p>
      </div>
    )
  }
}

export default ShowPost;
