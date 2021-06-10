import './App.css';
import React from 'react';
import { Link, Route } from 'react-router-dom'
import SQLHOME from './Components/SQLBOOK/HOME';


class App extends React.Component {


  render() {
    return (
      <div className="App">
          <SQLHOME />
      </div>
    )
  }
}


export default App;
