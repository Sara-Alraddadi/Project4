import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import sample from './headerv.mp4';
import './home.css';
import {Button} from 'react-bootstrap';



class Home extends Component{
    render(){
        return(
            <div>

            <video variant="dark" className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
            </video>
            <div class="content3">
            
            
            </div>
           
            <h1 id ="quoat">Taking an image, freezing a moment,<br/><br/>reveals how rich reality truly is</h1>
           
            </div>
           
        )
    }
}

export default Home;