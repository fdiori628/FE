import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class AppFooter extends Component {


    state = {
        selectedVaule: 0,
        totalTodo: 0
    }

    UNSAFE_componentWillMount() {
        this.token = PubSub.subscribe('todos', (_, data)=>{

            let total = 0, selected = 0;

            total = data.length;

            data.map((x) => {
                if (x.done === true) {
                    selected = selected + 1;
                }
            })

            this.setState({
                totalTodo: total,
                selectedVaule: selected
            })
        })
    }


    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }


    render() {

        return (
            <div className="appfooter">
                <input type="checkbox" />
                <span>{this.state.selectedVaule} / {this.state.totalTodo}</span>
                {/* <span>1 / 10</span> */}
            </div>
        )
    }
}
