import ProductList from "./components/ProductList";
import TopBar from "./components/TopBar";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {

  const loggedInUserID = 1;

  const [products, setProducts] = useState([
    /* {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
      },
      {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
      },
      {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: ''
      } */
]);

useEffect(() => {
  const getProducts = async () => {
    const productsFromServer = await fetchProducts();
    setProducts(productsFromServer)
  }

  getProducts()
}, [])

// Fetch products from server
const fetchProducts = async () => {
  const res = await fetch('http://localhost:3001/item/all')
  const data = await res.json()
  return data;
}

// Empty array for adding the items in Cart
const [itemsInCart, setItemsInCart] = useState([]);

const addToCart = (productID) => {
  let itemToAdd = products.find(x => x._id === productID)
  // Adding new item to the array of those that are already present in the array.
  setItemsInCart([...itemsInCart, itemToAdd])
  alert("Added to cart " + itemToAdd.title);
};

  return (
    <>
    <BrowserRouter>
    <TopBar />
        <Routes>
          <Route path="/cart" element={<Cart products={itemsInCart}/>} />
          <Route path="/" element={<ProductList products={products}/>} />
          <Route path="/details/:productID" element={<ProductDetails products={products} onAddToCart={addToCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
