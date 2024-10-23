import React from "react";
import Product from "../Product/Product";

const ProductLists = (props) => {
  const { products = [], handleSelectProduct } = props;
  const listProduct =
    products &&
    products.map((product) => (
      <div  className="col-md-2 mb-4">
        <Product
          product={product}
          handleSelectProduct={handleSelectProduct}
          key={product.id}
        />
      </div>
    ));

  return (
    <div>
      <h1>New Release</h1>
      <div>
        <div className="row">{listProduct}</div>
      </div>
    </div>
  );
};

export default ProductLists;
