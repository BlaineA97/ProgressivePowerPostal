import React, { Component } from 'react';
import leaningTreeImg from '../../images/leanintreelogoalpha.png';
import eggheadImg from '../../images/egghead.png';
import milanoImg from '../../images/milano.png';
import './Associates.css';

class Associates extends Component {
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
      <div className="Associates-container">
          <div className="Associates-associates-container">
            <h1>Proud Partners Of</h1>
            <div className="Associates-images-container">

              <img onClick={() => this.openLinkLeaninTree()} className="associates-image" id="Associates-associates-img-leanintree" src={leaningTreeImg} alt="Leanin' Tree" />

              <img onClick={() => this.openLinkEggHead()} className="associates-image" id="Associates-associates-img-egghead" src={eggheadImg} alt="Egghead" />

              <img onClick={() => this.openLinkMilano()} className="associates-image" id="Associates-associates-img-milano" src={milanoImg}   alt="Milano" />

            </div>
          </div>
        </div>
    );
  }
}

export default Associates;
