import { Container, Nav, Button } from "react-bootstrap";
import img from "../images/philipsburg-2656850_1280.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Container
      className="mt-5 d-flex flex-column justify-content-center align-items-center"
      style={{ gap: "15px" }}
    >
      <Button>
        <Nav.Link className="text-white" to="/store" as={NavLink}>
          Store
        </Nav.Link>
      </Button>
      <img src={img} alt="main product" className="rounded img-fluid mb-4" />
    </Container>
  );
}
