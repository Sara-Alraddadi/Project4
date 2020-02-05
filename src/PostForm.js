import React, {Component} from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode'
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class PostForm extends Component{

  state = {
    id : jwt_decode(localStorage.token).user._id

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
    console.log(this.state)
    return (
<Form>
      <FormGroup>
        <Label for="examplePassword">Title</Label>
        <Input onChange = {this.onChangeHandler} name= "title" type="textarea"  id="examplePassword"  />
      </FormGroup>



      <FormGroup>
     
        <Label for="exampleSelect">Event Type</Label>
        <Input onChange = {this.onChangeHandler} name="eventType" type="select" id="exampleSelect">
        
          <option>Birthday Party </option>
          <option>Widding</option>
          <option>Baby Shower</option>
          
        </Input>
      </FormGroup>

      
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input onChange = {this.onChangeHandler} type="textarea" name="description" id="exampleText" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Location</Label>
        <Input onChange = {this.onChangeHandler} type="textarea" name="location" id="exampleText" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Deadline</Label>
        <Input onChange = {this.onChangeHandler} type="date" name="date" id="exampleText" />
      </FormGroup>
  
      <Button onClick={this.onSubmitHandler}>Add Post</Button>
    </Form>

)
}}
export default PostForm;