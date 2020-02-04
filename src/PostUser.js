import React, { Component } from 'react';
import {Card,ListGroup, Button } from 'react-bootstrap';

class PostUser extends Component {
	render() {
        return (
<div>
			<Card style={{ width: '18rem' }}>
				<Card.Header>My Posts</Card.Header>
				<ListGroup>
					<ListGroup.Item>ُTitle</ListGroup.Item>
					<ListGroup.Item>Deadline</ListGroup.Item>
					<ListGroup.Item>Status</ListGroup.Item>
					<Button>View</Button>
				</ListGroup>
			</Card>
            </div>
		)
	}
}

export default PostUser;