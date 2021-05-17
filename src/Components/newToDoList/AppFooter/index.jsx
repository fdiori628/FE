import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class AppFooter extends Component {


    state = {
        selectedVaule: 0,
        totalTodo: 0,
        tempTodos:[]
    }

    UNSAFE_componentWillMount() {
        this.token = PubSub.subscribe('todos', (_, data)=>{

            let total = 0, selected = 0;

            total = data.length;

            data.map((x) => {
                if (x.done === true) {
                    selected = selected + 1;
                }
                return ''
            })

            this.setState({
                totalTodo: total,
                selectedVaule: selected
            })
        })
    }


    handleCheckAll = ()=>{

        let statusNumber = 0

        this.token2 = PubSub.subscribe('todos', (_, data)=>{
            this.setState({
                tempTodos:data
            })
        })

        let {tempTodos} = this.state;
        tempTodos.map((todo)=>{
            if (todo.done === true) {
                statusNumber = statusNumber + 1;
            }
            return ''
        })


        if(statusNumber === 0) {
            return false
        }else if(statusNumber === tempTodos.length) {
            return true
        }else {
            return false
        }

    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
        PubSub.unsubscribe(this.token2)
    }


    render() {

        return (
            <div className="appfooter">
                <input type="checkbox" defaultChecked = {this.handleCheckAll()}/>
                <span>{this.state.selectedVaule} / {this.state.totalTodo}</span>
            </div>
        )
    }
}
