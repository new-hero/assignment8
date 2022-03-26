import React from 'react';
import './Cartproduct.css'

const Cartproduct = ({ product }) => {
    const { img, name } = product;

    return (
        <div>
            <div className='cartItem'>
                <img src={img} alt="" />
                <h3>{name}</h3>
            </div>

        </div>
    );
};

export default Cartproduct;