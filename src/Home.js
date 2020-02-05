import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import sample from './headerv.mp4';
import './home.css';
import {Button} from 'react-bootstrap';
import {  MDBBtn } from 'mdbreact';



class Home extends Component{
    render(){
        return(
            <div>
            <video variant="dark" className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
            </video>
            <h1 id ="quoat">Taking an image, freezing a moment,<br/><br/>reveals how rich reality truly is</h1>
            <Button id ="homebtn" variant="dark" href="#about">Know More!</Button>
            </div>
           
        )
    }
}

export default Home;