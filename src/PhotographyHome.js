import React, {Component} from 'react';
import { Button, Card,ListGroup} from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';
import './PhotographyHome.css';

class PhotographyHome extends Component{
  render () {
    return (    
      
    <div>
        <main className="cover-page" id="headerbg">
          <section className="wrapped-page">
            <div className="item-center">
              <h1>Today's Moments are Tomorrow's Memories.</h1>
               <Button variant="dark" href="#about">Know More!</Button>
            </div>
          </section>
        </main>

       <Card style={{ width: '18rem' }}>
				<Card.Header>Title</Card.Header>
				<ListGroup>
				<ListGroup.Item>Deadline</ListGroup.Item>
					<ListGroup.Item>Price</ListGroup.Item>
					<ListGroup.Item>Location</ListGroup.Item>
				  <MDBBtn className="btn-black mb-4">View</MDBBtn>
				</ListGroup>
			</Card>
      
</div>

              
         )
        }
    }
    
export default PhotographyHome;