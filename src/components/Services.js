import React from "react";
import { Row } from "react-bootstrap";

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
          <div className="card mx-3 p-4 mb-lg-2 mb-3 card-style">
            <div className="card-body">
              <h4 className=" text-center">BOARDING</h4>
              <h5 className="card-title text-center">
                <i className="fa fa-home" />
              </h5>
              <p className="card-text text-center">
                We board your dog in a five dog maximum establishment. Your dog
                is never crated unless specifically requested for training
                purposes
              </p>
            </div>
          </div>
          <div className="card mx-3 p-4 mb-lg-2 mb-3 background-primary">
            <div className="card-body">
              <h4 className="text-center">WALKS</h4>
              <h5 className="card-title text-center">
                <i className="fa fa-dog"></i>
              </h5>
              <p className="card-text text-center">
                We board your dog in a five dog maximum establishment. Your dog
                is never crated unless specifically requested for training
                purposes
              </p>
            </div>
          </div>
          <div className="card mx-3 p-4 mb-lg-2 card-style">
            <div className="card-body">
              <h4 className="text-center">TRAINING</h4>
              <h5 className="card-title text-center">
                <i className="fa fa-bone"></i>
              </h5>
              <p className="card-text text-center">
                We board your dog in a five dog maximum establishment. Your dog
                is never crated unless specifically requested for training
                purposes
              </p>
            </div>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Services;
