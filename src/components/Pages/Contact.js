import React, { Component } from 'react';
import './Contact.css';
import Navigation from '../Navigation';
import Associates from '../BodyParts/Associates';
import Map from '../map/Map';
import Footer from '../Footer';
import hoursImg from '../../images/Info/hours.png';
import locationImg from '../../images/Info/location.png';

class Contact extends Component {


  render() {
    return (
      <div className="Contact-container">
        <Navigation />

        <div className="Contact-title">
          <h1>Contact Us</h1>
        </div>
        <div className="Contact-subtitle">
          <h3>Power Postal at Las Sendas</h3>
        </div>

        <div className="Contact-Information">
          <div id="Contact-location-container">
            <img className="info-image" id="Contact-location-img" src={locationImg} alt="location" />
            <h3 id="Contact-location-title">Location</h3>
            <p id="Contact-location-text">
              Power Postal at Las Sendas<br />
              2824 N Power Rd, Suite 113<br />
              Mesa, AZ 85215<br />
              <br />
              Phone: 480-654-2600<br />
              Fax: 480-654-2800<br />
              Email: Info@Powerpostal.com
            </p>
          </div>

          <div className="Contact-hours">
            <img className="Contact-image" src={hoursImg} alt="hours" />
            <h3 id="Contact-hours-title">Hours of Operation</h3>
            <p id="Contact-hours-text">
              Mon: 8:30 AM - 6:00 PM<br/>
              Tue: 8:30 AM - 6:00 PM<br/>
              Wed: 8:30 AM - 6:00 PM<br/>
              Thu: 8:30 AM - 6:00 PM<br/>
              Fri: 8:30 AM - 6:00 PM<br/>
              Sat: 9:30 AM - 4:00 PM<br/>
              Sun: Closed
            </p>
          </div>

          <div id="Contact-holiday-hours">
            <img className="Contact-image" src={hoursImg} alt="holiday" />
            <h3 id="Contact-holiday-title">Holiday Hours</h3>
            <p id="Contact-holiday-text">
              11/23 (Thanksgiving) – CLOSED<br/>
              11/24 (Black Friday)– CLOSED<br/>
              12/24 (Christmas Eve) – CLOSED<br/>
              12/25 (Christmas Day) – CLOSED<br/>
              12/31 (New Year’s Eve) – CLOSED<br/>
              01/01 (New Year’s Day) – CLOSED
            </p>
          </div>
        </div>

        <div id="Contact-google-map">
          <Map />
        </div>

        <Associates />
        <Footer />
      </div>
    );
  }
}

export default Contact;
