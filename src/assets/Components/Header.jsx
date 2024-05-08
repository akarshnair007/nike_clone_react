import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="nike_logo.png" height={70} width={70} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className="text-dark fw-bold">
              New & Featured
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark fw-bold">
              Men
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark fw-bold">
              Women
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark fw-bold">
              Kids
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark fw-bold">
              Sale
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark fw-bold">
              Customise
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark fw-bold">
              SNKRS
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                id="inputSearch"
              />
            </Nav.Link>
            <Nav.Link href="#link" className="mt-1">
              {" "}
              <FontAwesomeIcon icon={faHeart} size="xl" />{" "}
            </Nav.Link>
            <Nav.Link href="#link" className="mt-1">
              {" "}
              <FontAwesomeIcon icon={faBagShopping} size="xl" />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
