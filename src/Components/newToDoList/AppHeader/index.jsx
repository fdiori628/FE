import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class AppHeader extends Component {




    inputValue = (e)=>{
        const itemName = e.target.value
        PubSub.publish('itemName', itemName)
    }


    render() {
        return (
            <div className="appheader">
                <input onChange={this.inputValue} type="text" />
            </div>
        )
    }
}
