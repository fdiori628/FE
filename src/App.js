import './App.css';
import React from 'react';
import NewToDoList from './Components/newToDoList/'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <NewToDoList />
      </div>
    )
  }
}


export default App;
