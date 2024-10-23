import React from "react";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const { productDetail } = props;
  const { thumbnail, movieName, description, } = productDetail;

  const introduce = {
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', 
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  return (
    <div className="card mb-5" style={introduce}>
      <div className="text-center movie-info">
        <h2 className="card-title">{movieName}</h2>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
