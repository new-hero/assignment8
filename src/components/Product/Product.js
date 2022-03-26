import './Product.css';
import React from 'react';




const Product = ({ product, handleAddToCart, }) => {
    const { name, price, img } = product;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h2>Price: {price}</h2>
            <button className='addtocartbtn' onClick={() => handleAddToCart(product)}>Add to Cart

            </button>
        </div>

    );
};

export default Product;