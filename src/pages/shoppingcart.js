import React, { useContext } from 'react'
import { CartContext } from '../components/cartContext'

import SneakerCart from '../components/snerkerCart'

const ShoppingCart = () => {

    const [cart] = useContext(CartContext)

    return (
        <div className='shopping-cart' style={{ textAlign: 'center' }}>
            <h1>Your Cart</h1>
            {cart.length > 0
                ?
                cart.map(item => {
                    return (
                        <SneakerCart key={item.id} item={item} />
                    )

                })
                : <h5>Empty Cart</h5>
            }
        </div>
    )
}

export default ShoppingCart
