import React from "react";
import ProductItem from "./ProductItem";
function ProductList({products1, tru1, cong1, delete1}) {
  const tru = (id) => {
    tru1(id);
  };
  const cong = (id) => {
    cong1(id);
  };
  const deleteProduct = (id) => {
    delete1(id);
  };
  return (
    <div className="col-md-8">
      <div className="product-list">
        {products1.map((product) => (
          <ProductItem
            key={product.id}
            tru2={tru}
            cong2={cong}
            delete2={deleteProduct}
            product2={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
