import React, { Component } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
class PostUser extends Component {
	state = {
		cards: []
	}

	componentDidMount() {
		var id = jwt_decode(localStorage.token).user._id
		console.log(id)
		axios.get(`http://localhost:5000/post/allPost/${id}`)

			.then(res => this.setState({ cards: res.data.posts }))

	}

	onSubmitHandler = () => {

		axios.post('http://localhost:5000/post', this.state)//state = obj
		.then(res => {
			console.log(res.data.msg)
			if (res.data.msg == ""){
  
				this.props.history.push('/PostAndOffers')
			}
			
		})
		.catch( err => console.log(err))
  
	}

	render() {
		// allPost
		console.log(this.state)
		var cards = this.state.cards.map(ele => {


			return <Card style={{ width: '18rem' }}>
				<Card.Header>My Post</Card.Header>
				<ListGroup>
					<ListGroup.Item>Title: {ele.title}</ListGroup.Item>
					<ListGroup.Item>DeadLine: {ele.deadline}</ListGroup.Item>
					<ListGroup.Item>Price: {ele.price}</ListGroup.Item>
					<Button onClick={this.onSubmitHandler}>View</Button>
				</ListGroup>
			</Card>
		})
		return (

			<div style ={{display : "flex" , flexWrap : 'wrap'}}>
				{cards}
			</div>
		)
	}
}

export default PostUser;