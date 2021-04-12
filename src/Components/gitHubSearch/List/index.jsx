import React, { Component } from 'react';
import './index.css'
class List extends Component {
    render() {
        return (
            <div className="list">
                <ul>
                    <li>Name</li>
                    <li>Age</li>
                    <li>Sex</li>
                    <li>Weight</li>
                    <li>ABC</li>
                </ul>
            </div>
        );
    }
}

export default List;