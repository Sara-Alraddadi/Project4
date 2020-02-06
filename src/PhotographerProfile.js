import "./photographerProfile.css";
import React, { Component } from "react";
import axios from 'axios'
class PhotographerProfile extends Component{
  // axios.get(user)
    //decode for the user token =>user id
  //send request
  // from response return name and map on images 
  state ={

  }

  componentDidMount(){

    axios.get('http://localhost:5000/user/'+this.props.match.params.id)
    .then(res => this.setState({user : res.data}))
    .catch(err => console.log(err))
  }

  

  render(){
console.log(this.state)
    return(
      
<div className="content">

  <p>{this.state.user &&  this.state.user.first_name + " "   + this.state.user.last_name}</p>
  

  <div className="info">Also, I'd be honored if you hit the "Share" button at the bottom right corner too and helped spread the word. Our dream is for this post to help as many designers as we possibly can. Your help in spreading this to more designers is greatly, and warmly, appreciated.</div>
  <div>
  {/* <hr className="style14 clearfix"/><br/> */}
  </div>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="https://images.unsplash.com/photo-1580596090683-f4711170117b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80">
      <img src="https://images.unsplash.com/photo-1580596090683-f4711170117b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Flower" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="https://images.unsplash.com/photo-1580564182126-8a51f40e4b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80">
      <img src="https://images.unsplash.com/photo-1580564182126-8a51f40e4b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Japan" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="https://images.unsplash.com/photo-1580616591021-058e7b6c3628?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80">
      <img src="https://images.unsplash.com/photo-1580616591021-058e7b6c3628?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" alt="Slot Canyon" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="https://images.unsplash.com/photo-1580624215429-bd81a5aebd28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80">
      <img src="https://images.unsplash.com/photo-1580624215429-bd81a5aebd28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Mountains" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="https://images.unsplash.com/photo-1580624215429-bd81a5aebd28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80">
      <img src="https://images.unsplash.com/photo-1580624215429-bd81a5aebd28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Mountains" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>
</div>

  <div className="clearfix"></div>
</div>
    )}

}

export default PhotographerProfile;


