import React, { Component } from 'react';
import ImgDHL from '../../images/tracking/dhl.png';
import ImgFedEx from '../../images/tracking/fedex.png';
import ImgUSPS from '../../images/tracking/usps.png';
import ImgUPS from '../../images/tracking/ups.png';
import './Tracking.css';

class Tracking extends Component {

  openTrackerDHL() {
    window.open("http://www.dhl.com/en/express/tracking.html", '_blank');
  }

  openTrackerFedEx() {
    window.open("https://www.fedex.com/apps/fedextrack/?action=track", '_blank');
  }

  openTrackerUPS() {
    window.open("https://www.ups.com/tracking/tracking.html", '_blank');
  }

  openTrackerUSPS() {
    window.open("https://tools.usps.com/go/TrackConfirmAction_input", '_blank');
  }

  render() {
    return (
      <div className="Tracking-container">
        <div id="Tracking-text">
          <h1>Checking on a Shipment?</h1>
          <h1>Select your Carrier</h1>
        </div>

        <div className="Tracking-images-container">
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
      </div>
    );
  }
}

export default Tracking;
