import './Product.css';
import React from 'react';

const Product = ({ product }) => {
    const { name, price, img } = product;
    console.log(product.img)
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h2>Price: {price}</h2>
            <button className='addtocartbtn'>Add to Cart</button>
        </div>

    );
};

export default Product;