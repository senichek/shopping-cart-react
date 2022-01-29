import React from "react";
import Button from "./Button";

function Product({ product }) {
    const share = (productName) => {
        alert('The product <' + productName + '> has been shared!')
    }

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
      <Button color={'blue'} text={'SHARE'} click={() => share(product.name)}/>
      </p>
      {product.price > 700 && 
        <Button color={'blue'} text={'Notify me'} click={() => notify(product.name)}/>
      }
    </div>
  );
}

export default Product;
