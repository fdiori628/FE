import React, { Component } from 'react';
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

class Search extends Component {

    Search = async () => {
        const searchPara = this.input1.value


        // Axios ==========================================================================
        // async function getData(para){
        //     try {
        //         let data = await axios({
        //             method:'GET',
        //             url:"http://localhost:3001/" + para
        //         })

        //         let res = data.data;

        //         // console.log(res)

        //         PubSub.publish('personInfo', res)
        //     }catch(err){

        //     }
        // }

        
        // fetch ===========================================================================
        async function getData(para) {
            try {
                let url = 'http://localhost:3001/' + para
                const respones = await fetch(url);
                const data = await respones.json();
                PubSub.publish('personInfo', data)
            } catch (err) {
                console.log(err)
            }

        }

        getData(searchPara)
    }



    render() {
        return (
            <div className="Search">
                <input ref={c => { this.input1 = c }} type="text" /> <button onClick={this.Search}>Click</button>
            </div>
        );
    }
}

export default Search;