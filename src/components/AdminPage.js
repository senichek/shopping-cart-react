import React from 'react';
import Table from './Table';

function AdminPage({ products, onUpdateClick }) {
  return <div>
      <h3>All the available products:</h3>
      <Table products={products} onUpdateClick={onUpdateClick}/>
      </div>;
}

export default AdminPage;
