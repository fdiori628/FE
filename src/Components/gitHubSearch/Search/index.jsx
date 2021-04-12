import React, { Component } from 'react';
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

class Search extends Component {

    Search = ()=>{
        const searchPara  = this.input1.value
        async function getData(para){
            try {
                let data = await axios({
                    method:'GET',
                    url:"http://localhost:3001/" + para
                })

                let res = data.data;

                // console.log(res)

                PubSub.publish('personInfo', res)
            }catch(err){
                
            }
        }

        getData(searchPara)
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