import React, { Component } from 'react'
import './index.css'
import AppHeader from './AppHeader'
import AppList from './AppList'

export default class NewToDoList extends Component {
    render() {
        return (
            <div className="container">
                <AppHeader />
                <AppList />
            </div>
        )
    }
}
