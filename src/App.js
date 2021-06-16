import React, { Fragment, useEffect, useState } from "react";

import Products from "./components/Products/Products";
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

  const fetchCart = async () => {
    setCartData(await commerce.cart.retrieve());
  };

  const addToCartDataHandler = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCartData(item.cart);
  };

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
        <Products onAddToCart={addToCartDataHandler} products={products} />
      </main>
    </Fragment>
  );
}

export default App;
