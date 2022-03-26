import React, { useState, useEffect } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='main-container'>
            <div className="product-container">

            </div>
            <div className="cart-container">
                <h2>Selected Books</h2>
                <div>
                    <button className='special1'>Select 1 to read</button>
                    <button className='reset'>Reset</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;