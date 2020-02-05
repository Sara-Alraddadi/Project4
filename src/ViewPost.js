import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ViewPost.css';
import {Button} from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';


class ViewPost extends Component{
    render(){
        return(
            <div>
               
                <div className="content1">
                    <h2 id = "header">Title</h2> 
                    <hr/><br/>
                    
                    <p className="subheaders">Event Type:</p> 
                    <p className ="text"> Wedding</p>
                    
                    <hr className="style14"/><br/>
                    <p className="subheaders">Deadline:</p>
                    <p className ="text">13 / 03/ 2020</p>
                    
                    <hr className="style14"></hr><br/>
                    <p className="subheaders">Price:</p>
                    <p className ="text"> 30<b>$</b></p>
                    
                    <hr className="style14"/>
                    <br/>
                    <p className="subheaders">Description:</p>
                    <p className ="text">Changing the link color when the visitor hovers over a link helps indicate what is clickable on your web page or blog. To make your pages link color change implement the below code into your portion of your HTML or in your CSS code for your web page.Changing the link color when the visitor hovers over a link helps indicate what is clickable on your web page or blog. To make your pages link color change implement the below code into your portion of your HTML or in your CSS code for your web page.</p>

                    <hr className="style14"></hr><br/>
                    <p className="subheaders">Location:</p>
                    <p className ="text">Jeddah</p>

                    {/* <button className="m1 btn-black">Accept Job</button> */}
                    <div className="text-center">
                        <MDBBtn className="btn-black mb-4">Accept Job</MDBBtn>
                     </div>


            
                </div>

               

            </div>
        )
    }
}

export default ViewPost;