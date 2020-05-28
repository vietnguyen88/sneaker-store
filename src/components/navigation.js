import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'
import Cart from './cart'
import { TiAnchorOutline, TiThMenu } from 'react-icons/ti'
import { motion } from 'framer-motion'

const Navigation = () => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '120%' },
    }

    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div className='logo'>
                <Link to='/'>
                    <TiAnchorOutline />
                </Link>
            </div>
            <Cart />
            <div className='menu' style={open ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'transparent', color: 'black' }} onClick={() => setOpen(!open)}>
                <TiThMenu />
                <motion.ul className='menu-items'
                    animate={open ? 'open' : 'closed'}
                    variants={variants}
                >
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                </motion.ul>

            </div>
        </nav>
    )
}

export default Navigation
