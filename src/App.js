import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch} from 'react-router-dom';
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Cart from './pages/CartPage'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProductPage'
import Contact from './pages/ContactPage'
import Default from './pages/DefaultPage'




 function App() {
  return (
    <>
      {/* Navbar, Sidebar, Cart, footer */}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/Products" exact component={Products}/>
        <Route path="/products/:id" component={SingleProduct}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
    </>
  );
}

export default App;
