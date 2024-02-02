import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export function SingleProductCard() {
  const colors = ["secondary","primary", "danger", "warning", "pink","success","purple","info"];
  return (
    <>
    <Row className='mt-3'>
      {(colors || []).map((color, idx) => {
        return (
          <Col lg={4} sm={4} key={idx}>
            <Card className={`text-bg-primary bg-${color} bg-gradient`}>
            <Card.Body className="text-center">
            <Card.Title as="h1" className="card-title ">
              10{" "}
            </Card.Title>
            <Card.Text>{color}</Card.Text>
            <Link to="/product-details" className="btn btn-outline-light btn-md ">
              Product Details
            </Link>
          </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>

    </>
  );
}
