import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";

function ProductDetails({ products, onAddToCart }) {
  // This is the parameter that comes from URL declared in App.js (<Route path="/details/:productID")
  let { productID } = useParams();

  const getProductByID = (productID) => {
    return products.find((element) => {
        // We use parseInt because the <productID> comes in the form of string from URL
      return element.id === parseInt(productID);
    });
  };

  // Used to redirect a user to a specific URL.
  let navigate = useNavigate();

  const redirect = (URL) => {
    navigate(URL);
  };

  // <getProductByID(productID) &&> - if the product exists we will use it, if not - do nothing.
  // https://reactjs.org/docs/conditional-rendering.html
  return (
    <div>
      {getProductByID(productID) && (
        <>
          <h3>{getProductByID(productID).name}</h3>
          <p>{getProductByID(productID).description}</p>
          <h3>{getProductByID(productID).price} EUR</h3>
          <p>
            <Button
              color={"green"}
              text={"Add to cart"}
              // We can pass props as functions using the syntx below, i.e. () => onAddToCart(productID)
              click={() => onAddToCart(productID)}
            />
          </p>
          <Button
            color={"#1976d2"}
            text={"Go back to store"}
            click={() => redirect("/")}
          />
        </>
      )}
    </div>
  );
}

export default ProductDetails;
