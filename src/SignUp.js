import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4"></p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
          <MDBInput label="Your password" icon="lock" group type="password" validate />
          
          <p>Register As:</p>
          <div className="form-group">
                <label className="mr-3"> 
                <input  type="radio" value="option1"  />
               User
                </label>
                <label>   
                <input type="radio" value="option2"  />
                Photographer
                </label>
             </div>


           <div className="input-group">
          <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
          Attach
          </span>
          </div>
          <div className="custom-file">
          <input
         type="file"
         className="custom-file-input"
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
         />
         <label className="custom-file-label" htmlFor="inputGroupFile01">
         Image
         </label>
         </div>
         </div>
            
        </div>
        <div className="text-center">
          <MDBBtn color="black">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;