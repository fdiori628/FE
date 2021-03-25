import React, { Component } from 'react'
import AppBody from '../appBody'

export default class List extends Component {

    handlecheck = (id, v)=>{
        this.props.handlecheck(id, v)
    }

    handleDelete = (id) =>{
        this.props.handleDelete(id)
    }    
    
    render() {
        const {todos} = this.props
        return (
            todos.map((todo)=>{
                return(
                    <AppBody key={todo.id} todo={todo} handlecheck={this.handlecheck} handleDelete={this.props.handleDelete}/>
                )
            })
        )
    }
}
