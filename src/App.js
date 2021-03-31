import './App.css';
import ToDoList from './Components/ToDoList/'
import React from 'react';

class App extends React.Component {


  render() {
    return (
      <div className="App">
          <ToDoList />
      </div>
    )
  }
}


export default App;
