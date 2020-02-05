import React, {Component} from 'react';
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './Login.css';

class Login extends Component{
  state = {


  }

  onChangeHandler = (e) => { 
    console.log("yee")
    this.setState({
        [e.target.name]: e.target.value //to set the users name => input value(email,password)
    })
}

  onSubmitHandler = () => {

    axios.post('http://localhost:5000/user/Login', this.state)//state = obj
    .then(res => {
        console.log(res)
        if (res.data.msg == "Logged in succefully"){
          localStorage.setItem('token' , res.data.token)
            this.props.history.push('/')
        }
        
    })
    .catch( err => console.log(err))

}
render(){
  console.log(this.state)

  return ( 
    <MDBContainer className="container">
      <MDBRow>
        <MDBCol>
          <form>
            <p className="h5 text-center mb-4 mt-4">Sign in</p>
            <div className="grey-text">
              <MDBInput as ={"inpot"}
              onChange = {this.onChangeHandler} name= "email"
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput as ={"inpot"}
              onChange = {this.onChangeHandler} name= "password"
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.onSubmitHandler} className="btn-black mb-4">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
}
export default Login;