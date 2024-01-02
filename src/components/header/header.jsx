import React, {useContext} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import logo from "../../firelab-logo-cropped.jpg";
import "./header.css";
import { ARIES_LINK_LOGIN, ARIES_LINK_TRYUS } from "../../constants/generals";
import { ActivePageContext } from "../../providers/ActivePageProvider";

function Header() {
  const {activePage, setActivePage} = useContext(ActivePageContext)
  const navigate = useNavigate();

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    console.log(event)
    console.log('Khatti Goli: ', link);

    setActivePage(link);
    navigate(`/${link}`);
  };

  return (
    <Navbar className="fixed-top" bg="white" expand="lg">
      <Container className="main-nav">
        <Navbar.Brand href="/" className={"m-0 p-0"}>
          <Image
            src={logo}
            className="d-inline-block align-top"
            alt="Logo"
            width={"192px"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbarnav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="main-nav-menu text-uppercase fw-bold">
            {/* <Nav.Link
              className={activePage === "about" ? "active" : ""}
              onClick={(event) => handleLinkClick("about", event)}
            >
              About
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/about"
              className={activePage === "about" ? "active" : ""}
              onClick={() => handleLinkClick("about")}
            >
              About
            </Nav.Link>

            {/* <Nav.Link
              className={activePage === "reports" ? "active" : ""}
              onClick={(event) => handleLinkClick("reports", event)}
            >
              Reports
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/reports"
              className={activePage === "reports" ? "active" : ""}
              onClick={() => handleLinkClick("reports")}
            >
              Reports
            </Nav.Link>

            <Nav.Link href={ARIES_LINK_TRYUS}>Try us</Nav.Link>
            {/* <Nav.Link
              className={activePage === "pricing" ? "active" : ""}
              onClick={(event) => handleLinkClick("pricing", event)}
            >
              Pricing
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/pricing"
              className={activePage === "pricing" ? "active" : ""}
              onClick={() => handleLinkClick("pricing")}
            >
              Pricing
            </Nav.Link>


            {/* <Nav.Link
              className={activePage === "contact-us" ? "active" : ""}
              onClick={(event) => handleLinkClick("contact-us", event)}
            >
              Contact
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/contact-us"
              className={activePage === "contact-us" ? "active" : ""}
              onClick={() => handleLinkClick("contact-us")}
            >
              Contact
            </Nav.Link>

            <Nav.Link href={ARIES_LINK_LOGIN}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
