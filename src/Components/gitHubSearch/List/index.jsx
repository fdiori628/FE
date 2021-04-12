import React, { Component } from 'react';
import './index.css'
import PubSub from 'pubsub-js'

class List extends Component {


    state = {
        name:'',
        age:'',
        sex:'',
        weight:'',
        abc:''
    }

    componentDidMount(){

        this.token = PubSub.subscribe('personInfo', (_, data)=>{
            this.setState({
                name:data.name,
                age:data.age,
                sex:data.sex,
                weight:data.weight,
                abc:data.abc
            })
        })
    }

    componentWillUnmount = () => {
        PubSub.unsubscribe(this.token)
    }


    render() {
        return (
            <div className="list">
                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Age: {this.state.age}</li>
                    <li>Sex: {this.state.sex}</li>
                    <li>Weight:{this.state.weight}</li>
                    <li>ABC: {this.state.abc}</li>
                </ul>
            </div>
        );
    }
}

export default List;