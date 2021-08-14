import React, { useContext } from "react";
import { Context } from "../Context";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavHeader() {
  const { darkmode, modechange } = useContext(Context);
  return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={darkmode ? "light" : "dark"}
        variant={darkmode ? "light" : "dark"}
      >
        <Navbar.Brand>
          <i
            className={
              darkmode ? "fa fa-sun-o" : "fa fa-moon-o" // Add css to make the icon revolve on hover
            }
            onClick={() => modechange()}
          ></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <Link to="/" className={darkmode ? "linkdark" : "linklight"}>
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/about" className={darkmode ? "linkdark" : "linklight"}>
                ABOUT
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link
                to="/projects"
                className={darkmode ? "linkdark" : "linklight"}
              >
                PROJECTS
              </Link>
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/u/0/uc?id=1SlaClNiamCDUB0RXQ1jaMcQhbjD_rw5x&export=download"
              className={darkmode ? "linkdark" : "linklight"}
            >
              RESUME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavHeader;
