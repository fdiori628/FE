import React, { Component } from 'react'
import SQLNEV from '../NEV'
import "./index.css"
export default class SQLHOME extends Component {
    render() {
        return (
            <div className="sqlHome">
                <SQLNEV />
                <div className="sql-body">body</div>
            </div>
        )
    }
}
