import React from 'react'

function BillInformation({productsPrice}) {
   
    let sumPrice=0;
    for(let i=0;i<productsPrice.length;i++){
      sumPrice+=productsPrice[i].price*productsPrice[i].count;
    }
  
    let vat=sumPrice*0.1;
    let sum=sumPrice+vat;
  return (
    <div className="col-md-4">
    <div className="bill">
        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
            <span className="text-black-50">Tạm tính:</span>
            <span className="text-primary" id="sub-total-money">{sumPrice.toLocaleString('en')}</span>
        </div>
        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
            <span className="text-black-50">VAT (10%):</span>
            <span className="text-primary" id="vat-money">{vat.toLocaleString('en')}</span>
        </div>
        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
            <span className="text-black-50">Thành tiền:</span>
            <span className="text-primary" id="total-money">{sum.toLocaleString('en')}</span>
        </div>
    </div>
</div>
  )
}

export default BillInformation