import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";

function ProductDetails({ products }) {
  // This is the parameter that comes from URL declared in App.js (<Route path="/details/:productID")
  let { productID } = useParams();

  const getProductByID = (productID) => {
    return products.find((element) => {
      return element.id === parseInt(productID);
    });
  };

  const addToCart = () => {
    alert("Added to cart");
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
              color={"#1976d2"}
              text={"Add to cart"}
              click={() => addToCart()}
            />
          </p>
          <Button
            color={"green"}
            text={"Back to products"}
            click={() => redirect("/")}
          />
        </>
      )}
    </div>
  );
}

export default ProductDetails;
