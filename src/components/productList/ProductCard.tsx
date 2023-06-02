import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../../assets/scss/productDisplay.scss";
import "../../assets/scss/main.scss";
import Stars from "./Stars";
import { Breathing } from "react-shimmer";

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
  discountPercentage: number;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  function handleImageLoad() {
    setLoaded(true);
  }

  return (
    <>
      <Card
        className="text-dark main-card"
        onClick={() => {
          navigate(`/detail/${item.id}`);
        }}
      >
        {!loaded && <Breathing className="breathing" />}
        <Card.Img
          variant="top"
          className="card-image"
          src={item.thumbnail}
          alt=""
          onLoad={handleImageLoad}
          style={{ display: loaded ? "block" : "none" }}
        />

        <Card.Body className="main-card">
          <Card.Title className="text-start text-light card-title_text">
            {item.title}
          </Card.Title>
          <Card.Text className="float-start card-brand_text ">
            {item.brand}.
          </Card.Text>

          <Card.Text className="float-end fw-5 text-danger">
            ${item.price}.00
          </Card.Text>

          <Card.Text className="card-description_text  text-start mt-2 float-start">
            {item.description.split(" ").slice(0, 20).join(" ")}
          </Card.Text>
        </Card.Body>

        <div className="container">
          <Card.Text className="float-start fw-5">
            <Stars rating={item.rating} />
          </Card.Text>

          <Card.Text className="float-end text-success">
            {item.discountPercentage}%
          </Card.Text>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
