import React, { PropTypes, Component } from 'react'
import BlogInput from './BlogInput'

class BlogPublisher extends Component {
  handleSave(text,pic,id,picLoading) {
    if (text.length !== 0) {      
      this.props.addBlog(text,pic,id,picLoading);
      //this.props.addBlogAsync(text,pic,id);
    }
  }

  render() {
    return (
      <div  className="BlogPublisher">
          <h1>My Blog</h1>
          <BlogInput
                         newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What do you want to share with your friends?" />
      </div>
    )
  }
}

BlogPublisher.propTypes = {
  addBlog: PropTypes.func.isRequired
  //addBlogAsync: PropTypes.func.isRequired
}

export default BlogPublisher
