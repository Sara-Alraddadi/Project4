import React from 'react';
import logo from './logo.svg';
import PostAndOffers from './PostAndOffers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
// import logo from './logo.svg';
import HomePage from './UserHome';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';
import PhotographyHome from './PhotographyHome';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'; 

function App() {
  return (
    <div>
      {/* <Nav/> */}
      <HomePage/>
      <PhotographyHome/>
      {/* <PostAndOffers/>
      // <Login/> */}
      <About/>
      <Footer/>
    </div>
  );
}
 
       
  export default App ;
