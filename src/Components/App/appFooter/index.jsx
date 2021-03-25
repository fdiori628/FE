import React, { Component } from 'react'
import './index.css'

export default class AppFooter extends Component {

    handleSelectAll = (e)=>{

        this.props.handleSelectAll(e.target.checked)
    }

    render() {
        return (
            <div className="appFooter">
                <input type="checkbox" onChange = {this.handleSelectAll}/>
                <span>Select All</span>
                <button>Delete All</button>
            </div>
        )
    }
}
