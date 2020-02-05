import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup } from 'mdbreact';
const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form>
            <p className="h5 text-center mb-4 mt-4">Sing Up</p>
            <div className="grey-text">
              <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" />
              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                success="right" />
              <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                error="wrong" success="right" />
              <MDBInput label="Your password" icon="lock" group type="password" validate />
              <p className="mb-0">Register As:</p>
                <div className="radio">
                  <label>
                    <input type="radio" value="User" className="mr-2" />
                    User
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="Photographer" className="mr-2" />
                    Photographer
                  </label>
                </div>
        <MDBInputGroup
          prepend="Upload"
          inputs={
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          }
          containerClassName="mb-3"
        />
            </div>
             <MDBInput type="textarea" rows="1" label="Description" icon="pencil-alt" />
            <div className="text-center">
              <MDBBtn className="btn-black mb-4">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default FormPage;

