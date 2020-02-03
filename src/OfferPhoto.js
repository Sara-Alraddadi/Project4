import React, { Component } from 'react';
import {Card,ListGroup,Button } from 'react-bootstrap';
import {InputGroup,InputGroupAddon, Form, FormGroup, Label, Input, FormText, } from 'reactstrap';

class OfferPhoto extends Component {
	render() {
        return (
<div>
			<Card style={{ width: '18rem' }}>
				<Card.Header>My Posts</Card.Header>
				<div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" />
                </div>
                <FormGroup>
        <Label for="exampleText">Details</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Price" min={0} max={100} type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
    <FormGroup>
        <Label for="exampleText">Statuse</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

    <FormGroup>
        <Label for="exampleText">Date</Label>
        <Input type="date" name="date" id="exampleText"  />
      </FormGroup>
     


			</Card>
            </div>
		)
	}
}

export default OfferPhoto;