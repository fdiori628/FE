import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default class AppHeader extends Component {


    handleKeyUp = (e)=>{


        if (e.keyCode !== 13) return


        let todo = {
            id:nanoid(),
            name:e.target.value,
            done:false
        }

        this.props.addToDo(todo)

        e.target.value = ''

    }


    render() {
        return (
            <div className="appHeader">
                <input className="input" type="text" onKeyUp = {this.handleKeyUp}/>                
            </div>
        )
    }
}
