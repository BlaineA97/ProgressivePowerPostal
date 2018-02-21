import React, { Component } from 'react';
import hoursImg from '../../images/hours.png';
import carrierImg from '../../images/carrier.png';
import locationImg from '../../images/location.png';
import './Info.css';

class Info extends Component {

  openLinkDirections() {
    window.open("https://www.google.com/maps/place/Power+Postal+at+Las+Sendas/@33.466989,-111.6877649,17z/data=!3m1!4b1!4m5!3m4!1s0x872ba5238ac70ab7:0x575496cc1e835641!8m2!3d33.4669845!4d-111.6855762", '_blank');
  }

  render() {
    return (
      <div className="Info-container">
      {/* Start Info-Hours Container */}
        <div id="Info-hours-container">
          <img className="info-image" id="Info-hours-img" src={hoursImg} alt="hours" />
          <h1 id="Info-hours-title">Store Hours</h1>
          <p id="Info-hours-text">
            Mon: 8:30 AM - 6:00 PM<br/>
            Tue: 8:30 AM - 6:00 PM<br/>
            Wed: 8:30 AM - 6:00 PM<br/>
            Thu: 8:30 AM - 6:00 PM<br/>
            Fri: 8:30 AM - 6:00 PM<br/>
            Sat: 9:30 AM - 4:00 PM<br/>
            Sun: Closed
          </p>
        </div>
      {/* Start Info-Carrier Container */}
        <div id="Info-carrier-container">
          <img className="info-image" id="Info-carrier-img" src={carrierImg} alt="carrier" />
          <h1 id="Info-carrier-title">Carrier Pickup Times</h1>
          <p id="Info-carrier-text">
            <br />
            FedEx Ground<br />
            4:00pm<br />
            <br />
            FedEx Express<br />
            5:00pm<br />
            <br />
            UPS Ground & Express<br />
            4:00pm
          </p>
        </div>
      {/* Start Info-Holiday Container */}
        <div id="Info-holiday-container">
          <img className="info-image" id="Info-holiday-img" src={hoursImg} alt="holiday" />
          <h1 id="Info-holiday-title">Holiday Hours</h1>
          <p id="Info-holiday-text">
            11/23 (Thanksgiving) – CLOSED<br/>
            11/24 (Black Friday)– CLOSED<br/>
            12/24 (Christmas Eve) – CLOSED<br/>
            12/25 (Christmas Day) – CLOSED<br/>
            12/31 (New Year’s Eve) – CLOSED<br/>
            01/01 (New Year’s Day) – CLOSED
          </p>
        </div>
      {/* Start Info-Location Container */}
        <div id="Info-location-container">
          <img className="info-image" id="Info-location-img" src={locationImg} alt="location" />
          <h1 id="Info-location-title">Location</h1>
          <p id="Info-location-text">
            Power Postal at Las Sendas<br />
            2824 N Power Rd, Suite 113<br />
            Mesa, AZ 85215<br />
            <a id="Info-location-link" onClick={() => this.openLinkDirections()}>
            [View Map]</a><br />
            Phone: 480-654-2600<br />
            Fax: 480-654-2800
          </p>
        </div>
      </div>
    );
  }
}

export default Info;
