import React, { Component } from 'react';
import './App.css'
import Note from './components/Note'

class App extends Component {

constructor(props){
  super(props)
    this.state={
      todotext:'',
      todos : [],
  }
}

updatetodotext(todotext){
  this.setState({
    todotext : todotext.target.value
  })
}

addtodo() {
  if(this.state.todotext==='') {return}

  let todoArr = this.state.todos;
  todoArr.push(this.state.todotext);
  this.setState({todotext : ''});
  this.textinput.focus();
}

handlekeypress = (event) => {
  if(event.key==='Enter'){
    let todoArr = this.state.todos;
    todoArr.push(this.state.todotext);
    this.setState({todotext : ''});
  }
}


deletetodo(index) {
  let todoArr = this.state.todos;
  todoArr.splice(index,1);
  this.setState({todos : todoArr});
}

render() {

  let todos = this.state.todos.map((val,key) => {
    return <Note key={key} text={val}
    deletemethod= {
      () => this.deletetodo(key) } />
  })

  return(
    <div className='container'>
      <div className='header'>React Todo App</div>
      
      {todos}

      <div className='btn' onClick={this.addtodo.bind(this)}>+</div>
      <input type='text'
      ref={((input)=> this.textinput = input)}
      value={this.state.todotext}
      onChange = {todotext => this.updatetodotext(todotext)}
      className = 'textInput'
      onKeyPress={this.handlekeypress.bind(this)}
      />
    </div>
  )
}
}


export default App;
