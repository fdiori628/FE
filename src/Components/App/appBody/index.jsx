import React, { Component } from 'react'
import './index.css'

export default class AppBody extends Component {

    state = {

        flag: false

    }


    handleCheck = (a) => {
        // console.log(e.target.checked)

        return ((e) => {
            this.props.handlecheck(a, e.target.checked)
        })

    }

    handleDelete = (a) => {

        return (() => {
            this.props.handleDelete(a)
        })
    }

    handleMouseOver = (a) => {
        return (() => {
            this.setState({
                flag: a
            })
        })
    }

    render() {

        const { flag } = this.state
        const { todo } = this.props

        return (
            <li className='item' style={flag ? { backgroundColor: "#ddd" } : { backgroundColor: "white" }} onMouseOver={this.handleMouseOver(true)} onMouseLeave={this.handleMouseOver(false)}>
                <input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)} />
                <span style={{ margin: "5px" }}>{todo.name}</span>
                <button onClick={this.handleDelete(todo.id)} style={flag ? { display: "inline" } : { display: "none" }}>Delete</button>
            </li>
        )
    }
}


