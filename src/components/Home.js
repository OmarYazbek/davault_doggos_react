import React from "react";
import { Row } from "react-bootstrap";
import LeapingDog from "../img/leaping-dog-1.png";
import TextLogo from "../img/txt-1.png";

function Home() {
  return (
    <React.Fragment>
      <Row classNameName="row">
        <div className="col pt-5">
          <img src={LeapingDog} alt="" className="img-fluid mx-auto d-block" />
        </div>
      </Row>
      <Row className=" row-content mt-3">
        <div className="col pt-3">
          <img src={TextLogo} alt="" className="img-fluid mx-auto d-block" />
        </div>
      </Row>
      <Row className="pb-5 pt-3">
        <div className="col-12">
          <p className="text-center sub-text">QUALITY DOG CARE</p>
        </div>
      </Row>
      <div className="line">
        <hr className="text-center" />
      </div>
      <div className="container-fluid my-5">
        <h4 className="text-center fst-italic" id="aboutScroll">
          - Dogs and Us - <br />
          We get each other
        </h4>
      </div>
    </React.Fragment>
  );
}

export default Home;
