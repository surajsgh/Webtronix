import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { commerce } from "./lib/commerce";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  // States
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});

  // Fetches the product data from the commerce.js backend using the commerce.js API.
  const getProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response.data);
  };

  //  Retrieves the data back from the cart
  const fetchCart = async () => {
    setCartData(await commerce.cart.retrieve());
  };

  //  Helps to add the products to the cart;
  const addToCartDataHandler = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCartData(item.cart);
  };

  const updateCartQuantityHandler = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCartData(item.cart);
  };

  const removeCartQuantityHandler = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCartData(item.cart);
  };

  const emptyCartHandler = async () => {
    const item = await commerce.cart.empty();
    setCartData(item.cart);
  };

  //  Load the data
  useEffect(() => {
    getProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cartData);

  return (
    <Fragment>
      <Navbar totalNoOfItems={cartData.total_items} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Products onAddToCart={addToCartDataHandler} products={products} />
          </Route>
          <Route path="/cart">
            <Cart
              updateCartQuantity={updateCartQuantityHandler}
              removeCartQuantity={removeCartQuantityHandler}
              emptyCart={emptyCartHandler}
              cart={cartData}
            />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
