import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import './NavBar.css';

const TopNav = (props) => {
  return (
      <Navbar expand="lg" sticky="top" className="mynavbar">
        <Container>
          <Navbar.Brand><Nav.Link as={Link} to="/" className="text-light">Google Books Search</Nav.Link></Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink to="/saved" className="btn btn-danger ml-auto">Saved books</NavLink>
          </Navbar.Collapse> */}
        </Container>
      </Navbar> 

  )
}

export default TopNav;