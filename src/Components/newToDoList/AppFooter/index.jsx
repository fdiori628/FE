import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class AppFooter extends Component {


    state = {
        selectedVaule: 0,
        totalTodo: 0
    }


    // UNSAFE_componentWillMount(){
    //     let t = 0, s = 0
    //     this.token = PubSub.subscribe('todos', (_, data)=>{
    //         console.log(data.length)
    //     })

    // }

    // componentWillUnmount() {
    //     PubSub.unsubscribe(this.token)
    // }


    render() {
        let total = 0, selected = 0;
        this.token = PubSub.subscribe('todos', (_, data) => {
            total = data.length;

            data.map((x)=>{
                if (x.done === true) {
                    selected = selected + 1;
                }
            })

            this.setState({
                totalTodo:total,
                selectedVaule:selected
            })

        })
        return (
            <div className="appfooter">
                <input type="checkbox" />
                <span>{this.state.selectedVaule} / {this.state.totalTodo}</span>
            </div>
        )
    }
}
