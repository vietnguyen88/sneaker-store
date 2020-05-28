import React from 'react'

import Sneaker from './sneaker'

const SneakerList = () => {

    const data = [
        {
            id: 1,
            name: 'Alexander McQueen Mens',
            imgUrl: 'img/1562113547_PF19DIOR39_small.jpg',
            price: 790,
            gender: 'man',
            brand: 'adidas'

        },
        {
            id: 2,
            name: 'Nike Mens Dunk Low SP',
            imgUrl: 'img/1575957438_SS20MARG3_1_small.jpg',
            price: 140,
            gender: 'woman',
            brand: 'nike'
        },
        {
            id: 3,
            name: 'Gucci Mens Screener Sneaker',
            imgUrl: 'img/1583989935_SS20GUCC12_1_small.jpg',
            price: 1175,
            gender: 'man',
            brand: 'gucci'
        },
        {
            id: 4,
            name: 'Gucci Mens Screener',
            imgUrl: 'img/1584413879_SS20AMCQ2_1_small.jpg',
            price: 1175,
            gender: 'woman',
            brand: 'gucci'
        },
        {
            id: 5,
            name: ' Air Max 270 Cactus',
            imgUrl: 'img/1586908042_SS20DIOR59_1_small.jpg',
            price: 240,
            gender: 'man',
            brand: 'nike'

        },
        {
            id: 6,
            name: 'Air Jordan 4 Retro',
            imgUrl: 'img/1589179519_SS20GUCC301_1_small.jpg',
            price: 260,
            gender: 'man',
            brand: 'adidas'
        }

    ]

    return (
        <div className='product-list'>
            {data.map(item => {
                return (
                    <Sneaker key={item.id} item={item} withbutton={true} />
                )
            })}
        </div>
    )
}

export default SneakerList
