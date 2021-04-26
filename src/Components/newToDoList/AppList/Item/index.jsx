import React, { Component } from 'react';
import './index.css'
import PubSub from 'pubsub-js'


class Item extends Component {

    state = {
        flag: false
    }
    componentDidMount() {

        this.token = PubSub.subscribe('itemName', (_, data) => {
            this.setState({
                itemName: data
            })
        })
    }

    handleMouseOver = (status) => {
        return (
            () => {
                this.setState({ flag: status })
                console.log(this.state.flag)
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

    render() {
        const name = this.props.name
        return (

            <div className="item">
                <ul>
                    <li onMouseOver={this.handleMouseOver(true)} onMouseLeave={this.handleMonseLeave(false)} style={this.state.flag ? {backgroundColor:"#ddd"}:{backgroundColor:"white"}}>
                        <span>{name}</span>
                        <button style={this.state.flag ? { display: "inline" } : { display: "none" }}>delete</button>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Item;