import logo from './logo.svg';
import './App.css';
import SideNav from './SideNav'
import { useState } from 'react';
import InvoiceList from './InvoiceList';
import InvoiceForm from './InvoiceForm';
const invoices = [
  {
    Id:1,
    Date:'3/24/2024',
    InvoiceNumber: 120,
    CustomerName: 'John',
    BillingAddress: 'New York',
    ShippingAddress: 'New York',
    GSTIN: 'in120',
    Items: [
      {
        Id: 'item1',
        itemName: 'fan',
        quantity: 1,
        price: 200,
        amount: 200,

      }
    ],
    BillSundrys: [
      {
        Id: 'bill120',
        billSundryName: 'bill1',
        amount: '200',

      }
    ],
    TotalAmount: 400,
  },
  {
    Id:2,
    Date:'3/24/2024',
    InvoiceNumber: 121,
    CustomerName: 'Jack',
    BillingAddress: 'New Jersey',
    ShippingAddress: 'New Jersey',
    GSTIN: 'in121',
    Items: [
      {
        Id: 'item2',
        itemName: 'bulb',
        quantity: 1,
        price: 100,
        amount: 100,

      }
    ],
    BillSundrys: [
      {
        Id: 'bill121',
        billSundryName: 'bill2',
        amount: '120',

      }
    ],
    TotalAmount: 220,
  },
]

function App() {

  const [screen,setScreen] = useState('');
  const [invoiceData,setInvoiceData] = useState(invoices);
  const [invoiceDetailData,setInvoiceDetailData] = useState({});
  const [invoiceId,setInvoiceId] = useState(null);
  const [invoiceCount,setInvoiceCount] = useState(2);
  const [invoiceNumber,setInvoiceNumber] = useState(121);
  const openInvoiceList = () =>{
    setScreen('List');
  }

  const openInvoice = (number) =>{
    let invoice = invoiceData.filter((inv)=>{
      if(inv.InvoiceNumber===number){
        return inv;
      }
    })
    setInvoiceDetailData(invoice[0]);
    setScreen('Detail');
  }

  const openInvoiceEmptyForm = () =>{
    setInvoiceDetailData({Id:invoiceCount+1,
      Date:'3/24/2024',
      InvoiceNumber: invoiceNumber+1,
      CustomerName: '',
      BillingAddress: '',
      ShippingAddress: '',
      GSTIN: '',
      Items: [
        {
          Id: 'item2',
          itemName: 'bulb',
          quantity: 1,
          price: 100,
          amount: 100,
  
        }
      ],
      BillSundrys: [
        {
          Id: 'bill121',
          billSundryName: 'bill2',
          amount: '120',
  
        }
      ],
      TotalAmount: 0,
    });
    setScreen('Detail');
  }

  const isIdPresent = (id) => {
    for (const inv of invoiceData) {
      if (inv.Id === id) {
        return true;
      }
    }
    return false;
  };
  const updateInvoices = (inv) =>{
    if(isIdPresent(inv.Id)){
      let invoices = invoiceData.map(invoice => {
        if (invoice.Id === inv.Id) {
          return inv;
        }
        return invoice;
      });
      setInvoiceData(invoices);
      setScreen('List')
    }else{
      console.log([...invoiceData,inv])
      setInvoiceData([...invoiceData,inv]);
      setScreen('List')
    }
    
  }

  const deleteInvoice =(Id)=>{
      let temp = invoiceData.filter(inv => inv.Id !== Id);
      setInvoiceData(temp);
      setScreen('List');
  }

  const getScreen = () =>{
    switch(screen){
      case 'List':
        return <InvoiceList invoiceData={invoiceData} openInvoice={openInvoice} openInvoiceEmptyForm={openInvoiceEmptyForm}/>
      case 'Detail':
        return <InvoiceForm invoice={invoiceDetailData} deleteInvoice={deleteInvoice} updateInvoices={updateInvoices}/>
      default:
        return <p style={{marginLeft:'500px', marginTop:'300px'}}>Click on Invoices to get started</p>;
    }
  }

  return (
    <div className="App">
      <SideNav openInvoiceList={openInvoiceList}/>
      {getScreen()}
    </div>
  );
}

export default App;


// Requirements :

// 1. Side Nav bar
// 2. Open invoices screen - list of all the invoices
// 3. We can create a new invoice
// 4. Edit existing(update, delete)
// 5. Validations