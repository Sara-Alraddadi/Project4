import React, {Component} from 'react';
import {CardGroup, Card} from 'react-bootstrap';

class PhotographyHome extends Component{
  render () {
    return (
       

<div> 

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
    </Card.Footer>
  </Card>
</CardGroup>

{/*   
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck> */}
</div>
    )
}}
    


export default PhotographyHome;
/* <div className="container">
    <h2>Bootstrap Cards Varation: </h2>
    <h3>Same Aspect Ratio ―</h3>
	<div className="row mb-5">
		<div className="col-md-4">
			<div className="card">
				<img src="https://source.unsplash.com/random/1920x1080" className="card-img-top" alt="..."/>
					<div className="card-body">
					    <h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-sm btn-primary">Go somewhere</a>
					</div>
            </div>
		</div>
	</div>
	<div className="col-md-4">
		<div className="card">
			<img src="https://source.unsplash.com/random/1920x1080" className="card-img-top" alt="..."/>
				<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-sm btn-primary">Go somewhere</a>
					
				</div>
		</div>
		<div className="col-md-4">
			<div className="card">
				<img src="https://source.unsplash.com/random/1920x1080" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-sm btn-primary">Go somewhere</a>
					</div>
			</div>
		</div>
	</div>
        
</div> */