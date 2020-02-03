import React from "react";
import PhotographerProfile from './PhotographerProfile.js';
import PostAndOffers from './PostAndOffers';
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

function App() {
  return (
    <div>
      <PhotographerProfile/>
      <PostAndOffers/>
      <Login/>
    </div>
  );
}
 
       
  export default App ;
