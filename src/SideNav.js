import React from "react";

const SideNav = ({openInvoiceList}) =>{
    return(
        <div className="side-nav">
            <p className="title" onClick={openInvoiceList}>Invoices</p>
        </div>
    );
}

export default SideNav;