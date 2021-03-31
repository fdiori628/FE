import React, { Component } from 'react'
import './index.css'

export default class AppFooter extends Component {

    handleSelectAll = (e)=>{

        this.props.handleSelectAll(e.target.checked)
    }

    handleDeleteAll = ()=>{
        this.props.handleDeleteAll()
    }

    handCheckAll = ()=>{
        const {todos} = this.props
        let my_status = 0

        todos.map((todo)=>{

            if (todo.done === true) {my_status ++}
            return ''
        })

        if (my_status === todos.length) {return true} else {return false}

        
    }

    render() {
        return (
            <div className="appFooter">
                <input type="checkbox" onChange = {this.handleSelectAll} checked = {this.handCheckAll()}/>
                <span>Select All</span>
                <button onClick = {this.handleDeleteAll}>Delete All</button>
            </div>
        )
    }
}
