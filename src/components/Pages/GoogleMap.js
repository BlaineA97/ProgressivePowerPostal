import React, { Component } from 'react'
import './GoogleMap.css'
import GoogleMapReact from 'google-map-react'
import pinImg from '../../images/GoogleMaps/pin.svg';

const AnyReactComponent = ({ text, text2, Img}) =>
  <div>
      <div className="Google-text">
        <p id="Google-text1">{ text }</p>
        <p id="Google-text2">{ text2 }</p>
        <img src={ Img } /></div>
  </div>;

class GoogleMap extends Component {

  static defaultProps = {
    center: { lat: 33.467119, lng:  -111.685565 },
    zoom: 13
  }

render() {
    return (
      <div className='GoogleMap-container'>
        <div id="GoogleMap-info-box">
          BOB
        </div>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 33.467119 }
            lng={ -111.685565 }
            text={ "Power" }
            text2={ "Postal" }
            Img={ pinImg }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap;
