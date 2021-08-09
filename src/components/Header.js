import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import HeaderItem from "./HeaderItem";
import BookNow from "./BookNow";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      id="navbarMain"
      classNameName=" navbar-expand-md sticky-top navbar-light bg-light"
    >
      <div className="container-fluid">
        <NavbarBrand className=" ms-4 logo-size" href="index.html">
          D / D
        </NavbarBrand>
        <div className="collapse navbar-collapse" id="navContent">
          <>
            <ul className="navbar-nav mx-auto">
              <HeaderItem title="HOME" />
              <Link to="/About">
                <HeaderItem title="ABOUT" />
              </Link>
              <Link to="/Services">
                <HeaderItem title="SERVICES" />
              </Link>
              <HeaderItem title="CONTACT" />
            </ul>
            <BookNow title="Book Now!" />
          </>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
