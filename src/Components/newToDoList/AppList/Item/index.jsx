import React, { Component } from 'react';
import './index.css'
import  { publish } from 'pubsub-js'


class Item extends Component {

    state = {
        flag: false,
    }

    handleMouseOver = (status) => {
        return (
            () => {
                this.setState({ flag: status })
            }
        )
    }
    handleMonseLeave = (status) => {
        return (
            () => {
                this.setState({ flag: status })
            }
        )
    }

    handleDelete = (id)=>{
        return (
            ()=>{
                publish('id', id)
            }
        )

    }

    handleCheck = (id)=>{
        return (
            ()=>{
                publish('checkId', id)
            }
        )
    }

    render() {
        const todo = this.props.todo
        return (

            <div className="item">
                <ul>
                    <li onMouseOver={this.handleMouseOver(true)} onMouseLeave={this.handleMonseLeave(false)} style={this.state.flag ? {backgroundColor:"#ddd"}:{backgroundColor:"white"}}>
                        <div>
                            <input type="checkbox" defaultChecked={todo.done} onChange = {this.handleCheck(todo.id)}/>
                            <span>{todo.name}</span>
                        </div>
                        <button style={this.state.flag ? { display: "inline" } : { display: "none" }} onClick = {this.handleDelete(todo.id)}>delete</button>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Item;