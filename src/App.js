import React, {Component} from 'react';
import PhotographerProfile from './PhotographerProfile.js';
import './App.css';
import Signup from './SignUp';
import PostForm from './PostForm';
import OfferForm from './OfferForm';
import PostUser from './PostUser';
import OfferPhoto from './OfferPhoto';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';
import PostAndOffers from './PostAndOffers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import ReactDOM from "react-dom";
// import { BrowserRouter, Route} from 'react-router-dom';


class App extends Component {

  componentDidMount(){ 

    // var userInfo = jwt_decode(localStorage.token)
    // console.log(userInfo)
  }
  render(){


 return ( 
      <div>
      <Nav></Nav>

    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/PhotographerProfile/:id" render={(props)=> <PhotographerProfile {...props} />} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/PostAndOffers" component={PostAndOffers} />
        <Route path="/PostForm" component={PostForm} />
        <Route path="/LoOfferFormgin" component={OfferForm} />
        <Route path="/PostUser" component={PostUser} />
        <Route path="/OfferPhoto" component={OfferPhoto} />
      </div>
     
    </Router>
    </div>
 )}
}  
  export default App;
  
  
