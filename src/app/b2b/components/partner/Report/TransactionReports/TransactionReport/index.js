import Arrow from "/public/partner/Arrow.js";
import {CustomSelectField, CustomTextField} from "../../../../InputFields";
import { useState } from "react";
import CustomTable from "../../../PartnerHome/CustomTable";
import Reset from "/public/partner/reset.svg"
import Image from "next/image";
import TransactioReports from "..";

function TransactionReport() {
  const [TransactionType, setTransactionType] = useState('Purchase');
  const [TransactionTypeErrorMessage, setTransactionTypeErrorMessage] = useState('');
  const handleTransactionTypeChange = (event) => {
    const value = event.target.value;
    setTransactionType(value);
  };
  const TransactionTypeOptions = ['Purchase','Additional purchase','Redemption','Switch'];

  const [Success, setSuccess] = useState('Success');
  const [SuccessErrorMessage, setSuccessErrorMessage] = useState('');
  const handleSuccessChange = (event) => {
    const value = event.target.value;
    setSuccess(value);
  };
  const SuccessOptions = ['Success','Under Process','Failed'];

  const [FilterAmount, setFilterAmount] = useState('Greater Than');
  const [FilterAmountErrorMessage, setFilterAmountErrorMessage] = useState('');
  const handleFilterAmountChange = (event) => {
    const value = event.target.value;
    setFilterAmount(value);
  };
  const FilterAmountOptions = ['Greater Than'];

  const [Amount, setAmount] = useState();
  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };



  // 
  // 
  // Data
  const TransactionReport = [
    ["S Nagarajan/ GPadmini","Axis Flexi Cap Fund- Reg(G)","91086859796","Processing","0","40000","09 Oct 2023","PUR","ENACH","41469960"],
    ["Dattatraya Kulkarni","Aditva Birla SL Frontline EquityFund(G)","1037144947","Processing","0","35000","09 Oct 2023","PUR","NACH","41467512"],
    ["Santosh Venkatachalam","Parag Parikh Liquid Fund-Reg(G)","12420705","Processing","0","150000","08 Oct 2023","PUR","rz_netbanking","41499105"],
    ["Santosh Venkatachalam","Parag Parikh Liquid Fund-Reg(G)","12420705","Processing","0","150000","07 Oct 2023","PUR","rz_netbanking","41499102"],
    ["Shantha Narayanan","HDFC Mid-Cap Opportunities Fund(G)","17995610/72","Processing","0","10000","07 Oct 2023","PUR","ENACH","41450595"],
    ["Shantha Narayanan","Axis Midcan Fund- Reg(G)","910122163446","Processing","0","10000","07 Oct 2023","PUR","ENACH","41450594"],
    ["Shantha Narayanan","Kotak Bluechip Fund(G)","8844995/44","Processing","0","10000","07 Oct 2023","PUR","ENACH","41450596"],
    ["Shantha Narayanan","SBI BlueChip Fund- Reg(G)","26655956","Processing","0","10000","07 Oct 2023","PUR","ENACH","41450597"],
    ["Dattatraya Kulkarni","Parag Parikh Flexi Cap Fund-Reg(G)","12373805","Processing","0","30000","07 Oct 2023","PUR","NACH","41448502"],
    ["Venkatachalam Sankarasubramanian","Nippon India Growth Fund(G)","499266662595","Processing","0","15000","06 Oct 2023","PUR","rz_netbanking","41457490"]
  ]
  // 
  // 
  const [TableData, setTableData] = useState(TransactionReport)
  function filterData() {
    const valueReg = new RegExp(Amount.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = TransactionReport.filter((item) => {
      // Check if the name, email, and number match the provided regex patterns
        return (
            (Amount === '' || valueReg.test(item[5])) 
        );
    });
    // Now, 'filteredData' contains the filtered data based on the provided criteria.
    setTableData(filteredData);
  }
  return (
    <div className="flex flex-col p-[20px] gap-y-[20px]" >
      <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-y-[20px]">
        <div className="flex items-center gap-x-[10px]">
          <Arrow left={true} active={true}/>
          <h1 className="text-[20px] font-semibold leading-[20px]">Transaction Report</h1>
        </div>
        <div className='flex gap-x-[50px]'>
          <CustomSelectField label="Transaction Type" value={TransactionType} valueOptions={TransactionTypeOptions} errorMessage={TransactionTypeErrorMessage} handleChange={handleTransactionTypeChange} />
          <CustomSelectField label="Status" value={Success} valueOptions={SuccessOptions} errorMessage={SuccessErrorMessage} handleChange={handleSuccessChange} />
        </div>
        <div className="flex">
          <div className='flex gap-x-[50px]'>
            <CustomSelectField label="Filter Amount" value={FilterAmount} valueOptions={FilterAmountOptions} errorMessage={FilterAmountErrorMessage} handleChange={handleFilterAmountChange} />
            <CustomTextField label='Amount' value={Amount} handleChange={handleAmountChange}/>
          </div>
          <button className="flex justify-center items-center pl-[18px] gap-x-[5px]" onClick={()=>{setAmount('')}}>
            <Image src={Reset}/>
            <p className="text-[14px] font-medium text-[#0066CD]">Clear</p>
          </button>
          
        </div>
        
        <div className="flex text-[14px] font-bold gap-x-[20px]">
          <button className="w-[108px] h-[40px] bg-[#0071E7] text-white  rounded-[25px]" onClick={filterData}>Search</button>
          <button className="w-[158px] h-[40px] border-[1px] border-[#0071E7] text-[#0066CD] rounded-[25px]">Download as Excel</button>
        </div>
      </div>
      <CustomTable headers={['Account names','Scheme Name','Folio Number','Status','Units','Amount(Rs.)','Tax Date','Tax Type','Paid Through','User Ref ID']} data={TableData} />
    </div>
  );
}

export default TransactionReport
