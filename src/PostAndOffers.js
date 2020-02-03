import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './PostAndOffers.css';


class PostAndOffers extends Component{
    render(){
        return(
            <div>
               
                <div className="content">
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
            
                </div>

                <div className="card">
                    <div className="card-header">
                    Offer
                    </div>
                        <div className="card-body">
                        <h5 className="card-title">Photographer Name</h5>
                        <p className="card-text"><span id = "thickfont">Delevired On:</span> 12/ 03/ 2020</p>
                        <p className="card-text"><span id = "thickfont">Price:</span> 50 <b> $</b></p>
                        <p className="card-text"><span id = "thickfont">Details:</span> With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="button instagram"><span className="gradient"></span>Accept Offer</a>
                    </div>
                </div> 

            </div>
        )
    }
}

export default PostAndOffers;