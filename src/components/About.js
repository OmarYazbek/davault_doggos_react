import React from "react";
import Dog from "../img/dog-on-beach.jpg";
import { Row } from "react-bootstrap";

function About() {
  return (
    <React.Fragment>
      <Row>
        <div className="col text-center pt-5">
          <h2>ABOUT</h2>
          <i className="fa fa-paw fa-lg mt-3" />
        </div>
      </Row>
      <div className="container-fluid col-10 mt-5">
        <Row>
          <Row className="p-5">
            <img src={Dog} alt="" className="col-lg-6 img-fluid" />

            <p className="col-lg-6 about mt-4 mt-lg-0">
              <span className="heavy-weight fst-italic">Davault Doggos</span> is
              a premier, small capacity dog walking and boarding service. We
              only board five dogs at a time to ensure that each pup recieves
              the maximum attention and care that they need. Does your dog play
              well with others? Any behaviors you would like encouraged or
              corrected? Do you just need a safe, loving place for your doggo to
              stay? See below for a list of the services we offer.
            </p>
          </Row>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default About;
