import React from 'react';
import { useRef } from 'react'; // It allows to reference the elements of html page.
import Button from './Button';

function AddProduct({ onSaveClick }) {
  const titleRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  return <div>
      <form>
        <div className="form-control">
          <input ref={titleRef} type="text" placeholder="Product name" />
        </div>
        <div className="form-control">
          <input ref={priceRef} type="number" placeholder="Price" />
        </div>
        <div className="form-control">
          <input ref={quantityRef} type="number" placeholder="Quantity" />
        </div>
        <Button
          color={"#1976d2"}
          text={"Save"}
          click={() => onSaveClick(titleRef.current.value, priceRef.current.value, quantityRef.current.value)}
        />
      </form>
  </div>;
}

export default AddProduct;
