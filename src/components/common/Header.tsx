import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import "../../assets/scss/header.scss";
import ShoppingCart from "../../views/shoppingcart/ShoppingCart";
import { RootState } from "../../redux/reducer/types/types";

function Header() {
  const getData = useSelector((state: RootState) => state.cart.data);

  const [showCard, setShowCard] = useState(false);

  const navigate = useNavigate();

  const handleShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (getData.length === 0) {
      toast.error("Your cart is empty");
    } else {
      e.preventDefault();
      setShowCard((prev) => !prev);
    }
  };

  const handleNavigate = () => {
    navigate("/UserProfile");
  };

  return (
    <>
      <Navbar className=" indexz" variant="dark" expand="lg">
        <Container fluid>
          <Link to="/product" className="text-decoration-none">
            <Navbar.Brand href="/product" className="head-section">
              Bazzzzarrrr
            </Navbar.Brand>
          </Link>

          <Nav
            className="me-auto my-2 my-lg-0  border-none"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <div className="px-3 mt-2">
              <Button
                onClick={handleShow}
                className="float-start"
                variant="ghost"
              >
                <div className="icon-container">
                  <MdOutlineShoppingBag className="text-danger fs-3" />
                  <span className="badge_container  text-light">
                    {getData.length}
                  </span>
                </div>
              </Button>
            </div>
            <Button href="" onClick={handleNavigate} variant="dark">
              <CgProfile className="text-info mt-2    " />
            </Button>
          </Form>
          <div className="mt-5 mx-4">
            {showCard && getData.length > 0 ? <ShoppingCart /> : <></>}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
