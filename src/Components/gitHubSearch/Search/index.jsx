import React, { Component } from 'react';
import './index.css'
import axios from 'axios'

class Search extends Component {

    Search = ()=>{
        const searchPara  = this.input1.value
        async function getData(para){
            try {
                let data = await axios({
                    method:'GET',
                    url:"http://localhost:3001/posts/" + para
                })

                let res = data.data;
            }catch(err){
                
            }
        }
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