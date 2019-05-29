import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner">
                    <h3 className="bannerText">CryptoTracker</h3>
                    <Link to={`/`} className="navLink">Home</Link>
                </div>
            </React.Fragment>
        )
    }
}
