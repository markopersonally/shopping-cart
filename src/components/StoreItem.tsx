import { Button, Card } from "react-bootstrap";

export type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

export default function StoreItem(props: StoreItemProps): JSX.Element {
  const { id, title, price, images } = props;
  const quantity = 0;

  return (
    <Card key={id} className="h-100">
      <Card.Img variant="top" src={images[0]} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button variant="outline-dark" className="w-100">
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button variant="outline-warning">-</Button>
                <div className="fs-4">{quantity}</div>
                <Button variant="outline-success">+</Button>
              </div>
              <Button variant="outline-danger">Delete</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
