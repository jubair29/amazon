import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,ratings,quantity,price} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h4> Price :${price}</h4>
                <h6>Manufacturer : {seller}</h6>
                <h6>ratings : {ratings} star</h6>

            </div>
            
        </div>
    );
};

export default Product;