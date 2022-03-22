import React, { Component } from 'react'
import axios from "axios";
export default class PostList extends Component {
    constructor(props){
        super(props)
        this.state={ 
            posts :[]
        }
    }
componentDidMount(){// when the page renders i want to display posts.
    axios.get('https://jsonplaceholder.typicode.com/posts')// this is the request and response will come back state will hold in variable
    .then(response=>{
        this.setState({
            posts:response.data})
            console.log(response.data)
    }) 
}
  render() {
    const{posts}= this.state// map over all posts and get the individual posts
    return (
      <div>
          <h1> List of Posts</h1>
          {
          posts.map(post => <div key={post.id}>{post.title}</div>)
  }
      </div>
    )
  }
}
