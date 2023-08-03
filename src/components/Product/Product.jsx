import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { img, name, seller, ratings, quantity, price } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product_name">{name}</h4>
        <h4 className="product_price"> Price :${price}</h4>
        <h6 className="common">Manufacturer : {seller}</h6>
        <h6 className="common">ratings : {ratings} star</h6>
      </div>
      <button onClick={() => handleAddToCart(props.product)} 
      className="btn-cart">
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Product;
