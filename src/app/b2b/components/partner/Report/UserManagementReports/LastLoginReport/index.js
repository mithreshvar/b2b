import { useState } from "react";
import Arrow from "/public/partner/Arrow";
import {CustomTextField} from "../../../../InputFields";
import CustomTable from "../../../PartnerHome/CustomTable";

function LastLoginReport() {
  const LastloginReport =[
    ["Abhijit Sinha Roy","nuthalapatip@vahoo.com","04 Oct 2023 20:17:29","Web"],
    ["Adarsh Dattani","gvbhas@gmail.com","06 Oct 2023 20:17:29","MWeb"],
    ["Aditya Kittur","nuthalapatip@vahoo.com","02 Oct 2023 20:17:29","MWeb"],
    ["Akila Mohan","nuthalapatip@vahoo.com","01 Oct 2023 20:17:29","MWeb"],
    ["Akshav K","nuthalapatip@vahoo.com","09 Oct 2023 20:17:29","Web"],
    ["Anand Ekambaram","gvbhas@gmail.com","01 Oct 2023 20:17:29","Web"],
    ["Anil Sanadhya","nuthalapatip@vahoo.com","07 Oct 2023 20:17:29","Web"],
    ["Anitha Chandramouli","nuthalapatip@vahoo.com","01 Oct 2023 20:17:29","Web"],
    ["Anu Krishnamoorthy","vakkadala@yahoo.com","02 Oct 2023 20:17:29","Web"],
    ["Apraiit Sharma","Jayantdeodhar@gmail.com","07 Oct 2023 20:17:29","Web"]
  ]
  const [value, setvalue] = useState('')
  const [tableData, setTableData] = useState(LastloginReport);
  function filterData() {
    const valueReg = new RegExp(value.trim(), 'i'); // Case-insensitive regex for name
    const filteredData = LastloginReport.filter((item) => {
      // Check if the name, email, and number match the provided regex patterns
        return (
            (value === '' || valueReg.test(item[0]) || valueReg.test(item[1])) 
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
          <h1 className="text-[20px] font-semibold leading-[20px]">Last Login Report</h1>
        </div>
        <div className="flex text-[14px] font-bold gap-x-[20px]">
          <CustomTextField label='Email/Mobile/Scheme Name' value={value} handleChange={(event)=>{setvalue(event.target.value)}}/>
          <button className="w-[108px] h-[40px] bg-[#0071E7] text-white  rounded-[25px]" onClick={filterData}>Search</button>
          <button className="w-[158px] h-[40px] border-[1px] border-[#0071E7] text-[#0066CD] rounded-[25px]">Download as Excel</button>
        </div>
      </div>
      <CustomTable headers={['User Name','Email','Last Login','Last Login Device']} data={tableData}/>
    </div>
  );
}

export default LastLoginReport;