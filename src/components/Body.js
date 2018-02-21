import React, { Component } from 'react';
import hoursImg from '../images/hours.png';
import carrierImg from '../images/carrier.png';
import locationImg from '../images/location.png';
import './Body.css';
import Associates from './BodyParts/Associates';
import Bio from './BodyParts/Bio';

class Body extends Component {

  render() {
    return (
      <div className="Body-container">

      <Bio />

      {/* Start Info Container */}
        <div className="Body-info-container">
        {/* Start Info-Hours Container */}
          <div id="Body-hours-container">
            <img className="info-image" id="Body-hours-img" src={hoursImg} alt="hours" />
            <h1 id="Body-hours-title">Store Hours</h1>
            <p id="Body-hours-text">
              Mon: 8:30 AM - 6:00 PM<br/>
              Tue: 8:30 AM - 6:00 PM<br/>
              Wed: 8:30 AM - 6:00 PM<br/>
              Thu: 8:30 AM - 6:00 PM<br/>
              Fri: 8:30 AM - 6:00 PM<br/>
              Sat: 9:30 AM - 4:00 PM<br/>
              Sun: Closed
            </p>
            <h1 id="Bodyhours-title">Holiday Hours</h1>
            <p id="Body-hours-text">
              11/23 (Thanksgiving) – CLOSED<br/>
              11/24 (Black Friday)– CLOSED<br/>
              12/24 (Christmas Eve) – CLOSED<br/>
              12/25 (Christmas Day) – CLOSED<br/>
              12/31 (New Year’s Eve) – CLOSED<br/>
              01/01 (New Year’s Day) – CLOSED
            </p>
          </div>
        {/* Start Info-Carrier Container */}
          <div id="Body-carrier-container">
            <img className="info-image" id="Body-carrier-img" src={carrierImg} alt="carrier" />
            <h1 id="Body-carrier-title">Carrier Pickup Times</h1>
            <p id="Body-carrier-text">
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
        {/* Start Info-Location Container */}
          <div id="Body-location-container">
            <img className="info-image" id="Body-location-img" src={locationImg} alt="location" />
            <h1 id="Body-location-title">Location</h1>
            <p id="Body-location-text">
              Power Postal at Las Sendas<br />
              2824 N Power Rd, Suite 113<br />
              Mesa, AZ 85215<br />
              [View Map]<br />
              <br />
              Phone: 480-654-2600<br />
              Fax: 480-654-2800
            </p>
          </div>
        </div>

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
