import React, {Component} from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode'
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup } from 'mdbreact';

class PostForm extends Component{

  state = {
    id : jwt_decode(localStorage.token).user._id,
    notSignedIn:""

  }

  onChangeHandler = (e) => { 
    console.log(this.state.id)
    
      this.setState({
          [e.target.name]: e.target.value //to set the users name => input value(title, EventType,Description, Location,DeadLine)
      })
    
   
  }

  onSubmitHandler = () => {
    

      axios.post('http://localhost:5000/post/createpost', this.state)//state = obj
      .then(res => {
          console.log(res.data.msg)
          if (res.data.msg == "post created"){

              this.props.history.push('/PostUser')
          }
          
      })
      .catch( err => console.log(err))
    

  }
  render () {
    console.log(this.state.id)
    
   
    
return(


<MDBContainer className="container">
<MDBRow>
  <MDBCol>
    <form>
    <p className="h5 text-center mb-4 mt-4">Creat Post</p>
      <div className="grey-text">
          <MDBInput onChange = {this.onChangeHandler} name= "title" label="Title" icon="tag" group type="text" validate error="wrong" success="right" />

          <MDBInputGroup onChange = {this.onChangeHandler} name="eventType"
        containerClassName="mb-3"
        prepend="Event Type"
        inputs={
          <select className="browser-default custom-select">
            <option value="0">Choose...</option>
            <option value="1">Birthday Party</option>
            <option value="2">Widding</option>
            <option value="3">Baby Shower</option>
          </select>
        }
      />
          <MDBInput onChange = {this.onChangeHandler} name="description" type="textarea" rows="1" label="Description" icon="pencil-alt" />
          
          <MDBInputGroup onChange = {this.onChangeHandler} name="location"
        containerClassName="mb-3"
        label="Location"
        prepend="Location"
        inputs={
          <select className="browser-default custom-select">
            <option value="0">Choose...</option>
            <option value="1">Jeddah</option>
            <option value="2">Riyadh</option>
            <option value="3">Dammam</option>
          </select>
        }
      />
          <label className="mb-0"> Deadline </label>
          <MDBInput onChange = {this.onChangeHandler} name="deadline" type="date" icon=""/>
          {/* <MDBDatePicker getValue={this.getPickerValue} /> */}

          <MDBInputGroup onChange = {this.onChangeHandler} name="price" containerClassName="mb-3" label="Price" prepend="$" append=".00" />
      </div>
          <div className="text-center">
            <MDBBtn onClick={this.onSubmitHandler} className="btn-black mb-4">Add Post</MDBBtn>
          </div>
    </form>
  </MDBCol>
</MDBRow>
</MDBContainer>

)


}}
export default PostForm;

