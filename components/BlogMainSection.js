import React, { Component, PropTypes } from 'react'
import BlogItem from './BlogItem'
import { SHOW_ALL, SHOW_PIC, SHOW_TEXT } from '../constants/BlogFilters'

const BLOG_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_PIC]: blog => blog.pFlag,
  [SHOW_TEXT]: blog => blog.tFlag
}

class BlogMainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  render() {
    const { blogs, actions } = this.props    
    const { filter } = this.state
    
    const filteredBlogs = blogs.filter(BLOG_FILTERS[filter])
    //todo
    const completedCount = blogs.reduce((count, blog) =>
      blog.completed ? count + 1 : count,
      0
    )

    return (
      <section className="BlogMain">
        <hr/>        
        <ul className="blog-list">
          {filteredBlogs.map(blog =>
            <BlogItem key={blog.id} blog={blog} {...actions} />
          )}
        </ul>
        
      </section>
    )
  }
}

BlogMainSection.propTypes = {
  blogs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default BlogMainSection