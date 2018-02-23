import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

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

        <div className="Navigation-flexbox-right">
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

      </div>
    );
  }
}

export default Navigation;
