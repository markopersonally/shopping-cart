import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import { StoreItemProps } from "../components/StoreItem";
import { PRODUCTS } from "../data/data";

export default function Store() {
  const [products, setProducts] = useState<StoreItemProps[]>([]);

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
          products.map((product) => (
            <Col key={product.id}>
              <StoreItem {...product} />
            </Col>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </Row>
    </>
  );
}
