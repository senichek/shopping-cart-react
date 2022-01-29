import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Cart() {
  
  // Used to redirect a user to a specific URL.
  let navigate = useNavigate();

  const redirect = (URL) => {
    navigate(URL);
  };

  return (
    <div>
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
