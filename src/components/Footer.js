import React from "react";
import { Row } from "react-bootstrap";
import LeapingDog from "../img/leaping-dog-1.png";

function Footer() {
  return (
    <footer>
      <div className="container-fluid footer mt-3 p-3">
        <Row>
          <div className="col-4">
            <ul className="ms-5">
              <h5 className="site-links">Links</h5>
              <small>
                <a href="#homeScroll" className="footer-link">
                  Home
                </a>
                <br />
                <a href="#aboutScroll" className="footer-link">
                  About
                </a>
                <br />
                <a href="#servicesScroll" className="footer-link">
                  Services
                </a>
                <br />
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  className="footer-link"
                >
                  Contact
                </a>
              </small>
            </ul>
          </div>
          <div className="col-4 text-center">
            <ul>
              <h5 className="follow-us mx-auto">Follow Us</h5>
              <br />
              <a className="social-icons btn background-primary" href="">
                <i className="fa fa-facebook-f" />
              </a>
              <a
                className="social-icons btn background-primary mt-1 mt-sm-0"
                href=""
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="social-icons btn background-primary mt-1 mt-sm-0"
                href=""
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                className="social-icons btn background-primary mt-1 mt-md-0"
                href=""
              >
                <i className="fa fa-youtube" />
              </a>
            </ul>
          </div>
          <div className="col-4 text-center">
            <small>
              <img src={LeapingDog} alt="" className="img-fluid" />
            </small>
            <p>
              <small>Copyright &copy; 2021 Davault Doggos</small>
            </p>
          </div>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
