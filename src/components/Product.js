import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Product({ product }) {

  // Used to redirect a user to a specific URL.
  let navigate = useNavigate();

  const redirect = (URL) => {
    navigate(URL);
  };
    
    const notify = (productName) => {
      alert('You will be notified when <' + productName + '> goes on sale!')
  }
  // The expression <product.price > 700 &&> means that we 
  // will show the button if the price is higher than 700,
  // otherwise we do nothing.
  // https://reactjs.org/docs/conditional-rendering.html
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
      <Button color={'#1976d2'} text={'See details'} click={() => redirect(`/details/${product.id}`)}/>
      </p>
      {product.price > 700 && 
        <Button color={'green'} text={'Notify me'} click={() => notify(product.name)}/>
      }
    </div>
  );
}

export default Product;
