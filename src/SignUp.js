import React, {Component} from 'react';
import axios from "axios";
import { Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
        //  <form>
             <div>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input onChange = {this.onChangeHandler} name= "first_name" type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input onChange = {this.onChangeHandler} name= "last_name" type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input onChange = {this.onChangeHandler} name= "email" type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange = {this.onChangeHandler} name= "password" type="password" className="form-control" placeholder="Enter password" />
                </div>

            <div className="form-group">
                <label className="mr-3">   
                <input  onChange = {this.onChangeHandler} name= "userType" type="radio" value="user"  />
               User
                </label>
                <label>   
                <input onChange = {this.onChangeHandler} name= "userType" type="radio" value="photographer"  />
                Photographer
                </label>
             </div>

                
                <button onClick={this.onSubmitHandler} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
                </div>
         //    </form>
            
    )
}}
export default Signup;