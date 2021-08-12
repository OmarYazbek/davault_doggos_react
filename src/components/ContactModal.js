import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <li className="nav-item p-2 px-3">
        <button className="nav-link btn" onClick={handleShow}>
          CONTACT <i className="fa fa-chevron-right d-none d-md-inline" />
        </button>
      </li>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="background-primary">
          <Modal.Title>
            <h3>Let's Chat</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="submit">
            <div className="row mb-3">
              <label for="fullName" className="col-form-label col-sm-2">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="fullName"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="email" className="col-form-label col-sm-2">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="subject" className="col-form-label col-sm-2">
                Subject
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="subject"
                />
              </div>
            </div>
            <div className="row mx-1 mb-3 form-floating">
              <textarea
                className="form-control"
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <label for="message">Message</label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            type="submit"
            className="btn mx-auto background-secondary text-white hoverContact"
          >
            SUBMIT
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
