import Product from "./Product";

function ProductList({ products }) {
  return <>
      {products.map((pr) => {
          return <Product key={pr.id} product={pr}/>
      })}
  </>;
}

export default ProductList;
