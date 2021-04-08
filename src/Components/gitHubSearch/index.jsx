import React, { Component } from 'react';
import Search from './Search'
import List from './List'
import './index.css'

class Githubsearch extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        );
    }
}

export default Githubsearch;