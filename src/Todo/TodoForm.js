import React,{useState} from 'react'

export default function TodoForm (props) {
  const[input, setInput] = useState('')
  const handleChange= e=>{
    setInput(e.target.value);
  }
  const handleSubmit = e =>
  {
    e.preventDefault();
   props.onSubmit ({
      id:Math.floor(Math.random() * 10000),
      text:input
    }); 
    setInput('') 
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange}/><br/><br/>
        <button type="submit" >Submit</button>
        </form>
    </div>
  )
}


/* import React, { Component } from 'react'

 class TodoForm extends Component {
    constructor(props)
    {
      super(props);
      this.state = {value: ''};
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }
    
    addValue(evt)
    {
      evt.preventDefault();
      if(this.state.value !=undefined)
      {
        alert('Your input value is: ' + this.state.value)// after submit push to 
        //array delete button onclick give remove functionality.
      }// id should generate automatically.
    }
    updateInput(evt){
      this.state={value: evt.target.value};   
        }
    
  render() {
    return (
        <form onSubmit={this.addValue}>
        <input type="text" onChange={this.updateInput} /><br/><br/>
        <input type="submit" value="Click Me :)"/>
        </form>
    )
  }
}

export default TodoForm */