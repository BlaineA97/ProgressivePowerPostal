import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation-container">

        <div className="Navigation-flexbox-left">
          <div className="Navigation-logo">
            <h1 className="Navigation-logo-1">Power Postal</h1>
            <h3 className="Navigation-logo-2">at Las Sendas</h3>
          </div>
        </div>

        <div className="Navigation-flexbox-center">
        </div>

        <div className="Navigation-flexbox-right">
          <div id="Navigation-services" className="Navigation-button">
            <p>Our Services</p>
          </div>

          <div id="Navigation-tracking" className="Navigation-button">
            <p>Track Package</p>
          </div>

          <div id="Navigation-contact" className="Navigation-button">
            <p>Contact Us</p>
          </div>
        </div>




      </div>
    );
  }
}

export default Navigation;
