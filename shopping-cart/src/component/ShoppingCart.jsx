import React, { useState } from "react";
import BillInformation from "./BillInformation";
import ProductList from "./ProductList";
import { cartItems } from "./data.js";
function ShoppingCart() {
  const [products, setProduct] = useState(cartItems);
  const cong = (id) => {
    const newProducts = products.map((p) => {
      if (p.id === id) {
        let newCount = p.count + 1;
        return { ...p, count: newCount };
      }
      return p;
    }); // Spread Operator (ES6)
    setProduct(newProducts);
  };
  console.log(products.length)
  const tru = (id) => {
    const newProducts = products.map((p) => {
      if (p.id === id) {
        if (p.count <= 1) {
          alert("số lượng không thể nhỏ hơn 1");
        } else {
          let newCount = p.count - 1;
          return { ...p, count: newCount };
        }
      }
      return p;
    }); // Spread Operator (ES6)
    setProduct(newProducts);
  };
  const deleteProduct = (id) => {
    const newProducts = products.filter((p) => p.id !== id);
    setProduct(newProducts);
  };
  return (
    <div>
      <div className="shopping-cart-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4">
                <h2>Shopping Cart</h2>
              </div>
            </div>
          </div>
          {products.length === 0 && (
                    <p className="fst-italic message"> Không có sản phẩm nào trong giỏ hàng</p>
                )}
          <div className="row shopping-cart">
            {products.length > 0 && (
              <ProductList
                products1={products}
                tru1={tru}
                cong1={cong}
                delete1={deleteProduct}
              />
            )}

            <BillInformation productsPrice={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
