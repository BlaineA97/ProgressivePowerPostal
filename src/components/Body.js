import React, { Component } from 'react';
import './Body.css';
import Associates from './BodyParts/Associates';
import Bio from './BodyParts/Bio';
import Info from './BodyParts/Info';
import Tracking from './BodyParts/Tracking';

class Body extends Component {

  render() {
    return (
      <div className="Body-container">
        <Bio />
        <Info />
        <Tracking />
        <Associates />
      </div>
    );
  }
}

export default Body;
