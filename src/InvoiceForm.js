import React, { useState } from 'react';

const InvoiceForm = ({ invoice, deleteInvoice, updateInvoices }) => {
    const [invoiceData, setInvoiceData] = useState(invoice);
    const [itemData, setItemData] = useState(invoice.Items);
    const [billSundryData, setBillSundryData] = useState(invoice.BillSundrys);
  
    const handleInvoiceChange = (e) => {
      const { name, value } = e.target;
      setInvoiceData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const updatedItems = [...itemData];
        updatedItems[index] = { ...updatedItems[index], [name]: value };
        setItemData(updatedItems);
      };
    
      const handleBillSundryChange = (index, e) => {
        const { name, value } = e.target;
        const updatedBillSundry = [...billSundryData];
        updatedBillSundry[index] = { ...updatedBillSundry[index], [name]: value };
        setBillSundryData(updatedBillSundry);
      };
  


  const handleSubmit = () => {
    updateInvoices(invoiceData)
  };

  const filteredInvoice = Object.entries(invoiceData)
    .filter(([key]) => key !== 'Items' && key !== 'BillSundrys' && key !=='Date')
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
 
 

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap:'35px' }}>
        <div style={{ flex: 1, marginLeft: '1rem' }}>
          <h2>Invoice</h2>
          {Object.keys(filteredInvoice).map((key) => (
            <div key={key} style={{ marginBottom: '1rem' }}>
              <label style={{ fontWeight: 'bold', display: 'block' }}>{key}</label>
              <input
                type="text"
                name={key}
                value={invoiceData[key]}
                onChange={handleInvoiceChange}
                readOnly={(key === 'Id' || key === 'InvoiceNumber')}
                style={{ padding: '0.5rem', width: '100%' }}
              />
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <h2>Items</h2>
          {itemData.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              {Object.keys(item).map((itemKey) => (
                <div key={itemKey}>
                  <label style={{ fontWeight: 'bold', display: 'block' }}>{itemKey}</label>
                  <input
                    type="text"
                    name={`Items[${index}].${itemKey}`}
                    value={item[itemKey]}
                    onChange={(e) => handleItemChange(index, e)}
                    readOnly={true}
                    style={{ padding: '0.5rem', width: '100%' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <h2>Bill Sundrys</h2>
          {billSundryData.map((billSundry, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              {Object.keys(billSundry).map((billKey) => (
                <div key={billKey}>
                  <label style={{ fontWeight: 'bold', display: 'block' }}>{billKey}</label>
                  <input
                    type="text"
                    name={`BillSundrys[${index}].${billKey}`}
                    value={billSundry[billKey]}
                    onChange={(e) => handleBillSundryChange(index, e)}
                    readOnly={true}
                    style={{ padding: '0.5rem', width: '100%' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{marginTop:'550px',marginLeft:'50px'}}>
      <button onClick={handleSubmit}>
        Save
      </button>
      <button onClick={()=>deleteInvoice(invoiceData.Id)}>
        Delete
      </button>
      </div>
    </>
  );
};

export default InvoiceForm;
