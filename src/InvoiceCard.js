import React from "react";

const InvoiceCard =(props) =>{
    return(
        <div className="invoice-card" onClick={()=>props.openInvoice(props.invoice.InvoiceNumber)}>
            <p>Invoice Number : {props.invoice.InvoiceNumber}</p>
            <p>Customer Name : {props.invoice.CustomerName}</p>
            <p>Billing Address : {props.invoice.BillingAddress}</p>
            <p>Shipping Address : {props.invoice.ShippingAddress}</p>
            <p>GSTIN : {props.invoice.GSTIN}</p>
        </div>
    );
}

export default InvoiceCard;