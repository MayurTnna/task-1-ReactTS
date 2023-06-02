import React from "react";
import { Carousel } from "react-responsive-carousel";
interface ProductDetailCarouselProps {
  data: any;
}

const ProductDetailCarousel: React.FC<ProductDetailCarouselProps> = ({
  data,
}) => {
  return (
    <>
      <div style={{ objectFit: "contain", height: "613px" }}>
        <Carousel>
          {data.images.map((item: string) => (
            <div key={item}>
              <img src={item} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProductDetailCarousel;
