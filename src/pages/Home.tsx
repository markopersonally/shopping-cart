import { Container, Button } from "react-bootstrap";
import img from "../images/philipsburg-2656850_1280.jpg";

export default function Home() {
  return (
    <Container
      className="mt-5 d-flex flex-column justify-content-center align-items-center"
      style={{ gap: "15px" }}
    >
      <div>
        <Button variant="primary" href="/store" size="lg">
          Shop Now
        </Button>
      </div>
      <img src={img} alt="main product" className="rounded img-fluid mb-4" />
    </Container>
  );
}
