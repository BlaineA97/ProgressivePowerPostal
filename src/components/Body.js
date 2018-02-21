import React, { Component } from 'react';
import bodyImg from '../images/circle-body-img.png';
import hoursImg from '../images/hours.png';
import carrierImg from '../images/carrier.png';
import locationImg from '../images/location.png';
import leaningTreeImg from '../images/leanintreelogoalpha.png';
import eggheadImg from '../images/egghead.png';
import milanoImg from '../images/milano.png';
import './Body.css';

class Body extends Component {
  constructor(props) {
    super(props);
    this.openLinkMilano = this.openLinkMilano.bind(this);
    this.state = {
    };
  }

  openLinkMilano() {
    window.open("http://milanomusic.com/", '_blank');
  }

  openLinkLeaninTree() {
    window.open("https://www.leanintree.com/home.aspx", '_blank');
  }

  openLinkEggHead() {
    window.open("http://eggheadcomputerservices.com/", '_blank');
  }

  render() {
    return (
      <div className="Body-container">
{/* Start Bio Container */}
        <div className="Body-bio-container">

          <div className="Body-title">
            <h1 id="Body-title-1">Welcome to</h1>
            <h1 id="Body-title-2">Power Postal at Las Sendas</h1>
          </div>

          <div className="Body-bio">
            <p>
              Power Postal at Las Sendas is independently family-owned and operated shipping location in Mesa, AZ. We pride ourselves on being your neighborhood "mom and pop" small business. Power Postal at Las Sendas has been a community fixture for nearly ten years.
              <br />
              <br />
              Conveniently located on the NW corner of Power and McDowell, we are your one-stop shop for all of your business and shipping needs in Mesa, AZ. We are experts in packing so no need to worry about your item getting to its destination in one piece. Whether it's luggage, artwork, or small fragile items we know how to pack it. We'll also provide you with all of your shipping options by price and carrier. Email us your print or copy job, or if you need it now just bring us your flash drive or portable storage device and we'll print it out while you wait. Our personal mailbox service provides you with a physical address to receive packages at a safe and secure location. We'll call, email or text you when they arrive. Our fast FRIENDLY customer service will exceed your expectations!
            </p>
          </div>

          <div className="Body-img-container">
            <img id="body-img" src={bodyImg} alt="logo" />
          </div>
        </div>

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

      {/* Start Associates Container */}
        <div className="Body-associates-container">
          <h1>Proud Partners Of (add links)</h1>
          <div className="Body-images-container">

            <img onClick={() => this.openLinkLeaninTree()} className="associates-image" id="Body-associates-img-leanintree" src={leaningTreeImg} alt="Leanin' Tree" />

            <img onClick={() => this.openLinkEggHead()} className="associates-image" id="Body-associates-img-egghead" src={eggheadImg} alt="Egghead" />

            <img onClick={() => this.openLinkMilano()} className="associates-image" id="Body-associates-img-milano" src={milanoImg}   alt="Milano" />

          </div>
        </div>

      {/* Start Tracking Container */}
        <div className="Body-tracking-container">
          <h1>This is: Body Tracking Container (Add API)</h1>
        </div>

        </div>

    );
  }
}

export default Body;
