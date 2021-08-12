import React from "react";
import { Row } from "react-bootstrap";
import servicesInfo from "../servicesInfo";
import CreateCard from "./CreateCard";

function Services() {
  return (
    <React.Fragment>
      <Row>
        <div className="col text-center pt-5">
          <h2 id="servicesScroll">SERVICES</h2>
          <i className="fa fa-paw fa-lg mt-3" />
        </div>
      </Row>
      <div className="container-fluid mt-3 col-10">
        <Row className="mt-5 mb-5 row-cols-1 row-cols-lg-4 justify-content-center">
          {servicesInfo.map(CreateCard)}
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Services;
