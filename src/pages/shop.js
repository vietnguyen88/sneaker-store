import React from 'react'
import './shop.css'
import SneakerList from '../components/sneakerList.js'
import { motion } from 'framer-motion'

const Shop = () => {

    return (
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 2 }} s
            className='shop'>
            <div className='filter-section'>
                <div>Man</div>
                <div>Woman</div>
                <div>Brand</div>
                <div>Size</div>
            </div>
            <SneakerList />
        </motion.div>
    )
}

export default Shop
