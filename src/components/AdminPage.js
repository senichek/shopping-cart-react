import React from "react";
import Table from "./Table";
import Button from "./Button";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

// if <showAddProduct> we will show the component, if not - do nothing.
function AdminPage({ products, onUpdateClick, onDeleteClick, onAddClick, onSaveClick, onSaveUpdateClick, showAddProduct, showUpdateProductForm, productToUpdate }) {
  // onUpdateClick just toggles the product update form.
  return (
    <div>
      <h3>All the available products:</h3>
      <Button color={"#1976d2"} text={"Add new product"} click={onAddClick} />
      {showAddProduct && <div><AddProduct onSaveClick={onSaveClick} /></div> }
      
      <Table
        products={products}
        onUpdateClick={onUpdateClick}
        onDeleteClick={onDeleteClick}
      />
      {showUpdateProductForm && <UpdateProduct onSaveUpdateClick={onSaveUpdateClick} onCancelClick={onUpdateClick} productToUpdate={productToUpdate} />}
    </div>
  );
}

export default AdminPage;
