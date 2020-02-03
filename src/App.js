import React, {Component} from  'react';
import PhotographerProfile from './PhotographerProfile.js';
import './App.css';
import Signup from './SignUp';
import PostForm from './PostForm';
import OfferForm from './OfferForm';
import PostUser from './PostUser';
import OfferPhoto from './OfferPhoto';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
 return (
<div>
 <PhotographerProfile/>
 <Signup/>  
<PostForm/>
<OfferForm/> 
 <PostUser/> 
<OfferPhoto/>

</div>
 )}
       }  
  export default App ;
