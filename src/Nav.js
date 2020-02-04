import React, {Component} from 'react';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; 
=======
import './nav.css';
>>>>>>> e333df0f6541f197db250aa0325cde9f5fede4f2

class Nav extends Component {
  render () {
    return (
<<<<<<< HEAD
 
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
=======
       <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Photography</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/PhotographerProfile">PhotographerProfile</a>
              <a class="nav-item nav-link" href="/PostAndOffers">PostAndOffers</a>
              <a class="nav-item nav-link" href="/PostForm">PostForm</a>
              <a class="nav-item nav-link" href="/LoOfferFormgin">LoOfferFormgin</a>
              <a class="nav-item nav-link" href="/PostUser">PostUser</a>
              <a class="nav-item nav-link" href="/OfferPhoto">OfferPhoto</a>
              <a class="nav-item nav-link" href="/Login">Login</a>
              <a class="nav-item nav-link" href="/Signup">Signup</a>
            </div>
            </div>
        </nav>
  
       </div>
        
      )}}
  
  export default Nav;
>>>>>>> e333df0f6541f197db250aa0325cde9f5fede4f2
