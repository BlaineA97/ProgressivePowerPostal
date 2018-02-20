import React, { Component } from 'react';
import bodyImg from '../images/circle-body-img.png';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="Body-container">

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

        <div className="Body-img">
          <img src={bodyImg} alt="logo" />
        </div>


      </div>
    );
  }
}

export default Body;
