import React from "react";
function ProductItem({product2,tru2,cong2,delete2}) {
 const tru=(id)=>{
    tru2(id);
 }
 const cong=(id)=>{
    cong2(id);
 }
 const deleteProduct=(id)=>{
    delete2(id);
 }
  return (
    <div>
  
        <div  className="product-item d-flex border mb-4">
          <div className="image">
            <img src={product2.image} alt={`sản phẩm `} />
          </div>
          <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="text-dark fs-5 fw-normal">
                  Sản phẩm {product2.id} (M)
                </h2>
                <h2 className="text-danger fs-5 fw-normal">{product2.price.toLocaleString('en')}</h2>
              </div>
              <div className="text-black-50">
                <div className="d-inline-block me-3">
                  <button
                    onClick={() => tru(product2.id)}
                    className="border py-2 px-3 d-inline-block fw-bold bg-light"
                  >
                    -
                  </button>
                  <span className="py-2 px-3 d-inline-block fw-bold">
                    {product2.count}
                  </span>
                  <button
                    onClick={() => cong(product2.id)}
                    className="border py-2 px-3 d-inline-block fw-bold bg-light"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button onClick={()=>{if(window.confirm('Delete the item?')){deleteProduct( product2.id)};}} className="text-primary border-0 bg-transparent fw-light">
                <span>
                  <i className="fa-solid fa-trash-can"></i>
                </span>
                Xóa
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default ProductItem;
