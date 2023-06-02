import React from "react";
import "../../assets/scss/shoppingCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addItemToCart, removeItemFromCart } from "../../redux/action/action";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/reducer/types/types";

const ShoppingCart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.data);
  const dispatch = useDispatch();

  return (
    <>
      <div className="shopping-container bg-dark">
        {items &&
          items.map((item: any) => {
            return (
              <Card
                style={{ width: "28rem", height: "10rem", margin: "auto" }}
                className="my-3 bg-black text-light"
                key={item.id}
              >
                <Card.Body>
                  <Card.Title>
                    <h3 className="float-start">{item.title}</h3>
                    <div className="price float-end">
                      <h4>${item.price * item.total} </h4>
                    </div>
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ paddingTop: "50px" }}
                  >
                    <div className="text-danger">
                      {" "}
                      {item.description.split(" ").slice(0, 8).join(" ")}...
                    </div>
                  </Card.Subtitle>
                  <span className="mx-2 float-start"> x{item.total} </span>
                  <div className="px-2">
                    <Button
                      className="float-end"
                      onClick={() => {
                        dispatch(addItemToCart(item));
                      }}
                      variant="outline-light"
                    >
                      +
                    </Button>
                  </div>
                  <div className="px-5">
                    <Button
                      className="float-end"
                      onClick={() => {
                        dispatch(removeItemFromCart(item));
                      }}
                      variant="outline-light"
                    >
                      -
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        <Link to="/checkout">
          <span className=" d-flex  justify-content-center">
            <Button className="mb-2" variant="success">
              buy now
            </Button>
          </span>
        </Link>
      </div>
    </>
  );
};

export default ShoppingCart;
