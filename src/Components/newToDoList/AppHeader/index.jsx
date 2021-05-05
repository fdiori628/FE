import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
import {nanoid} from 'nanoid'

export default class AppHeader extends Component {




    inputValue = (e)=>{

        if (e.keyCode !== 13) return

        if (e.target.value === '') {
            alert('please input name')
            return
        }


        let todo = {
            id:nanoid(),
            name:e.target.value,
            done:false
        }

        e.target.value = ''

        PubSub.publish('newToDo', todo)
    }


    render() {
        return (
            <div className="appheader">
                <input onKeyUp={this.inputValue} type="text" />
            </div>
        )
    }
}
