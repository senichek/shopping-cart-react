import React from "react";
import Table from "./Table";
import Button from "./Button";
import AddProduct from "./AddProduct";

// if <showAddProduct> we will show the component, if not - do nothing.
function AdminPage({ products, onUpdateClick, onDeleteClick, onAddClick, onSaveClick, showAddProduct }) {
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
    </div>
  );
}

export default AdminPage;
