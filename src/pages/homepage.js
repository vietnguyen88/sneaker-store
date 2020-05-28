import React from 'react'
import './homepage.css'
import { motion } from 'framer-motion'



const Homepage = () => {
    console.log(window.innerWidth);
    console.log(document.body.clientWidth);





    return (
        <motion.main animate={{ opacity: 1 }} transition={{ duration: 2 }}
            className='homepage'>
            <div className='hero'>

                <motion.h1 className='left-text'
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5, delay: 1 }}
                >
                    Style your life
                </motion.h1>
                <motion.img className='left-img'
                    src={require('../img/leon-skibitzki-NMyuo1hoCAA-unsplash.jpg')}
                    animate={{ y: -10 }}
                    transition={{ duration: 2 }}
                />

                <motion.img className='right-img'
                    src={require('../img/andres-jasso-u4unYsXQHnE-unsplash.jpg')}
                    animate={{ y: 10 }}
                    transition={{ duration: 2 }}
                />

                <motion.h1 className='right-text'
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5, delay: 1 }}
                >
                    Share your passion
                </motion.h1>

            </div>
            <section>
                <h2>New Arrival</h2>
                <div className='product-list'>
                    <figure>
                        <img src={require('../img/trendest-studio-XZ3EmAIWuz0-unsplash.jpg')}
                            alt="Elephant at sunset" />
                        <figcaption>Air Force One</figcaption>
                        <button>Add to Cart</button>
                    </figure>
                    <figure>
                        <img src={require('../img/imani-clovis-LxVxPA1LOVM-unsplash.jpg')}
                            alt="Elephant at sunset" />
                        <figcaption>Air Force One</figcaption>
                        <button>Add to Cart</button>
                    </figure>
                    <figure>
                        <img src={require('../img/trendest-studio-XZ3EmAIWuz0-unsplash.jpg')}
                            alt="Elephant at sunset" />
                        <figcaption>Air Force One</figcaption>
                        <button>Add to Cart</button>
                    </figure>
                    <figure>
                        <img src={require('../img/imani-clovis-LxVxPA1LOVM-unsplash.jpg')}
                            alt="Elephant at sunset" />
                        <figcaption>Air Force One</figcaption>
                        <button>Add to Cart</button>
                    </figure>
                </div>
            </section>

        </motion.main >
    )
}

export default Homepage
