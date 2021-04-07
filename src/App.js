import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    id:'',
    title:'',
    author:''
  }

  getData = ()=>{
    async function main(_this){
      try{
        let data = await axios({
          method:'GEt',
          url:"http://localhost:3001/posts/1"
        })
        let res = data.data
        _this.setState({
          id:res.id,
          title:res.title,
          author:res.author
        })
      }catch(err){
        alert(err)
      }

    }
    main(this)
    
  }


  render() {
    return (
      <div className="App">
          <button onClick={this.getData}>click me</button>
          <br /><br />
          <span>id: {this.state.id}</span>
          <br /><br />
          <span>title: {this.state.title}</span>
          <br /><br />
          <span>author: {this.state.author}</span>
      </div>
    )
  }
}


export default App;
