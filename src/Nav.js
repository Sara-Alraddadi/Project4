import React, {Component} from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './nav.css';

class Nav extends Component{
  render () {
    return (
       <div>
          <nav sticky="top" className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Photography</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/PhotographerProfile">PhotographerProfile</a>
              <a className="nav-item nav-link" href="/PostAndOffers">PostAndOffers</a>
              <a className="nav-item nav-link" href="/PostForm">PostForm</a>
              <a className="nav-item nav-link" href="/LoOfferFormgin">LoOfferFormgin</a>
              <a className="nav-item nav-link" href="/PostUser">PostUser</a>
              <a className="nav-item nav-link" href="/OfferPhoto">OfferPhoto</a>
              <a className="nav-item nav-link" href="/Login">Login</a>
              <a className="nav-item nav-link" href="/Signup">Signup</a>
            </div>
            </div>
        </nav>
  
       </div>
        
      )}}
  
  export default Nav;