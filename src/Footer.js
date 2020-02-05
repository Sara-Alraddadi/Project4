import React, {Component} from 'react'
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import './Footer.css';


class Footer extends Component {
render(){
  return (
   <div className="footer">

          <header className="headerTitle text-center">
            <br></br>
            <p>
              <h3>CAPTURE THE MOMENT!</h3>
              <b>CAN'T WAIT TO GET INVOLVED CONNECT WITH US NOW</b>
              
              
            </p>
          </header>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div>
                  <a href="#">
                    <Facebook width="35" height="35" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div>
                  <a href="#">
                    <Twitter width="35" height="35" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div>
                  <a href="#">
                    <Linkedin width="35" height="35" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div>
                  <a href="#">
                    <Instagram width="35" height="35" strokeWidth="1" />
                  </a>
                </div>
              </Col>
            </Row>
            <hr/>
            <p>copyright 2020 | Lilghosts Team</p>
          </footer>
      </div>


  );
}
}
export default Footer;