import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { MDBContainer,MDBInputGroup,MDBDatePicker,MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './PostForm.css';
class PostForm extends Component{
  render () {
    return (

<MDBContainer className="container">
  <MDBRow>
    <MDBCol md="6">
      <form>
      <p className="h5 text-center mb-4 mt-4"></p>
            <div className="grey-text">
            <MDBInput label="Title" icon="tag" group type="text" validate error="wrong" success="right" />
            <MDBInputGroup
          containerClassName="mb-3"
          prepend="Event Type"
          inputs={
            <select className="browser-default custom-select">
              <option value="0">Choose...</option>
              <option value="1">Birthday Party</option>
              <option value="2">Widding</option>
              <option value="3">Baby Shower</option>
            </select>
          }
        />
            <MDBInput type="textarea" rows="2" label="Description" icon="pencil-alt" />
            <MDBInputGroup
          containerClassName="mb-3"
          prepend="Location"
          inputs={
            <select className="browser-default custom-select">
              <option value="0">Choose...</option>
              <option value="1">Jeddah</option>
              <option value="2">Riyadh</option>
              <option value="3">Dammam</option>
            </select>
          }
        />
            
            <MDBInput type="date" label="Deadline" icon=""/>
            <div>
        {/* <MDBDatePicker getValue={this.getPickerValue} /> */}
      </div>
        </div>

        {/* <MDBInput type="date" rows="2" label="date" defaultValue="2017-05-24" /> */}
           
           
            <div className="text-center">
              <MDBBtn className="btn-black mb-4">Add Post</MDBBtn>

              
            </div>
           
                </form>
     
    </MDBCol>
  </MDBRow>
</MDBContainer>

)
}}
export default PostForm;