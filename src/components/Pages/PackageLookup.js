import React, { Component } from 'react';
import './PackageLookup.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ImgDHL from '../../images/tracking/dhl.png';
import ImgFedEx from '../../images/tracking/fedex.png';
import ImgUSPS from '../../images/tracking/usps.png';
import ImgUPS from '../../images/tracking/ups.png';

class PackageLookup extends Component {

  render() {
    return (
      <div className="PackageLookup-container">
        <Navigation />
          <div className="PackageLookup-title">
            <h1>Checking on a Shipment?</h1>
            <h1>Select your Carrier</h1>
          </div>
          <div className="PackageLookup-text">
            <p>Power Postal provides easy access to the delivery status of your FedEx, UPS, US Postal or DHL shipment. To track and confirm delivery of your item, select your package carrier and enter the tracking number(s) for package identification.</p>
          </div>

          <div className="Tracking-images-container">
            <img
              onClick={() => this.openTrackerUSPS()}
              className="PackageLookup-image"
              id="Tracking-img-usps"
              src={ImgUSPS}
              alt="Leanin' Tree"
            />
            <img
              onClick={() => this.openTrackerFedEx()}
              className="PackageLookup-image"
              id="Tracking-img-fedex"
              src={ImgFedEx}
              alt="Leanin' Tree"
            />
            <img
              onClick={() => this.openTrackerUPS()}
              className="PackageLookup-image"
              id="Tracking-img-ups"
              src={ImgUPS}
              alt="Leanin' Tree"
            />
            <img
              onClick={() => this.openTrackerDHL()}
              className="PackageLookup-image"
              id="Tracking-img-dhl"
              src={ImgDHL}
              alt="Leanin' Tree"
            />
          </div>

        <Footer />
      </div>
    );
  }
}

export default PackageLookup;
