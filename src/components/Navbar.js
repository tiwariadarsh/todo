import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
export default function Navbarx(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">Home</Nav.Link>
          <Nav.Link href="/complete">Completed Tasks</Nav.Link>
        </Nav>
        <Nav.Link href="/login">
        <Button variant="outline-success">
          Login
        </Button>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
