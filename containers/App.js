import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BlogPublisher from '../components/BlogPublisher'
import BlogMainSection from '../components/BlogMainSection'
import * as BlogActions from '../action'


class App extends Component {
  render() {
    const { blogs, actions } = this.props    
    return (      
      <div className="Blog_main_center">        
        <BlogPublisher addBlog={actions.addBlog} /> 
        <BlogMainSection blogs={blogs} actions={actions} />
        
      </div>
    )
  }
}

App.propTypes = {
  blogs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    blogs: state.blogs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlogActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
