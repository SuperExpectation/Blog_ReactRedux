import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class BlogInput extends Component {
    constructor(props, context) {
	    super(props, context)
	    this.state = {
	      text: this.props.text || '',
	      id:this.props.id || '',
	      pic:[]
	    }
  	}
/*
    handleSubmit(e) {
	    const text = e.target.value.trim();
	    console.info("value1:" + text);
	    if (e.which === 13) {
	      this.props.onSave(text)
	      if (this.props.newTodo) {
	        this.setState({ text: '' })
	      }
	    }
  	}
*/
	handleChange(e) {
		this.setState({ text: e.target.value })
	}

	handleBlur(e) {
		if (!this.props.newTodo) {
		  this.props.onSave(e.target.value)
		}
	}

	handleSubmitClick(e) {    
		const text = this.refs.blog_content.value;  
		console.info("pic length: "+this.state.pic.length)
		this.props.onSave(text,this.state.pic)
		if (this.props.newTodo) {
			this.setState({ 
				text: '',
				pic:[]
			 })
		}  
	}
	
	handleImageChange(e) {
		e.preventDefault();
		
	    let reader = new FileReader();
	    let file = e.target.files[0];	    
	    let tmp_arr1 = new Array();
	    
	    
	    if ( file ) {
	 		
			reader.onloadend = () => { 										
				tmp_arr1.push(reader.result)	
				tmp_arr1 = tmp_arr1.concat(this.state.pic)
				this.setState({			      
			      pic: tmp_arr1
			    });	
			};
		}		
		
		reader.readAsDataURL( file );  
	}
    render() {    	
    return (
      <div className="BlogInputBlock"> 
      	<div className="BlogInput">		
	      	<textarea  className={
	        classnames({
	          edit: this.props.editing,
	          'new-todo': this.props.newTodo
	        })}	        
	        placeholder={this.props.placeholder}
	        autoFocus="true"
	        ref="blog_content" 
	        cols="80"
	        rows="6"
	        value={this.state.text}	        
	        onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="Blog_funcation_area">        	
        	<input type="button" value="Ok" onClick={this.handleSubmitClick.bind(this)}  className="btn1 pbtn1" />        	
        	<input type="file" name="file" id={"updateFile"+this.state.id} className="inputfile" onChange={(e)=>this.handleImageChange(e)} />
			<label htmlFor={"updateFile"+this.state.id} className="imgLabel btn6" >Image</label > 
        </div>

      </div>
    )
  }

}

BlogInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default BlogInput