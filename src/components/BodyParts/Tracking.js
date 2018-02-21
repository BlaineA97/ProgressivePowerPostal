import React, { Component } from 'react';
import ImgDHL from '../../images/tracking/dhl.png';
import ImgFedEx from '../../images/tracking/fedex.png';
import ImgUSPS from '../../images/tracking/usps.png';
import ImgUPS from '../../images/tracking/ups.png';
import './Tracking.css';

class Tracking extends Component {

  openTrackerDHL() {
    window.open("BLANK", '_blank');
  }

  openTrackerFedEx() {
    window.open("BLANK", '_blank');
  }

  openTrackerUPS() {
    window.open("BLANK", '_blank');
  }

  openTrackerUSPS() {
    window.open("BLANK", '_blank');
  }

  render() {
    return (
      <div className="Tracking-container">

        <img
          onClick={() => this.openTrackerUSPS()}
          className="Tracking-image"
          id="Tracking-img-usps"
          src={ImgUSPS}
          alt="Leanin' Tree"
        />
        <img
          onClick={() => this.openTrackerFedEx()}
          className="Tracking-image"
          id="Tracking-img-fedex"
          src={ImgFedEx}
          alt="Leanin' Tree"
        />
        <img
          onClick={() => this.openTrackerUPS()}
          className="Tracking-image"
          id="Tracking-img-ups"
          src={ImgUPS}
          alt="Leanin' Tree"
        />
        <img
          onClick={() => this.openTrackerDHL()}
          className="Tracking-image"
          id="Tracking-img-dhl"
          src={ImgDHL}
          alt="Leanin' Tree"
        />

      </div>
    );
  }
}

export default Tracking;