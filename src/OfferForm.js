import React, {Component} from 'react';
import {InputGroup,InputGroupAddon, Button, Form, FormGroup, Label, Input, FormText, } from 'reactstrap';


class OfferForm extends Component{
    render () {
      return (
<div>
<Form>

    
    <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Price" min={0} max={100} type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
       
    <FormGroup>
        <Label for="exampleText">Details</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Photographer Name</Label>
        <Input type="name" name="name" id="examplePassword" placeholder="name" />
      </FormGroup>
      


      <FormGroup>
        <Label for="exampleText">Date</Label>
        <Input type="date" name="date" id="exampleText" />
      </FormGroup>


      <Button>Send Offer</Button>
    </Form>
</div>

      )
    
    }}

    export default OfferForm;
