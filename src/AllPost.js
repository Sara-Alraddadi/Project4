import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { MDBBtn } from 'mdbreact'
import {withRouter} from 'react-router-dom'

class AllPost extends Component{
    // render(){
    //     return(
    //         <div>
    //             <div>
    //                 {this.props.post.title}
    //             </div>
    //     <div>{this}</div>
    //         </div>
    //     )
    // }
    render() {

        const { title, eventType, description  ,location,deadline,price,offers, _id} = this.props.post
        return (



            <Card style={{ width: '18rem' }}>
                <Card.Header>User Info</Card.Header>
                <ListGroup>
                    <ListGroup.Item>{title}</ListGroup.Item>
                    <ListGroup.Item>{eventType}</ListGroup.Item>
                    <ListGroup.Item>{description}</ListGroup.Item>
                    <ListGroup.Item>{location}</ListGroup.Item>
                    <ListGroup.Item>{deadline}</ListGroup.Item>
                    <ListGroup.Item>{price}</ListGroup.Item>
                    <ListGroup.Item>{offers}</ListGroup.Item>
                    <MDBBtn  onClick={() => this.props.history.push(`/PhotographerProfile/${_id}`)} className="btn-black mb-4">View</MDBBtn>
                </ListGroup>
            </Card>



        )
    }

}
export default AllPost