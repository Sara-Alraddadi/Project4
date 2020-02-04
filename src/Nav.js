import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 

class Nav extends Component {
  render () {
    return (
 
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">HomePage</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#About">About Us</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger"  ><Link to="/"> Home</Link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </Router>
   
    )}}

export default Nav;