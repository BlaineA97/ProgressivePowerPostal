import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Body from './components/Body';
import Services from './components/Pages/Services';
import PackageLookup from './components/Pages/PackageLookup';
import Contact from './components/Pages/Contact';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/services" component={Services} />
            <Route path="/package-lookup" component={PackageLookup} />
            <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
