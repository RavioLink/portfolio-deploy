import React, { Component } from 'react';
import './bannerblock0.css';
import banner1image from './images/bg0.png';


class Bannerblock0 extends Component {
    state = {  } 
    render() { 
        return (
            <div id="mainblock0">
                <div className="centerpiece">
                <div className="textcontent">
                    <h1>Hi, there! I'm Alexander.</h1>
                    <h2>Designer.</h2>
                    <h2>&nbsp;Leader.</h2>
                    <p>Aspiring ReactJS Developer. Studied BS Computer Science at Cavite State University.</p>
                    <br />
                    <p>Has experience in CMS platforms like Wordpress, Bubble and Thinkific.</p>
                    <p>Also has experience in CRM integration for websites and turning leads into sales using EngageBay.</p>
                    <br />
                    <p>Excellent communication skills with proficiency in office productivity tools such as Excel, MS Word and Powerpoint;</p>
                    <p>Interpreting data for presentations in a corporate business review</p>
                    <p>Was also able to create projects in Adobe Photoshop and has knowledge in video editing</p>
                </div>
                
                <div className="bg-image0">
                    <img src={banner1image} alt="test" />
                </div>             
                </div>
                <div className="foottext">
                    <h3>Scroll down to know more about me!</h3>
                </div>
            </div>
        );
    }
}
 
export default Bannerblock0;