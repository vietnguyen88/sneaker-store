import React, { useState } from 'react'
// import { CartContext } from './cartContext'

const SnerkerCart = ({ item: { name, price, imgUrl, quantity } }) => {

    const [updatedQuantity, setUpdatedQuantity] = useState(quantity)

    return (
        <figure style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <figcaption>{name}</figcaption>
            <img src={`${process.env.PUBLIC_URL}/${imgUrl}`}
                alt={name} />
            <figcaption>{new Intl.NumberFormat('au-AU', { style: 'currency', currency: 'AUD', maximumSignificantDigits: 3 }).format(price)}</figcaption>
            <input type='number' value={updatedQuantity} onChange={e => setUpdatedQuantity(e.target.value)} />
            <figcaption>total: {new Intl.NumberFormat('au-AU', { style: 'currency', currency: 'AUD', maximumSignificantDigits: 3 }).format(updatedQuantity * price)}</figcaption>
        </figure>
    )
}

export default SnerkerCart
