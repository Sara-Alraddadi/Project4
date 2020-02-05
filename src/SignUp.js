import React, {Component} from 'react';
import axios from "axios";
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup } from 'mdbreact';


class Signup extends Component{

    state = {


    }

    onChangeHandler = (e) => { 
        this.setState({
            [e.target.name]: e.target.value //to set the users name => input value(first/last name, email,password, userType)
        })
    }

    onSubmitHandler = () => {

        axios.post('http://localhost:5000/user/register', this.state)//state = obj
        .then(res => {
            console.log(res.data.msg)
            if (res.data.msg == "user created"){

                this.props.history.push('/Login')
            }
            
        })
        .catch( err => console.log(err))

    }


  render () {
      console.log(this.state);
    return (


         <MDBContainer>
         <MDBRow>
           <MDBCol>
             <form>
               <p className="h5 text-center mb-4 mt-4">Sing Up</p>
               <div className="grey-text">
                 <MDBInput onChange = {this.onChangeHandler} name= "first_name" label="Your first name" icon="user" group type="text" validate error="wrong"
                   success="right" />

                   <MDBInput onChange = {this.onChangeHandler} name= "last_name" label="Your Last name" icon="user" group type="text" validate error="wrong"
                   success="right" />

                 <MDBInput onChange = {this.onChangeHandler} name= "email" label="Your email" icon="envelope" group type="email" validate error="wrong"
                   success="right" />

                 <MDBInput onChange = {this.onChangeHandler} name= "password" label="Your password" icon="lock" group type="password" validate />

                 <p className="mb-0">Register As:</p>

                   <div className="radio">
                     <label>
                       <input onChange = {this.onChangeHandler} name= "userType" type="radio" value="User" className="mr-2" />
                       User
                     </label>
                   </div>
                   <div className="radio">
                     <label>
                       <input onChange = {this.onChangeHandler} name= "userType" type="radio" value="Photographer" className="mr-2" />
                       Photographer
                     </label>
                   </div>

           <MDBInputGroup
             prepend="Upload"
             inputs={
               <div className="custom-file">
                 <input type="file" className="custom-file-input" id="inputGroupFile01"/>

                 <label className="custom-file-label" htmlFor="inputGroupFile01">
                   Choose file
                 </label>
               </div>
             }
             containerClassName="mb-3"
           />
               </div>
                <MDBInput onChange = {this.onChangeHandler} name= "phtographerInfo" type="textarea" rows="1" label="Description" icon="pencil-alt" />
               <div className="text-center">
                 <MDBBtn onClick={this.onSubmitHandler} className="btn-black mb-4">Register</MDBBtn>
                 Already registered <a href="#">sign in?</a>
               </div>
             </form>
           </MDBCol>
         </MDBRow>
       </MDBContainer>

            
    )
}}
export default Signup;

