import React, { Component } from 'react'
import './index.css'
import Item from './Item'

export default class AppList extends Component {

    state = {
        todos: [
            { id: 1, name: 'working', done: true },
            { id: 2, name: 'sporting', done: false }
        ]
    }
      
    render() {
        const { todos } = this.state
        return (
            todos.map((todo) => {
                return (
                    <Item key={todo.id} todo={todo}/>
                )
            })
        )
    }
}
