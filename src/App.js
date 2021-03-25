import './App.css';
import AppHeader from './Components/App/appHeader';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AppFooter from './Components/App/appFooter'
import React from 'react';
import List from './Components/App/List';

class App extends React.Component {

  state = {
    todos: [
      { id: "001", name: 'xxxxxx1', done: false },
      { id: "002", name: 'xxxxxx2', done: false },
      { id: "003", name: 'xxxxxx3', done: true },
      { id: "004", name: 'xxxxxx4', done: false },
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
        console.log('delete')
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


  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <AppHeader addToDo={this.addTodo} />
          {/* <AppBody todos={this.state.todos} handlecheck={this.handlecheck} handleDelete={this.handleDelete}  /> */}
          <List todos = {this.state.todos} handlecheck={this.handlecheck} handleDelete={this.handleDelete}/>
          <AppFooter handleSelectAll = {this.handleSelectAll} />
        </div>
        <Footer/>
      </div>
    )
  }
}


export default App;
