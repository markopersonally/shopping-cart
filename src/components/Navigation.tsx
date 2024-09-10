import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <NavbarBs className="bg-dark shadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="text-white" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white" to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link className="text-white" to="/" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button style={{ position: "relative" }}>
          <div
            className="text-dark"
            style={{
              width: "25px",
              height: "25px",
              backgroundImage: "url(../images/basket.png)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(-25%,-25%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
