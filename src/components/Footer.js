import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  openLinkReactJS() {
    window.open("https://reactjs.org/", '_blank');
  }

  openLinkBlaine() {
    window.open("https://github.com/BlaineA97", '_blank');
  }

  render() {
    return (
      <div className="Footer-container">
        <div id="Footer-center">
          <p className="Footer-text">© 2015 Power Postal at Las Sendas</p>
          <p className="Footer-text-link" onClick={() => this.openLinkBlaine()}>Built by Blaine Anderson</p>
          <p className="Footer-text-link" onClick={() => this.openLinkReactJS()}>Powered with ReactJS</p>
        </div>
      </div>
    );
  }
}

export default Footer;
