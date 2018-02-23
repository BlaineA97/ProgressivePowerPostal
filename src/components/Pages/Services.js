import React, { Component } from 'react';
import './Services.css';
import Navigation from '../Navigation';

class Services extends Component {

  render() {
    return (
      <div className="Services-container">
        <Navigation />
        <div className="Services-text-container">
          <div className="Services-title">
            <h1>Our Servies</h1>
          </div>
          <div className="Services-description">
            <p>Power Postal at Las Sendas is your Mesa, AZ destination for Postal & Shipping Services. Tired of terrible customer service at your local post office or the high rates? Look no further, we provide low cost services and provide the best customer service in the valley!</p>
          </div>
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
          <div className="Services-pobox-title">
            <h1>Personal Mailbox Service:</h1>
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
          <div className="Services-usps-title">
            <h1>USPS Postal Services Include:</h1>
          </div>
          <div className="Services-usps-overview">
            <h1>Services-usps-overview</h1>
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
    );
  }
}

export default Services;
