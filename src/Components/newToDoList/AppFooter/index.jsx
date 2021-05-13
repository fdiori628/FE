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

        console.log(statusNumber)
        console.log(tempTodos.length)
        if(statusNumber === 0) {
            return false
        }else if(statusNumber === tempTodos.length) {
            return true
        }else {
            return false
        }

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
