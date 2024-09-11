import { useState, useEffect } from "react";
import { PRODUCTS } from "../data/data";
import { Col, Container, Row } from "react-bootstrap";

export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export default function Store() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(PRODUCTS)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          console.log(data);
        });
    }, 1000);
  }, []);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.length > 0 ? (
          products.map((product) => <Col key={product.id}>{product.title}</Col>)
        ) : (
          <p>Loading products...</p>
        )}
      </Row>
    </>
  );
}
