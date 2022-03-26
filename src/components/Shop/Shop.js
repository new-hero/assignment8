// import Cart from '../Cart/Cart';
import './Shop.css';
import Product from '../Product/Product'
import Cartproduct from '../Cartproduct/Cartproduct';
import { useState } from 'react';



const Shop = ({ products }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        if (cart.length < 4) {
            const newCart = [...cart, product];
            setCart(newCart);
        }
        else {
            alert('Hey you can not select more then 4 item')
            return;
        }
    }
    const handleReset = () => {
        setCart([])
    }
    const handleSelect1 = () => {
        setCart([])
        if (cart.length) {
            const luckyNumber = Math.floor(Math.random() * cart.length);
            const selectBook = cart[luckyNumber]
            setCart([selectBook])

        }














    }

    return (
        <div className='main-container'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart} />)
                }

            </div>
            <div>
                <div className="cart-container">
                    <h2>Select Item: {cart.length}</h2>
                    <div>
                        {
                            cart.map(product => <Cartproduct product={product} key={product.id} />)
                        }
                    </div>
                    <button className='special1' onClick={handleSelect1}>Select 1 to read</button>
                    <button className='reset' onClick={handleReset}>Re-Select</button>
                </div>


            </div>
        </div>
    );
};

export default Shop;