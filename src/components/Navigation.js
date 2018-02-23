import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import MediaQuery from 'react-responsive';

class Navigation extends Component {

  render() {
    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    return (
      <div>

        <MediaQuery maxWidth={499}>
          <div className="Nav-dropdown">
            <div className="Nav-dropdown-container">

            <div className="Nav-dropdown-logo">
              <Link to="/" className="Nav-dropdown-logo-link">
                <h1 className="Nav-dropdown-logo-1">Power Postal</h1>
                <h3 className="Nav-dropdown-logo-2">at Las Sendas</h3>
              </Link>
            </div>

            <div class="Nav-dropdown-menu-container">
              <div class="Nav-dropdown-display">
                <button class="Nav-dropdown-button">
                  <p id="bar-1" className="Nav-menu-bar"></p>
                  <p id="bar-2" className="Nav-menu-bar"></p>
                  <p id="bar-3" className="Nav-menu-bar"></p>
                </button>
                <div class="Nav-dropdown-content">
                  <Link to="/services"><p>Our Services</p></Link>
                  <Link to="/tracking"><p>Track Package</p></Link>
                  <Link to="/contact"><p>Contact Us</p></Link>
                </div>
              </div>
            </div>

            {/* <div className="Nav-dropdown-container">
              <button onclick="myFunction()" class="Nav-drop-button">
                <div className="Nav-drop-menu">
                  <p id="bar-1">1</p>
                  <p id="bar-2">2</p>
                  <p id="bar-3">3</p>
                </div>
              </button>
            </div> */}

          </div>
            <div className="Nav-dropdown-backdrop"></div>
          </div>

         </MediaQuery>

         <MediaQuery minWidth={500} maxWidth={1200}>
           <div className="Nav-container">

             <div className="Nav-flexbox-left">
               <Link to="/" className="Nav-logo">
                 <h1 className="Nav-logo-1">Power Postal</h1>
                 <h3 className="Nav-logo-2">at Las Sendas</h3>
               </Link>
             </div>

             <div className="Nav-flexbox-center">
             </div>

             <div className="Nav-flexbox-right-full">
               <div id="Nav-services">
                 <Link className="Nav-button" to="/services"><p>Our Services</p></Link>
               </div>

               <div id="Nav-tracking">
                 <Link className="Nav-button" to="/tracking"><p>Track Package</p></Link>
               </div>

               <div id="Nav-contact">
                 <Link className="Nav-button" to="/contact"><p>Contact Us</p></Link>
               </div>
               </div>

               <div className="Nav-backdrop">
             </div>
           </div>
         </MediaQuery>
        </div>
    );
  }
}

export default Navigation;
