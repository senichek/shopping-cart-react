import ProductList from "./components/ProductList";
import TopBar from "./components/TopBar";
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {

  const loggedInUserID = 1;

  const [products, setProducts] = useState([
    {
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
      }
]);

  return (
    <>
    <BrowserRouter>
    <TopBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductList products={products}/>} />
          <Route path="/details/:productID" element={<ProductDetails products={products} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
