import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import HeaderItem from "./HeaderItem";
import BookNow from "./BookNow";
import { BrowserRouter, Switch } from "react-router-dom";

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
          <BrowserRouter>
            <Switch>
              <>
                <ul className="navbar-nav mx-auto">
                  <HeaderItem title="HOME" />
                  <HeaderItem title="ABOUT" />
                  <HeaderItem title="SERVICES" />
                  <HeaderItem title="CONTACT" />
                </ul>
                <BookNow title="Book Now!" />
              </>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
