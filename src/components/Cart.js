import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

function Cart({ products }) {

  // Used to redirect a user to a specific URL.
  let navigate = useNavigate();

  const redirect = (URL) => {
    navigate(URL);
  };

  return (
    <div>
      {products.map((pr) => {
          return<h3 key={pr.id}> {pr.name}</h3>
      })}
      <p>
        <Button
          color={"#1976d2"}
          text={"Go back to store"}
          click={() => redirect("/")}
        />
      </p>
    </div>
  );
}

export default Cart;
