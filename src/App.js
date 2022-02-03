import ProductList from "./components/ProductList";
import TopBar from "./components/TopBar";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import AdminPage from "./components/AdminPage";

function App() {

  const loggedInUserID = 1;

  const [products, setProducts] = useState([]);
  
  // Variables responsible for showing the "add new product" form.
  const [showAddProduct, setShowAddProduct] = useState(false);

  // This function persists the products across the page reloads.
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

// To prevent the items from disapearing from the Cart page when the page is reloaded
// we need to use useEffect and localStorage.
useEffect(() => {
  // Getting the items from the storage.
  const cartItemsFromStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_ITEMS_KEY));
  if (cartItemsFromStorage) setItemsInCart(cartItemsFromStorage);
}, []) // We pass empty array. The empty array never changes, this is why
// this <useEffect> will be called only once.

// Setting the items to the storage.
const LOCAL_STORAGE_CART_ITEMS_KEY = 'items.in.cart';
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_CART_ITEMS_KEY, JSON.stringify(itemsInCart))
}, [itemsInCart]) // if the [itemsInCart] changes, the <useEffect> will be called.

const addToCart = (productID) => {
  let itemToAdd = products.find(x => x._id === productID)
  // Adding new item to the array of those that are already present in the array.
  setItemsInCart([...itemsInCart, itemToAdd])
  alert("Added to cart " + itemToAdd.title);
};

const decreaseQuantity = (product) => {
  product.quantity = product.quantity - 1;
  // Replacing the original item with the modified one;
}

const purchase = () => {
  alert("Thanks for your purchase.")
  
}

const updateRow = (value) => {
  alert("Clicked update for " + value);
}

const deleteRow = (value) => {
  alert("Clicked Delete for " + value);
}

const addNewProduct = (product) => {
  setShowAddProduct(!showAddProduct);
}

  return (
    <>
    <BrowserRouter>
    <TopBar />
        <Routes>
          <Route path="/cart" element={<Cart products={itemsInCart}/>} />
          <Route path="/" element={<ProductList products={products}/>} />
          <Route path="/details/:productID" element={<ProductDetails products={products} onAddToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout products={itemsInCart} onPurchase={purchase}/>} />
          <Route path="/admin" element={<AdminPage products={products} onUpdateClick={updateRow} onDeleteClick={deleteRow} onAddClick={addNewProduct} showAddProduct={showAddProduct} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
