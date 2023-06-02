import React from "react";
import Pagination from "react-bootstrap/Pagination";

interface ProductPaginationProps {
  active: number;
  handleIncrement: (number: number) => void;
}

const ProductPagination: React.FC<ProductPaginationProps> = ({
  active,
  handleIncrement,
}) => {
  let items: JSX.Element[] = [];
  for (let number = 0; number < 100 / 8; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleIncrement(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="pagination-line pagination_container ">
      {items}
    </Pagination>
  );
};

export default ProductPagination;

