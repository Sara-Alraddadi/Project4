import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './nav.css';
import axios from "axios";
// import Logout from './Logout';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Redirect, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode'


class Nav extends Component {
  state = {
    navigate: false,
    login: true
  }
  logout = () => {
    localStorage.clear('token')
    this.props.history.push('/')
    this.setState({
      login: true
    })
  }
  componentDidMount() {
    if (localStorage.token) {

      this.setState({
        login: false
      })

    }
  }
  render() {
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to='/' push={true} />
    }
    return (
      <div>
        <nav sticky="top" className="navbar navbar-expand-lg navbar-dark ">
          <a className="navbar-brand" href="#">Photography</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>

              {this.state.login ? <> <a className="nav-item nav-link" href="/Login">Login</a>
                <a className="nav-item nav-link" href="/Signup">Signup</a> </> : <>
                  {localStorage.token && (jwt_decode(localStorage.token).user.userType == "photographer" && <a className="nav-item nav-link" href={"/PhotographerProfile/" + jwt_decode(localStorage.token).user._id}>PhotographerProfile</a> )}
                  <a className="nav-item nav-link" href={"/PostAndOffers"}>PostAndOffers</a>
                  <a className="nav-item nav-link" href="/PostForm">PostForm</a>
                  <a className="nav-item nav-link" href="/LoOfferFormgin">Create Offer</a>
                  <a className="nav-item nav-link" href="/PostUser">PostUser</a>
                  <a className="nav-item nav-link" href="/OfferPhoto">OfferPhoto</a>
                  <a onClick={this.logout} className="nav-item nav-link">Logout</a> </>}
            </div>
          </div>
        </nav>
      </div>

    )
  }
}

export default withRouter(Nav);