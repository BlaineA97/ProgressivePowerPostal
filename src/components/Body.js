import React, { Component } from 'react';
import hoursImg from '../images/hours.png';
import carrierImg from '../images/carrier.png';
import locationImg from '../images/location.png';
import './Body.css';
import Associates from './BodyParts/Associates';
import Bio from './BodyParts/Bio';
import Info from './BodyParts/Info';

class Body extends Component {

  render() {
    return (
      <div className="Body-container">

      <Bio />
      <Info />
      <Associates />

      {/* Start Tracking Container */}
        <div className="Body-tracking-container">
          <h1>This is: Body Tracking Container (Add API)</h1>
        </div>

        </div>

    );
  }
}

export default Body;
