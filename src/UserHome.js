import React, {Component} from 'react';
import {CardGroup, Card, Button} from 'react-bootstrap';
import './UserHome.css';

class UserHome extends Component{
    
  render () {
      
    return (
<div> 
    <div>
        <main className="cover-page" id="headerbg">
          <section className="wrapped-page">
            <div className="item-center">
              <h1>Taking an Image, Freezing a Moment,</h1>
              <br></br>
              <h3>Reveals How Rich Reality Truly Is </h3>
               <Button variant="dark" href="#about">Know More!</Button>
            </div>
          </section>
        </main>
      </div>
      
<CardGroup>
  <Card>
    <Card.Img variant="top" src="/first.jpg/100px160" />
    <Card.Body>
      <Card.Title>Photographer Information</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <Button variant="primary">View</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Photographer Information</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <Button variant="primary">Go somewhere</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    
    <Card.Body>
      <Card.Title>Photographer Information</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <Button variant="primary">Go somewhere</Button>
    </Card.Footer>
  </Card>
</CardGroup>

 </div>
          
        )
      }
    }


export default UserHome;