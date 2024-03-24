import React, { useState } from "react";
import InvoiceCard from "./InvoiceCard";
const InvoiceList =(props)=>{
    const pageSize = 1;
    const [currentPage,setCurrentPage] = useState(1);
    const [pageData,setPageData] = useState(props.invoiceData.slice(0,currentPage));

    const nextPage = () =>{
        if(currentPage+1 <= props.invoiceData.length){
            setPageData(props.invoiceData.slice(currentPage,currentPage+1))
            setCurrentPage(currentPage+1);
        }
    }

    const prevoiusPage = () =>{
        if(currentPage >= 1){
            setPageData(props.invoiceData.slice(currentPage-2,currentPage-1));
            setCurrentPage(currentPage-1);
        }
    }
    return (
        <div className="invoice-list-container">
            <p className="invoice-title">Invoices List</p>
            <button onClick={props.openInvoiceEmptyForm}>Add New Invoice</button>
            {pageData.map((inv)=>{
                return <InvoiceCard invoice={inv} openInvoice={props.openInvoice}/>
            })}
            <div className="pagination-container">
                <button onClick={prevoiusPage} style={{display:currentPage!==1?'block':'none'}}>Previous</button>
                <button onClick={nextPage} style={{display:currentPage!==props.invoiceData.length?'block':'none'}}>Next</button>
            </div>
        </div>
    );
}

export default InvoiceList;

