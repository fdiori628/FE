import React, { Component } from 'react';
import './index.css'

class Search extends Component {

    Search = ()=>{
        const searchPara  = this.input1.value
        console.log(searchPara)
    }



    render() {
        return (
            <div className="Search">
                <input ref={c=>{this.input1=c}} type="text"/> <button onClick={this.Search}>Click</button>
            </div>
        );
    }
}

export default Search;