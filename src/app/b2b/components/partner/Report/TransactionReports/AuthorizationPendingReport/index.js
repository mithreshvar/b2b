import Arrow from "/public/partner/Arrow.js";
import {CustomSelectField, CustomTextField, CustomDatePicker} from "../../../../InputFields";
import { useState } from "react";
import CustomTable from "../../../PartnerHome/CustomTable";

function AuthorizationPendingReport() {
  const Authorizationpendingreports =[
    ["S Nagarajan/ GPadmini","Nagaraj@gmail.com","984637678","Axis Flexi Cap Fund- Reg(G)","Purchase","40000","0","09 Oct 2023"],
    ["Dattatraya Kulkarni","Nagaraj@gmail.com","984637678","Aditva Birla SL Frontline EquityFund(G)","Purchase","35000","0","09 Oct 2023"],
    ["Santosh Venkatachalam","Nagaraj@gmail.com","984637678","Parag Parikh Liquid Fund-Reg(G)","Purchase","150000","0","08 Oct 2023"],
    ["Santosh Venkatachalam","Nagaraj@gmail.com","984637678","Parag Parikh Liquid Fund-Reg(G)","Purchase","150000","0","07 Oct 2023"],
    ["Shantha Narayanan","Nagaraj@gmail.com","984637678","HDFC Mid-Cap Opportunities Fund(G)","Purchase","10000","0","07 Oct 2023"],
    ["Shantha Narayanan","Nagaraj@gmail.com","984637678","Axis Midcan Fund- Reg(G)","Purchase","10000","0","07 Oct 2023"],
    ["Shantha Narayanan","Nagaraj@gmail.com","984637678","Kotak Bluechip Fund(G)","Purchase","10000","0","07 Oct 2023"],
    ["Shantha Narayanan","Nagaraj@gmail.com","984637678","SBI BlueChip Fund- Reg(G)","Purchase","10000","0","07 Oct 2023"],
    ["Dattatraya Kulkarni","Nagaraj@gmail.com","984637678","Parag Parikh Flexi Cap Fund-Reg(G)","Purchase","30000","0","07 Oct 2023"],
    ["Venkatachalam Sankarasubramanian","Nagaraj@gmail.com","984637678","Nippon India Growth Fund(G)","Purchase","15000","0","06 Oct 2023"]
]

  const [TransactionType, setTransactionType] = useState('Purchase');
  const [TransactionTypeErrorMessage, setTransactionTypeErrorMessage] = useState('');
  const handleTransactionTypeChange = (event) => {
    const value = event.target.value;
    setTransactionType(value);
  };
  const TransactionTypeOptions = ['Purchase','Additional purchase','Redemption','Switch'];

  const[fromDate,setFromDate] = useState();
  const[toDate,setToDate] = useState();
  const [fromDateErrorMessage, setFromDateErrorMessage] = useState('');
  const [toDateErrorMessage, setToDateErrorMessage] = useState('');
  const handleFromDateChange = (newDate) => {
    setFromDate(newDate);
  };
  const handleToDateChange = (newDate) => {
    setToDate(newDate);
  }


  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(Authorizationpendingreports);
  function filterData() {
    const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = Authorizationpendingreports.filter((item) => {
      // Check if the name, email, and number match the provided regex patterns
        return (
            (value === '' || valueReg.test(item[1]) || valueReg.test(item[2]) || valueReg.test(item[3])) 
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
          <h1 className="text-[20px] font-semibold leading-[20px]">Authorization Pending Report</h1>
        </div>
        <div className='flex gap-x-[50px]'>
          <CustomTextField label='Email/Mobile/Scheme Name' value={value} handleChange={(event)=>{setvalue(event.target.value)}}/>
          <CustomSelectField label="Transaction Type" value={TransactionType} valueOptions={TransactionTypeOptions} errorMessage={TransactionTypeErrorMessage} handleChange={handleTransactionTypeChange} />
        </div>
        <div className='flex gap-x-[50px]'>
          <CustomDatePicker label="From Date" value={fromDate} handleChange={handleFromDateChange} disableFuture={true} errorMessage={fromDateErrorMessage} />
          <CustomDatePicker label="To Date" value={toDate} handleChange={handleToDateChange} disableFuture={true} minDate={fromDate} errorMessage={toDateErrorMessage} />
        </div>
        <div className="flex text-[14px] font-bold gap-x-[20px]">
          <button className="w-[108px] h-[40px] bg-[#0071E7] text-white  rounded-[25px]" onClick={filterData}>Search</button>
          <button className="w-[158px] h-[40px] border-[1px] border-[#0071E7] text-[#0066CD] rounded-[25px]">Download as Excel</button>
        </div>
      </div>
      <CustomTable className={'justify-start'}headers={['Investor Names','Email','Mobile','Scheme Name','Transaction','Amount(Rs.)','Units',' Created Date']} data={tableData} />
    </div>
  );
}

export default AuthorizationPendingReport
