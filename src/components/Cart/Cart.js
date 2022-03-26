import React from 'react';
import './Cart.css'

const Cart = () => {
    return (

        <div className="cart-container">
            <h2>Selected Books</h2>
            <div>
                <button className='special1'>Select 1 to read</button>
                <button className='reset'>Reset</button>
            </div>

        </div>

    );
};

export default Cart;