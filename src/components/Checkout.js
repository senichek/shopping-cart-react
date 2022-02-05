import React from "react";
import Button from "./Button";

function Checkout({ products, onPurchase, onIncrease, onDecrease }) {
  const calculateTotalPrice = (products) => {
    let sum = 0;
    products.map((pr) => {
      return (sum = sum + pr.price * pr.quantity);
    });
    return sum;
  };

  return (
    <>
      {products.map((pr) => {
        return (
          <h4 key={pr._id}>
            {pr.title}&nbsp;&nbsp;&nbsp; &euro;{pr.price}
            &nbsp;&nbsp;
            <Button
              color={"#1976d2'"}
              text={"-"}
              click={() => onDecrease(pr)}
            />
            &nbsp;{pr.quantity}&nbsp;
            <Button
              color={"#1976d2'"}
              text={"+"}
              click={() => onIncrease(pr)}
            />
          </h4>
        );
      })}
      <h3>Total: {calculateTotalPrice(products)} EUR</h3>
      <h5>Enter credit card details:</h5>
      <form>
        <div className="form-control">
          <input type="number" placeholder="Card number" />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Exp date" />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Cvv" />
        </div>
        <Button
          color={"green"}
          text={"BUY"}
          // We can pass props as functions using the syntx below, i.e. click={ () => onPurchase(id) }
          click={onPurchase}
        />
      </form>
    </>
  );
}

export default Checkout;
