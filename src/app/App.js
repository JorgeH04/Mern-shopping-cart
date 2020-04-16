import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductList from "./components/Products/ProductList";
import About from "./components/Products/About";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Products/Cart";

import Product from "./components/Product";

function App() {
  return (
  <Router>

  <Nav />
  <Route exact path="/">
          <Home />
  </Route>
  <Route path="/about" component={About} />

  <Route exact path="/products">
          <Product />
  </Route>

          
  <Route
          path="/products/:_id"
          children={<ProductDetails></ProductDetails>}
  ></Route>


<Route path="/cart">
<Cart />
</Route>

</Router>



  );
}

export default App;

