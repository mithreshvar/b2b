import { useState } from "react";
import Arrow from "/public/partner/Arrow";
import {CustomSelectField} from "../../../../InputFields";
import CustomTable from "../../../PartnerHome/CustomTable";

function BirthdayDetails( {setActive} ) {
  const birthdayDetails =[
    ["Nuthalapati Babu Sivaprasad","nuthalapatip@vahoo.com","955065643","09 Aug 2023"],
    ["Vijava Bhaskar G","gvbhas@gmail.com","955065643","10 Aug 2023"],
    ["V Bharathram","nuthalapatip@vahoo.com","955065643","12 Aug 2023"],
    ["Ashwini Hiren Doshi","nuthalapatip@vahoo.com","955065643","14 Aug 2023"],
    ["Nuthalapati Babu Sivaprasad","nuthalapatip@vahoo.com","955065643","15 Aug 2023"],
    ["Vijava Bhaskar G","gvbhas@gmail.com","955065643","17 Aug 2023"],
    ["V Bharathram","nuthalapatip@vahoo.com","955065643","19 Aug 2023"],
    ["Ashwini Hiren Doshi","nuthalapatip@vahoo.com","955065643","20 Aug 2023"],
    ["Madhumitha Vakkadala","vakkadala@yahoo.com","955065643","21 Aug 2023"],
    ["Jayant Vithal Deodhar","Jayantdeodhar@gmail.com","955065643","25 Aug 2023"]
]
  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(birthdayDetails);
  function filterData() {
    const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = birthdayDetails.filter((item) => {
      // Check if the name, email, and number match the provided regex patterns
        return (
            (value === '' || valueReg.test(item[3])) 
        );
    });
    // Now, 'filteredData' contains the filtered data based on the provided criteria.
    setTableData(filteredData);
  }
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <div className="flex flex-col p-[20px] gap-y-[20px]" >
      <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-y-[20px]">
        <div className="flex items-center gap-x-[10px]">
          <button onClick={()=>setActive('UserManagementReports')}><Arrow left={true} active={true}/></button>
          <h1 className="text-[20px] font-semibold leading-[20px]">Birthday Details</h1>
        </div>
        <div className="flex text-[14px] font-bold gap-x-[20px]">
          <CustomSelectField label='Month' valueOptions={months} value={value} handleChange={(event)=>{setvalue(event.target.value)}}/>
          <button className="w-[108px] h-[40px] bg-[#0071E7] text-white  rounded-[25px]" onClick={filterData}>Search</button>
          <button className="w-[158px] h-[40px] border-[1px] border-[#0071E7] text-[#0066CD] rounded-[25px]">Download as Excel</button>
        </div>
      </div>
      <CustomTable headers={['Investor name','Email','Mobile number','Date of birth']} data={tableData}/>
    </div>
  );
}

export default BirthdayDetails;