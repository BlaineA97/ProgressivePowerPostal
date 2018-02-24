import React, { Component } from 'react';
import './Services.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Shipping from '../../images/Services/shipping.png';

class Services extends Component {

  render() {
    return (
      <div className="Services-container">
        <Navigation />
        <div className="Services-container-organizer">
        <div className="Services-text-container">
          <div id="Services-title" className="Ser-title">
            <h1><i>Our Services</i></h1>
          </div>
          <div className="Services-description">
            <p id="Ser-bio-1">Power Postal at Las Sendas is your Mesa, AZ destination for Postal & Shipping Services. </p>
            <p id="Ser-bio-2">Tired of terrible customer service at your local post office or the high rates? </p>
            <p id="Ser-bio-3">Look no further, we provide low cost services and provide the best customer service in the valley!</p>
          </div>
          <div className="Ser-spacer"/>
          <div className="Services-overview">
            <ul>
              <li>Low Cost, Secure, Personal Mailboxes</li>
              <li>Expert Packing</li>
              <li>Shipping via USPS, FedEx, UPS</li>
              <li>Faxing</li>
              <li>Copy and Binding Services</li>
              <li>Laminating</li>
              <li>Notary Service</li>
              <li>Office and Mailing Supplies</li>
              <li>Packing and Shipping Supplies</li>
              <li>Gift Shop, Greeting Cards, Candles</li>
              <li>Secure Document Shredding</li>
              <li>Transfer Video to DVD</li>
              <li>Milano Music Rentals</li>
              <li></li>
            </ul>
          </div>
          <div className="Ser-spacer"/>
          <div id="Services-pobox-title" className="Ser-title">
            <h1>Personal Mailbox Services</h1>
          </div>
          <div className="Services-pobox-overview">
            <ul>
              <li>A Real Street Address, not a P.O. Box Number</li>
              <li>Receipt Notification</li>
              <li>Full-service Mail and Package Receiving</li>
              <li>Mail Holding and Forwarding</li>
              <li>Package Acceptance from all Shipping Carriers</li>
            </ul>
          </div>
          <div className="Ser-spacer"/>
          <div id="Services-usps-title" className="Ser-title">
            <h1>USPS Postal Services Include</h1>
          </div>
          <div className="Services-usps-overview">
            <ul>
              <li>Postage Stamps</li>
              <li>Certified Mail</li>
              <li>Metered Mail</li>
              <li>Priority Mail®</li>
              <li>Parcel Post®</li>
              <li>First Class Mail®</li>
              <li>Delivery Confirmation™</li>
              <li>Return Receipt</li>
            </ul>
          </div>
        </div>
        </div>
        <img id="Ser-img" src={Shipping} alt="logo"/>
        <Footer />
      </div>
    );
  }
}

export default Services;
