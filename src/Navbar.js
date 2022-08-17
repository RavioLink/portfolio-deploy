import React, { Component } from 'react';
import './navbar.css';
import './App.css';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div id="navbar">
                <div className="companyname">
                    <h1>Portfolio</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#root">Home</a></li>
                        <li><a href="#mainblock1">Portfolio</a></li>
                        <li>About Me</li>
                        <li>Contact Me</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Navbar;