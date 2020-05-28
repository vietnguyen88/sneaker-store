import React from 'react';
import Homepage from './pages/homepage'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Shop from './pages/shop'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './components/cartContext'
import ShoppingCart from './pages/shoppingcart'

// import {motion} from 'framer-motion'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/shop'>
              <Shop />
            </Route>
            <Route path='/shoppingcart'>
              <ShoppingCart />
            </Route>
            <Route path='*'>
              <Homepage />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
