
import React, {Component} from 'react';
import { MDBContainer,MDBInputGroup,InputGroupAddon,MDBDatePicker,InputGroup,MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
class OfferForm extends Component{
    render () {
      return (
        <MDBContainer className="container">
  <MDBRow>
    <MDBCol>
      <form>
      <p className="h5 text-center mb-4 mt-4"></p>
        <div className="grey-text">
        <MDBInputGroup containerClassName="mb-3" label="Price" prepend="$" append=".00" />
        <MDBInput type="textarea" rows="1" label="Details" icon="pencil-alt" />
        <label className="m-0"> Date </label>
          <MDBInput type="date" icon=""/>
        <MDBInput label="Photographer name" icon="user" group type="text" validate error="wrong"
                success="right" />
        </div>
            <div className="text-center">
              <MDBBtn className="btn-black mb-4">Send Offer</MDBBtn>
            </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
      )
    }}
    export default OfferForm;