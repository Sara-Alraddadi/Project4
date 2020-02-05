import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ViewPost from './ViewPost.js';
import PostUser from './PostUser.js';
import CardUser from './cardForPhotographer/CardUser.js';
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';


class Home extends Component {

    state = {
        allUser: []
    }
    componentDidMount() {

        axios.get('http://localhost:5000/user/all')
            .then(res => this.setState({ allUser: res.data }))
            .catch(err => console.log(err))

    }


    render() {
        let user = this.state.allUser.map((ele, i) => {

            if (i % 3 == 0) {

                console.log(i)
                return <>
                    <Col>
                        <CardUser user={ele}  />
                    </Col>
                </>

            }

            return <Col>
                <CardUser user={ele}  />
            </Col>


        })

       


        return (
            <div>
                test
                {/* <ViewPost /> */}
                {/* <PostUser /> */}
                <Container fluid>
                    <Row>
                        {user}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;