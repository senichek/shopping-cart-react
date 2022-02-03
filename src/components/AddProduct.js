import React from 'react';
import Button from './Button';

function AddProduct({ onClickSave }) {
  return <div>
      <form>
        <div className="form-control">
          <input type="text" placeholder="Product name" />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Price" />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Quantity" />
        </div>
        <Button
          color={"#1976d2"}
          text={"Save"}
          click={() => onClickSave()}
        />
      </form>
  </div>;
}

export default AddProduct;
