import React from "react";
import './Product.css'

const Product = (props) => {
  const { product, handleSelectProduct } = props;
  const { thumbnail, movieName, episode, id } = product;

  const handleClickViewDetailMovie = () => { 
    handleSelectProduct(id);
  }

  return (
    <div className="card h-100 movie-card" onClick={handleClickViewDetailMovie}>
      <img src={thumbnail} className="card-img-bottom" alt={movieName} />
      <div style={{backgroundColor:'#192026',}}className="card-body p-2 text-black bg-opacity-10">
        <p className="card-text episode-text">Episode {episode}</p>
        <h5 className="card-title movie-title">{movieName}</h5>
      </div>
    </div>
  );
};

export default Product;
