import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import HeaderItem from "./HeaderItem";
import BookNow from "./BookNow";
import { ContactModal } from "./ContactModal";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar classNameName="navbar-expand-md sticky-top navbar-light bg-light">
      <NavbarBrand className=" ms-4 logo-size">D / D</NavbarBrand>

      <ul className="navbar-nav mx-auto">
        <HeaderItem title="HOME" />
        <Link to="/About" style={{ textDecoration: "none" }}>
          <HeaderItem title="ABOUT" />
        </Link>
        <Link to="/Services" style={{ textDecoration: "none" }}>
          <HeaderItem title="SERVICES" />
        </Link>
        <ContactModal />
      </ul>
      <BookNow title="Book Now!" />
    </Navbar>
  );
}

export default Header;
