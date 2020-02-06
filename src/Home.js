import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ViewPost from './ViewPost.js';
import PostUser from './PostUser.js';
import CardUser from './cardForPhotographer/CardUser.js';
import AllPost from './AllPost';
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import sample from './headerv.mp4';
import './home.css';
import {Button} from 'react-bootstrap';
import jwt_decode from 'jwt-decode'
import About from './About';
import { Redirect, withRouter } from 'react-router-dom';
import {  MDBBtn } from 'mdbreact';


class Home extends Component {

    state = {
        allUser: [],
        allPost: []
    }
    componentDidMount() {
       
        axios.get('http://localhost:5000/user/all')
            .then(res => this.setState({ allUser: res.data }))
            .catch(err => console.log(err))
        axios.get('http://localhost:5000/post/allUserPost')
            .then(res => this.setState({ allPost: res.data }))
            .catch(err => console.log(err))
        
      
            

    }


    render() {
        console.log(localStorage.token)
        if(localStorage.token!== undefined){
       if(jwt_decode(localStorage.token).user.userType==="photographer"){
            let post = this.state.allPost.map((ele, i) => {

                if (i % 3 === 0) {
    
                    console.log(i)
                    return <>
                        
                            <AllPost post={ele}  />
                        
                    </>
    
                }
    
                
    
            })
            return(
                <div>
                    {post}
                </div>
            )
        }
    }

       

        // let user = this.state.allUser.map((ele, i) => {

        //     if (i % 3 === 0) {

        //         console.log(i)
        //         return <>
        //             <Col>
        //                 <CardUser user={ele}  />
        //             </Col>
        //         </>

        //     }

        //     return <Col>
        //         <CardUser user={ele}  />
        //     </Col>


        // })
        // if(jwt_decode(localStorage.token).user.userType==="User"){
            let user = this.state.allUser.map((ele, i) => {

          if (i % 3 === 0) {

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
    //   }

       


        return (
            <div >

            <div>
            <video variant="dark" className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
            </video>
           
            <h1 id ="quoat">Taking an image, freezing a moment,<br/><br/>reveals how rich reality truly is</h1>
            <Button id ="homebtn" variant="dark" href="#about">Know More!</Button>

            </div>

            <div style ={{marginTop : "0px"}}>
               
                {/* <ViewPost /> */}
                {/* <PostUser /> */}
                <Container fluid>
                    <Row>
                        {user}
                    </Row>
                </Container>
            </div>
            <About/>
            </div>
        )
    }

}
export default Home;