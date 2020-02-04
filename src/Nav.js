import React, {Component} from 'react';
import './nav.css';

class Nav extends Component{
  render () {
    return (
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