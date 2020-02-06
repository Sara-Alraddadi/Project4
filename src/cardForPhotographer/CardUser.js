import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { MDBBtn } from 'mdbreact'
import {withRouter} from 'react-router-dom'
import './cardUser.css'

class cardUser extends Component {


    render() {

        const { first_name, last_name, email  , _id} = this.props.user
        return (



            <Card className='mb-4 mt-4 top' style={{ width: '18rem'}}>
                <Card.Header>Photographer Info</Card.Header>
                <ListGroup>
                    <ListGroup.Item>{first_name}</ListGroup.Item>
                    <ListGroup.Item>{last_name}</ListGroup.Item>
                    <ListGroup.Item>{email}</ListGroup.Item>
                    <MDBBtn  onClick={() => this.props.history.push(`/PhotographerProfile/${_id}`)} className="btn-black mb-4">View</MDBBtn>
                </ListGroup>
            </Card>



        )
    }
}


export default withRouter(cardUser)
