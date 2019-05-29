import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <h3>CryptoTracker</h3>
                    <a href={`/`} className="navLink">Home</a>
                </div>
            </div>
        )
    }
}
