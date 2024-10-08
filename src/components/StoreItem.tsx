import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

export type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function StoreItem(props: StoreItemProps): JSX.Element {
  const { id, title, price, image } = props;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    deleteFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card key={id} className="h-100">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ padding: "15px", height: "400px" }}
      />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              onClick={() => increaseCartQuantity(id)}
              variant="outline-dark"
              className="w-100"
            >
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
                <Button
                  onClick={() => decreaseCartQuantity(id)}
                  variant="outline-warning"
                >
                  -
                </Button>
                <div className="fs-4">{quantity}</div>
                <Button
                  onClick={() => increaseCartQuantity(id)}
                  variant="outline-success"
                >
                  +
                </Button>
              </div>
              <Button
                onClick={() => deleteFromCart(id)}
                variant="outline-danger"
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
