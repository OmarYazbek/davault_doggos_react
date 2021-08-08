import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <Navbar
      id="navbarMain"
      classNameName=" navbar-expand-md sticky-top navbar-light bg-light"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
          aria-controls="navContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavbarBrand className=" ms-4 logo-size" href="index.html">
          D / D
        </NavbarBrand>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav mx-auto">
            <HeaderItem title="HOME" />
            <HeaderItem title="ABOUT" />
            <HeaderItem title="SERVICES" />
            <li className="nav-item p-2 px-3">
              <a
                className="nav-link"
                href=""
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                CONTACT{" "}
                <i className="fa fa-chevron-right d-none d-md-inline"></i>
              </a>
            </li>
          </ul>
          <a
            type="button"
            className="btn rounded-pill background-primary px-4 me-3 hover"
            href="booking.html"
          >
            Book Now!
          </a>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
