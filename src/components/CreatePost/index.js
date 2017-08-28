import React, { Component } from 'react';

class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      title: '',
      blogPost: ''
    }
  }

  updateField = (key, value) => {
    this.setState({ [key]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let blogItem = JSON.stringify(this.state);
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: blogItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "It worked")
      this.props.history.push('/posts')
    }).catch(err => {
      console.log(err, "Something went wrong");
    });
    this.setState({
      author: '',
      title: '',
      blogPost: ''});
  }
  render() {
    return (
      <div className='create-post'>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor='author'>Author's Name</label>
          <input
            onChange={(event) => this.updateField('author', event.target.value)}
            type="text"
            name="author"
            placeholder='Your name'
            value={this.state.author} />

          <label htmlFor='title'>Post Title</label>
          <input
            onChange={(event) => this.updateField('title', event.target.value)}
            type="text"
            name="title"
            placeholder='A title'
            value={this.state.title} />

          <label htmlFor='blogPost'>Write your blogPost</label>
          <textarea
            onChange={(event) => this.updateField('blogPost', event.target.value)}
            name="blogPost"
            rows="7" cols="80"
            value={this.state.blogPost}
            placeholder="Type here.."></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreatePost
