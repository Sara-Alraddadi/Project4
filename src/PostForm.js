import React, {Component} from 'react';
import { MDBContainer,MDBInputGroup, MDBDatePicker,  MDBRow, MDBCol, MDBInput, MDBBtn }  from 'mdbreact';
import './PostForm.css';
class PostForm extends Component{
  getPickerValue = (value) => {
    console.log(value);
  }
  render () {
    return (
<MDBContainer className="container">
  <MDBRow>
    <MDBCol>
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
            <MDBInput type="textarea" rows="1" label="Description" icon="pencil-alt" />
            <MDBInputGroup
          containerClassName="mb-3"
          label="Location"
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
            <label className="mb-0"> Deadline </label>
            <MDBInput type="date" icon=""/>
            {/* <MDBDatePicker getValue={this.getPickerValue} /> */}
            <MDBInputGroup containerClassName="mb-3" label="Price" prepend="$" append=".00" />
        </div>
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
