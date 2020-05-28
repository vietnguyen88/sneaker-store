import React, { useContext } from 'react'
import { CartContext } from './cartContext.js';


const Sneaker = ({ withbutton, item: { id, imgUrl, name, price } }) => {

    const [cart, setCart] = useContext(CartContext)

    const addToCart = () => {
        const item = {
            id,
            imgUrl,
            name,
            price
        }

        const found = cart.find(item => item.id === id)
        if (found) {
            found.quantity++;
        }
        else {
            item.quantity = 1;
            setCart([...cart, item])
        }

    }
    return (
        <figure >
            <img src={`${process.env.PUBLIC_URL}/${imgUrl}`}
                alt={name} />
            <figcaption>{name}</figcaption>
            <figcaption>{new Intl.NumberFormat('au-AU', { style: 'currency', currency: 'AUD', maximumSignificantDigits: 3 }).format(price)}</figcaption>
            {withbutton
                ?
                <button onClick={addToCart}>Add to Cart</button>
                :
                ''
            }
        </figure>
    )
}

export default Sneaker
