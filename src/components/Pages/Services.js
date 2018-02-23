import React, { Component } from 'react';
import './Services.css';
import Navigation from '../Navigation';

class Services extends Component {

  render() {
    return (
      <div className="Services-container">
        <Navigation />

        <div className="Services-title">
          <h1>Services-Title</h1>
        </div>
        <div className="Services-description">
          <h1>Services-Description</h1>
        </div>
        <div className="Services-overview">
          <h1>Services-Overview</h1>
        </div>
        <div className="Services-pobox-title">
          <h1>Services-pobox-title</h1>
        </div>
        <div className="Services-pobox-overview">
          <h1>Services-pobox-overview</h1>
        </div>
        <div className="Services-usps-title">
          <h1>Services-usps-title</h1>
        </div>
        <div className="Services-usps-overview">
          <h1>Services-usps-overview</h1>
        </div>

      </div>
    );
  }
}

export default Services;
