import { Container, Button } from "react-bootstrap";
import img from "../images/philipsburg-2656850_1280.jpg";

export default function Home() {
  return (
    <Container className="text-center mt-5">
      <img src={img} alt="main product" className="rounded img-fluid mb-4" />
      <div>
        <Button variant="primary" href="/store" size="lg">
          Shop Now
        </Button>
      </div>
    </Container>
  );
}
