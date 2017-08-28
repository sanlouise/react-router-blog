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
    }).then(res => {
      console.log(res, "It worked")
      this.props.history.push('/posts')
      res.redirect('/index')
    }).catch(err => {
      console.log(err, "Something went wrong");
    });

    this.setState({
      author: '',
      title: '',
      blogPost: ''}
    );
  }

  render() {
    return (
      <div className='create-post'>
        <div className="row">
          <div className="col s12 col m8 offset-m2">
            <h3> Create a New Post</h3>
            <div className="row">
              <form onSubmit={this.handleSubmit}>

                {/* Author Name */}
                <div class="input-field col s12">
                  <label htmlFor='author'>Author's Name</label>
                  <input
                    onChange={(event) => this.updateField('author', event.target.value)}
                    type="text"
                    name="author"
                    placeholder='Your name'
                    value={this.state.author} />
                </div>

                {/* Post Title */}
                <div class="input-field col s12">
                  <label htmlFor='title'>Post Title</label>
                  <input
                    onChange={(event) => this.updateField('title', event.target.value)}
                    type="text"
                    name="title"
                    placeholder='A title'
                    value={this.state.title} />
                </div>

                {/* Blog Post */}
                <div class="input-field col s12">
                  <label htmlFor='blogPost'>Write your blog post</label>
                  <textarea
                    className="materialize-textarea"
                    onChange={(event) => this.updateField('blogPost', event.target.value)}
                    value={this.state.blogPost}
                    placeholder="Type here.."></textarea>
                  <button type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePost
