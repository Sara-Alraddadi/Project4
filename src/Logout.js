import React, {Component} from 'react';
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Redirect } from 'react-router-dom';

class Logout extends Component{
    state = {
        navigate: false
    }
        logout = () => {
            localStorage.clear('token')
            this.props.history.push('/')
        }
        render () {
            const { navigate } = this.state;
            if(navigate){
                return <Redirect to = '/' push={true}/>
            }
        return (
            <div>
                <div className="text-center">
                    <MDBBtn onClick={this.logout} className="btn-black mb-4">Logout</MDBBtn>
                </div>
            </div>
        )
    }
}
export default Logout;