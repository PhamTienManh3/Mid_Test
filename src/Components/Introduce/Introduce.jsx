import React from "react";
import "./Introduce.css";
import ProductDetail from "../ProductDetail/ProductDetail.jsx";

const Introduce = (props) => {
  const { selectedProduct } = props;

  if (!selectedProduct) {
    return (
      <div>
        <h1 className="explore">Explore</h1>
        <p className="what">What are you wanna watch today?</p>
        <img src="/public/carousel.png" alt="" className="img"/>;
      </div>
    );
  }

  return (
    <div>
      <h1 className="explore">Explore</h1>
      <p className="what">What are you wanna watch today?</p>
      <div className="explore mb-5">
        <ProductDetail productDetail={selectedProduct} />
      </div>
    </div>
  );
};

export default Introduce;
