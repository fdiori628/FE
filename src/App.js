import './App.css';
import React from 'react';
import { Link, Route } from 'react-router-dom'
import NewToDoList from './Components/newToDoList/'
import ToDoList from './Components/ToDoList'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <div>
          <Link className="list-item" to="/newToDoList">New list</Link><br />
          <Link className="list-item" to="/ToDoList">todo list</Link>
        </div>
        <div>
          <Route path="/newToDoList" component={NewToDoList} />
          <Route path="/ToDoList" component={ToDoList} />
        </div>
      </div>
    )
  }
}


export default App;
