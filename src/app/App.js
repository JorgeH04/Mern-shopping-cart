import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "./components/Nav";
//import List from "./components/List";
import ProductList from "./components/Products/ProductList";
import About from "./components/Products/About";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Products/Cart";

function App() {
  return (
  <Router>

  <Nav />
  <Route path="/about" component={About} />
          
  <Route path="/list" component={ProductList} exact />
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

