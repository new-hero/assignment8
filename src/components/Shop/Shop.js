

import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';



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
                {
                    products.map(product => <Product product={product} key={product.id} />)
                }

            </div>
            <div>
                <Cart></Cart>

            </div>
        </div>
    );
};

export default Shop;