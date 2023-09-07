import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [logo, setlogo] = useState();

  const logoclick = () => {};

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href={<Link to={"/home"} />}>Home</Nav.Link>
            <Nav.Link href={<Link to={"/"} />}>Map</Nav.Link>
            <Nav.Link href={<Link to={"/about"} />}> About US</Nav.Link>

            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>

          <Button
            variant="outline-success"
            onClick={<Link to={"/User_Rescue_team"} />}
          >
            Sign Up / Sign IN
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
