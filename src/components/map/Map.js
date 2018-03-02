import React, { Component } from 'react';
import './Map.css';

class Map extends Component {

  render() {
    const googleAPIKey = process.env.REACT_APP_GOOGLE_STATIC_MAPS_API_KEY
    return (
      <div className="Map-container">
        <iframe
          id="Map-GoogleMap"
          title="3"
          src={"https://www.google.com/maps/embed/v1/place?key=" + googleAPIKey +
            "&q=Power+Postal,Mesa+AZ&zoom=15"} allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default Map;
