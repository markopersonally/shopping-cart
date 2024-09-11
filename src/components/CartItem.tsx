import { useState, useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { StoreItemProps } from "./StoreItem.tsx";
import { PRODUCTS } from "../data/data";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { deleteFromCart } = useShoppingCart();
  const [item, setItem] = useState<StoreItemProps | null>(null);

  useEffect(() => {
    fetch(`${PRODUCTS}/${id}`)
      .then((res) => res.json())
      .then((data: StoreItemProps) => setItem(data))
      .catch(() => console.log("Error fetching product"));
  }, [id]);

  if (!item) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.images[0]}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={item.title}
      />
      <div className="me-auto">
        <div>
          {item.title}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {quantity}x
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {item.price}
        </div>
        <p>Price: ${item.price * quantity}</p>
      </div>
      <Button onClick={() => deleteFromCart(id)} variant="outline-danger">
        x
      </Button>
    </Stack>
  );
}
