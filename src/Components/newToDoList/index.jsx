import React, { Component } from 'react'
import './index.css'
import AppHeader from './AppHeader'
import AppList from './AppList'
import AppFooter from './AppFooter'

export default class NewToDoList extends Component {
    render() {
        return (
            <div className="container">
                <AppHeader />
                <AppList />
                <AppFooter />
            </div>
        )
    }
}
