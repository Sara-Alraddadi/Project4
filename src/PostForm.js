import React, {Component} from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class PostForm extends Component{
  render () {
    return (
<Form>
      <FormGroup>
        <Label for="examplePassword">Title</Label>
        <Input type="textarea" name="password" id="examplePassword"  />
      </FormGroup>



      <FormGroup>
     
        <Label for="exampleSelect">Event Type</Label>
        <Input type="select" name="select" id="exampleSelect">
        
          <option>Birthday Party </option>
          <option>Widding</option>
          <option>Baby Shower</option>
          
        </Input>
      </FormGroup>

      
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Location</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Deadline</Label>
        <Input type="date" name="date" id="exampleText" />
      </FormGroup>
  
      <Button>Add Post</Button>
    </Form>

)
}}
export default PostForm;