import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/action/action";

import "../../assets/scss/productDisplay.scss";
import "../../assets/scss/main.scss";
import Header from "../../components/common/Header";
import ProductPagination from "../../components/productList/ProductPagination";
import ProductCard from "../../components/productList/ProductCard";
import { ColorRing } from "react-loader-spinner";

const ProductDisplay: React.FC = () => {
  const data = useSelector((state: any) => state.posts.posts);
  const [active, setActive] = useState<number>(0);
  const loading = useSelector((state: any) => state.posts.loading);

  const dispatch = useDispatch<any>();

  const handleIncrement = (number: number) => {
    setActive(number);
    dispatch(fetchPost(number * 8));
  };

  useEffect(() => {
    dispatch(fetchPost(0));
    handleIncrement(0);
  }, [dispatch]);

  return (
    <>
      <Header />
      {loading ? (
        <div className="text-center">
          <ColorRing
            visible={true}
            height={80}
            width={80}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row">
              {data.products ? (
                data.products.map((item: any) => (
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12 my-4"
                    key={item.id}
                  >
                    <ProductCard item={item} />
                  </div>
                ))
              ) : (
                <h1>hello</h1>
              )}
            </div>
          </div>
          <ProductPagination
            active={active}
            handleIncrement={handleIncrement}
          />
        </>
      )}
    </>
  );
};

export default ProductDisplay;
