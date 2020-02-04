import React, {Component} from  'react';
import PhotographerProfile from './PhotographerProfile.js';
import './App.css';
import Signup from './SignUp';
import PostForm from './PostForm';
import OfferForm from './OfferForm';
import PostUser from './PostUser';
import OfferPhoto from './OfferPhoto';
import Login from './Login';
import PostAndOffers from './PostAndOffers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter  , Route} from 'react-router-dom';

class App extends Component {
  render(){
 return (
    <div>
   {/* <Signup/> */}
   <PostForm/> 
   {/* <OfferForm/> */}
   {/* <PostUser/> */}
  {/* <OfferPhoto/> */}
    </div>
 )}
}  
  export default App;
//   <BrowserRouter >

//  <Route  path = "/home" render = { ()=> <h1> this is home page</h1>} />
//   <Route  path = "/PhotographerProfile" render = { ()=> <PhotographerProfile/>} />
//   <Route  path = "/Login" render = { ()=> <Login/>} />
//   <Route  path = "/Signup" render = { ()=> <Signup/> } />
//   <Route  path = "/PostAndOffers" render = { ()=>  <PostAndOffers/> } />
//   <Route  path = "/PostForm" render = { ()=> <PostForm/> } />
//   <Route  path = "/OfferForm" render = { ()=> <OfferForm/> } />
//   <Route  path = "/PostUser" render = { ()=>  <PostUser/> } />
//   <Route  path = "/OfferPhoto" render = { ()=>  <OfferPhoto/> } />

//   <BrowserRouter/> 
