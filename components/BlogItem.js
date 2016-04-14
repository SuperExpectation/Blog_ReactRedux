import React, { Component, PropTypes } from 'react'
import BlogInput from './BlogInput'


class BlogItem extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
		  editing: false,
		  pic:"",
		}
	}

	handleDoubleClick() {
		this.setState({ editing: true })
	}

	handleSave(id, text, pic) {		
		if (text.length === 0) {
		  this.props.delBlog(id)
		} else {
		  this.props.editBlog(id, text,pic)
		}
		this.setState({ editing: false })
	}

	handleUpdateClick() {
		this.setState({ editing: true })
	}

	

    render() {
    	const { blog, delBlog } = this.props	
    	console.info("blog pic length:" +blog.pic.length)
    	
	    let element
	    if (this.state.editing) {
	      element = (
	        <BlogInput text={blog.text}
	                       editing={this.state.editing}
	                       id={blog.id}
	                       onSave={(text, pic) => this.handleSave(blog.id, text, pic)} />
	      )
	    } else {
	      element = (
	        <div className="BlogView">	  
	          { (blog.pic.length !== 0  ) &&
	          	    <div> 
	          	    {
	          	    	blog.pic.map(function(pic, i) {
				            return <img src={pic} key={i}></img>;
				          })
	          	    }
	          	    </div>
	          	
              }  
              <div className="BlogContent">        			             
		          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
		            {blog.text}
		          </label>
	          </div>
	          <div>
			  <input type="button" className="delBtn btn3 pbtn1" value="Update"
	                  onClick={() => this.handleUpdateClick()}></input>	              
	          <input type="button" className="delBtn btn2 pbtn1" value="Del"
	                  onClick={() => delBlog(blog.id)}></input>
	          <hr/>
	          </div>
	        </div>
	      )
	    }
	    return (
	        <li >
		        {element}
		    </li>
	    )
  }

}

BlogItem.propTypes = {

}

export default BlogItem