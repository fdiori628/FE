import './index.css';
import AppHeader from './App/appHeader';
import Footer from './Footer';
import Header from './Header';
import AppFooter from './App/appFooter'
import React from 'react';
import List from './App/List';

export default class ToDoList extends React.Component {

  state = {
    todos: [
      { id: "001", name: 'Gaming', done: false },
      { id: "002", name: 'Coding', done: false },
      { id: "003", name: 'Learning', done: false },
      { id: "004", name: 'Shopping', done: false },
    ]
  }

  addTodo = (todo) => {

    const { todos } = this.state
    const newToDo = [todo, ...todos]

    this.setState({ todos: newToDo })
  }

  handlecheck = (id, checkValue) => {

    let myTodos = this.state.todos

    myTodos.map((todo) => {

      if (todo.id !== id) return ''

      todo.done = checkValue

      return ''
    })

    this.setState({
      todos: myTodos
    })
  }

  handleDelete = (id)=>{

    let myTodos = this.state.todos

    myTodos.map((todo) => {
      let myIndex = myTodos.indexOf(todo)

      if (todo.id === id) {
        myTodos.splice(myIndex, 1)
      }

      return ''

    })

    this.setState({
      todos: myTodos
    })
  }
  
  handleSelectAll = (a)=>{
    let myTodos = this.state.todos

    myTodos.map((todo) => {


      todo.done = a

      return ''
    })

    this.setState({
      todos: myTodos
    })
  }

  handleDeleteAll = ()=>{
    let newTodos = []

    this.setState(
      {todos:newTodos}
    )

  }


  render() {
    return (
      <div className="ToDoList">
        <Header />
        <div>
          <AppHeader addToDo={this.addTodo} />
          {/* <AppBody todos={this.state.todos} handlecheck={this.handlecheck} handleDelete={this.handleDelete}  /> */}
          <List todos = {this.state.todos} handlecheck={this.handlecheck} handleDelete={this.handleDelete}/>
          <AppFooter todos = {this.state.todos} handleSelectAll = {this.handleSelectAll} handleDeleteAll = {this.handleDeleteAll}/>
        </div>
        <Footer />
      </div>
    )
  }
}



