// we are creating a form to display the posts
import React, { Component } from 'react'
import axios from 'axios'
export default class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    handleChange=(e)=>{// we are using only setState based on what was clicked represent state
     this.setState({
         [e.target.name]: e.target.value// when you change the text changet it get what was changed
     })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{    
                console.log(response.data)
        })
    }
  render() {
      const{userId, title, body}= this.state
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
           <div>
               <label>User Id</label>
               <input type="text" name="userId"  value={userId}
                   onChange={this.handleChange}/>
           </div>
           <div>
               <label>Title</label>
               <input type="text" name="title"  value={title}
                   onChange={this.handleChange}/>
           </div>
           <div>
               <label>Body</label>
               <input type="text" name="body"  value={body}
                   onChange={this.handleChange}/>
           </div>
           <div>
               <button type="submit">Submit</button>
           </div>
          </form>
      </div>
    )
  }
}
