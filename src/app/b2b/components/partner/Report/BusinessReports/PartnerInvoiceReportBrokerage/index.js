import CustomTable from "../../../PartnerHome/CustomTable";
import Arrow from "/public/partner/Arrow.js";
import { useState } from "react";


function PartnerInvoiceReportBrokerage() {
  const mutualfundsData = [
    ["Sep - 2020", "MF_ARN-152318_Sep_2020.pdf"],
    ["Oct - 2020", "MF_ARN-152318_Oct_2020.pdf"],
    ["Nov - 2020", "MF_ARN-152318_Nov_2020.pdf"],
    ["Dec - 2020", "MF_ARN-152318_Dec_2020.pdf"],
    ["Jan - 2021", "MF_ARN-152318_Jan_2021.pdf"],
    ["Feb - 2021", "MF_ARN-152318_Feb_2021.pdf"],
    ["Mar - 2021", "MF_ARN-152318_Mar_2021.pdf"],
    ["Apr - 2021", "MF_ARN-152318_Apr_2021.pdf"],
    ["May - 2021", "MF_ARN-152318_May_2021.pdf"],
    ["Jun - 2021", "MF_ARN-152318_Jun_2021.pdf"],
    ["Jul - 2021", "MF_ARN-152318_Jul_2021.pdf"],
    ["Aug - 2021", "MF_ARN-152318_Aug_2021.pdf"],
    ["Sep - 2021", "MF_ARN-152318_Sep_2021.pdf"],
    ["Oct - 2021", "MF_ARN-152318_Oct_2021.pdf"],
    ["Nov - 2021", "MF_ARN-152318_Nov_2021.pdf"],
    ["Dec - 2021", "MF_ARN-152318_Dec_2021.pdf"],
    ["Jan - 2022", "MF_ARN-152318_Jan_2022.pdf"],
    ["Feb - 2022", "MF_ARN-152318_Feb_2022.pdf"],
    ["Mar - 2022", "MF_ARN-152318_Mar_2022.pdf"],
    ["Apr - 2022", "MF_ARN-152318_Apr_2022.pdf"],
    ["May - 2022", "MF_ARN-152318_May_2022.pdf"],
    ["Jun - 2022", "MF_ARN-152318_Jun_2022.pdf"],
    ["Jul - 2022", "MF_ARN-152318_Jul_2022.pdf"],
    ["Aug - 2022", "MF_ARN-152318_Aug_2022.pdf"],
    ["Sep - 2022", "MF_ARN-152318_Sep_2022.pdf"],
    ["Oct - 2022", "MF_ARN-152318_Oct_2022.pdf"],
    ["Nov - 2022", "MF_ARN-152318_Nov_2022.pdf"],
    ["Dec - 2022", "MF_ARN-152318_Dec_2022.pdf"],
    ["Jan - 2023", "MF_ARN-152318_Jan_2023.pdf"],
    ["Feb - 2023", "MF_ARN-152318_Feb_2023.pdf"],
    ["Mar - 2023", "MF_ARN-152318_Mar_2023.pdf"],
  ]
  const fixeddepositsbondsData = [
    ["Sep - 2020", "FN_ARN-152318_Sep_2020.pdf"],
    ["Oct - 2020", "FN_ARN-152318_Oct_2020.pdf"],
    ["Nov - 2020", "FN_ARN-152318_Nov_2020.pdf"],
    ["Dec - 2020", "FN_ARN-152318_Dec_2020.pdf"],
    ["Jan - 2021", "FN_ARN-152318_Jan_2021.pdf"],
    ["Feb - 2021", "FN_ARN-152318_Feb_2021.pdf"],
    ["Mar - 2021", "FN_ARN-152318_Mar_2021.pdf"],
    ["Apr - 2021", "FN_ARN-152318_Apr_2021.pdf"],
    ["May - 2021", "FN_ARN-152318_May_2021.pdf"],
    ["Jun - 2021", "FN_ARN-152318_Jun_2021.pdf"],
    ["Jul - 2021", "FN_ARN-152318_Jul_2021.pdf"],
    ["Aug - 2021", "FN_ARN-152318_Aug_2021.pdf"],
    ["Sep - 2021", "FN_ARN-152318_Sep_2021.pdf"],
    ["Oct - 2021", "FN_ARN-152318_Oct_2021.pdf"],
    ["Nov - 2021", "FN_ARN-152318_Nov_2021.pdf"],
    ["Dec - 2021", "FN_ARN-152318_Dec_2021.pdf"],
    ["Jan - 2022", "FN_ARN-152318_Jan_2022.pdf"],
    ["Feb - 2022", "FN_ARN-152318_Feb_2022.pdf"],
    ["Mar - 2022", "FN_ARN-152318_Mar_2022.pdf"],
    ["Apr - 2022", "FN_ARN-152318_Apr_2022.pdf"],
    ["May - 2022", "FN_ARN-152318_May_2022.pdf"],
    ["Jun - 2022", "FN_ARN-152318_Jun_2022.pdf"],
    ["Jul - 2022", "FN_ARN-152318_Jul_2022.pdf"],
    ["Aug - 2022", "FN_ARN-152318_Aug_2022.pdf"],
    ["Sep - 2022", "FN_ARN-152318_Sep_2022.pdf"],
    ["Oct - 2022", "FN_ARN-152318_Oct_2022.pdf"],
    ["Nov - 2022", "FN_ARN-152318_Nov_2022.pdf"],
    ["Dec - 2022", "FN_ARN-152318_Dec_2022.pdf"],
    ["Jan - 2023", "FN_ARN-152318_Jan_2023.pdf"],
    ["Feb - 2023", "FN_ARN-152318_Feb_2023.pdf"],
    ["Mar - 2023", "FN_ARN-152318_Mar_2023.pdf"],
  ]
  const npsData = [
    ["Sep - 2020", "NPS_ARN-152318_Sep_2020.pdf"],
    ["Oct - 2020", "NPS_ARN-152318_Oct_2020.pdf"],
    ["Nov - 2020", "NPS_ARN-152318_Nov_2020.pdf"],
    ["Dec - 2020", "NPS_ARN-152318_Dec_2020.pdf"],
    ["Jan - 2021", "NPS_ARN-152318_Jan_2021.pdf"],
    ["Feb - 2021", "NPS_ARN-152318_Feb_2021.pdf"],
    ["Mar - 2021", "NPS_ARN-152318_Mar_2021.pdf"],
    ["Apr - 2021", "NPS_ARN-152318_Apr_2021.pdf"],
    ["May - 2021", "NPS_ARN-152318_May_2021.pdf"],
    ["Jun - 2021", "NPS_ARN-152318_Jun_2021.pdf"],
    ["Jul - 2021", "NPS_ARN-152318_Jul_2021.pdf"],
    ["Aug - 2021", "NPS_ARN-152318_Aug_2021.pdf"],
    ["Sep - 2021", "NPS_ARN-152318_Sep_2021.pdf"],
    ["Oct - 2021", "NPS_ARN-152318_Oct_2021.pdf"],
    ["Nov - 2021", "NPS_ARN-152318_Nov_2021.pdf"],
    ["Dec - 2021", "NPS_ARN-152318_Dec_2021.pdf"],
    ["Jan - 2022", "NPS_ARN-152318_Jan_2022.pdf"],
    ["Feb - 2022", "NPS_ARN-152318_Feb_2022.pdf"],
    ["Mar - 2022", "NPS_ARN-152318_Mar_2022.pdf"],
    ["Apr - 2022", "NPS_ARN-152318_Apr_2022.pdf"],
    ["May - 2022", "NPS_ARN-152318_May_2022.pdf"],
    ["Jun - 2022", "NPS_ARN-152318_Jun_2022.pdf"],
    ["Jul - 2022", "NPS_ARN-152318_Jul_2022.pdf"],
    ["Aug - 2022", "NPS_ARN-152318_Aug_2022.pdf"],
    ["Sep - 2022", "NPS_ARN-152318_Sep_2022.pdf"],
    ["Oct - 2022", "NPS_ARN-152318_Oct_2022.pdf"],
    ["Nov - 2022", "NPS_ARN-152318_Nov_2022.pdf"],
    ["Dec - 2022", "NPS_ARN-152318_Dec_2022.pdf"],
    ["Jan - 2023", "NPS_ARN-152318_Jan_2023.pdf"],
    ["Feb - 2023", "NPS_ARN-152318_Feb_2023.pdf"],
    ["Mar - 2023", "NPS_ARN-152318_Mar_2023.pdf"],
  ]
  const [InvoiceData, setInvoiceData] = useState(mutualfundsData);
  const [selectedOption, setSelectedOption] = useState('mf');
  return (
    <div className="p-[20px]">
      <div className="w-full flex-col justify-center items-center rounded-[15px] bg-[#FFFFFF] ">
        <div className="flex gap-x-[10px] items-center justify-start p-[20px]">
            <Arrow left={true} active={true}/>
            <div className="text-[20px] font-semibold">Partner Invoice Report (Brokerage)</div>
        </div>
        <div className="flex gap-[10px] pl-[20px]">
            <button className={`flex h-[34px] w-[130px] ${selectedOption==='mf'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} text-[14px] font-bold rounded-lg rounded-b-none items-center justify-center`} onClick={()=>{setInvoiceData(mutualfundsData);setSelectedOption('mf')}}>Mutual Funds</button>
            <button className={`flex h-[34px] w-[195px] ${selectedOption==='fd'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} text-[14px] font-bold rounded-lg rounded-b-none items-center justify-center`} onClick={()=>{setInvoiceData(fixeddepositsbondsData);setSelectedOption('fd')}}>Fixed Deposits & Bonds</button>
            <button className={`flex h-[34px] w-[65px] ${selectedOption==='nps'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} text-[14px] font-bold rounded-lg rounded-b-none items-center justify-center`} onClick={()=>{setInvoiceData(npsData);setSelectedOption('nps')}}>NPS</button>
        </div>
        <CustomTable className={'p-0'} headers={['Invoice Month-Year', 'File', 'Action']} data={InvoiceData} />
      </div> 
    </div>
    
  )
}

export default PartnerInvoiceReportBrokerage