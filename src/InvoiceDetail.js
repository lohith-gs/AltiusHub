import React from "react";

const InvoiceDetail = (props) =>{
    return(
        <div className="details-container">
            <p className="invoice-title">Invoice Details</p>
            {props.invoiceDetailData.map((inv)=>{
                return <p>{inv.InvoiceNumber}</p>
            })}
        </div>
    );
}

export default InvoiceDetail;

