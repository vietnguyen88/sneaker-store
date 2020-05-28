import React, { useContext } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from './cartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const [cart] = useContext(CartContext);

    return (
        <div className='cart'>
            <Link to='/shoppingcart'>
                <TiShoppingCart />
            </Link>
            <span>{cart.length}</span>
        </div>
    )
}

export default Cart
