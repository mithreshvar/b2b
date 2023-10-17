
import {CustomTextField} from "../../../../InputFields";
import {useState} from 'react';
import CustomTable from "../../../PartnerHome/CustomTable";
import Arrow from "/public/partner/Arrow.js";

function ValuationReport() {
  const [Valuation,setValuation] = useState('Santosh@gmail.com');
  const handleChange = (event) => {
    const value = event.target.value;
    setValuation(value);
  };
  const [Pan, setpan] = useState('PM738938292');
  const handlePanChange = (event) => {
    const value = event.target.value;
    setpan(value);
  };
  const ValuationReport =[
    ["Santosh Venkatachalam","Mutual Funds","10,000","2,000","1,000","25%"],
    ["","Equity","80,000","2,000","1,000","10%"],
    ["","Fixed Deposit","10,000","2,000","1,000","25%"],
    ["","NPS","80,000","3,000","1,000","10%"],
    ["","Insurence","10,000","2,000","1,000","25%"],
    ["Dattatraya Kulkarni","Mutual Funds","10,000","2,000","1,000","25%"],
    ["","Equity","80,000","2,000","1,000","10%"],
    ["Shantha Narayanan","Mutual Funds","10,000","2,000","1,000","25%"],
    ["","Equity","80,000","2,000","1,000","10%"],
    ["","Fixed Deposit","10,000","2,000","1,000","25%"],
    ["","NPS","80,000","3,000","1,000","10%"]
]
  return (
    <div className="p-[20px]">
      <div className="pb-[20px]">
          <div className="rounded-[20px] bg-[#ffffff]">
            <div className="flex items-center gap-x-[10px] p-[20px]">
            <Arrow left={true} active={true}/>
              <h1 className="font-semibold  text-[20px]">ValuationReports</h1>
            </div>
            <div className="flex gap-x-[50px] pl-[20px] pb-[20px]">
              <CustomTextField label="User Email/Mobile" value={Valuation} handleChange={handleChange}/>
              <CustomTextField label="Pan" value={Pan} handleChange={handlePanChange}/>
            </div>
            <div className="pl-[20px] pb-[20px]">
              <button className="rounded-[25px] bg-[#0071E7] px-[30px] py-[10px] text-[#FFFFFF]">Submit</button>
            </div>
          </div>
      </div>
      {(() => {
          return (
            <CustomTable className={'p-0'} headers={['Investor Names','Product','Current Value','Gain','Today’s Changes','Annualized return']} data={ValuationReport} />
          )
      })()}
    </div>
  );
}

export default ValuationReport;