import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { StoreItemProps } from "./StoreItem";
import { PRODUCTS } from "../data/data";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, deleteFromCart } =
    useShoppingCart();
  const [item, setItem] = useState<StoreItemProps | null>(null);

  useEffect(() => {
    fetch(`${PRODUCTS}/${id}`)
      .then((res) => res.json())
      .then((data: StoreItemProps) => setItem(data))
      .catch(() => console.log("Error fetching product"));
  }, [id]);

  if (!item) return null;

  const total = item.price * quantity;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={item.title}
      />
      <div className="me-auto">
        {item.title}

        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          ${total}
        </div>
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        {quantity > 1 && (
          <span className="text-danger" style={{ fontSize: "1rem" }}>
            {quantity}x
          </span>
        )}
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => increaseCartQuantity(id)}
        >
          +
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => decreaseCartQuantity(id)}
        >
          -
        </Button>
      </div>
      <Button onClick={() => deleteFromCart(id)} variant="outline-danger">
        x
      </Button>
    </Stack>
  );
}
