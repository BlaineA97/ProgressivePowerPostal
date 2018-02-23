import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import MediaQuery from 'react-responsive';

class Navigation extends Component {

  render() {
    return (
      <div className="Navigation-container">

        <div className="Navigation-flexbox-left">
          <Link to="/" className="Navigation-logo">
            <h1 className="Navigation-logo-1">Power Postal</h1>
            <h3 className="Navigation-logo-2">at Las Sendas</h3>
          </Link>
        </div>

        <div className="Navigation-flexbox-center">
        </div>

        <MediaQuery maxWidth={499}>
          <div className="Navigation-flexbox-right-dropdown">
            <button onclick="myFunction()" class="Navigation-drop-menu">
              <div className="Navigation-drop-button"></div>
              <div className="Navigation-drop-button"></div>
              <div className="Navigation-drop-button"></div>
            </button>
          </div>
         </MediaQuery>

         <MediaQuery minWidth={500} maxWidth={1200}>
           <div className="Navigation-flexbox-right-full">
             <div id="Navigation-services">
               <Link className="Navigation-button" to="/services"><p>Our Services</p></Link>
             </div>

             <div id="Navigation-tracking">
               <Link className="Navigation-button" to="/tracking"><p>Track Package</p></Link>
             </div>

             <div id="Navigation-contact">
               <Link className="Navigation-button" to="/contact"><p>Contact Us</p></Link>
             </div>
             </div>

             <div className="Navigation-backdrop">
           </div>
         </MediaQuery>

      </div>
    );
  }
}

export default Navigation;
