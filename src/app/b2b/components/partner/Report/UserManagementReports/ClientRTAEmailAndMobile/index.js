import {CustomSelectField} from "../../../../InputFields";
import {useState} from 'react';
import CustomTable from "../../../PartnerHome/CustomTable";
import {CustomTextField} from "../../../../InputFields";

function ClientRTAEmailAndMobile() {
  const [ClientRtaEmailandMobile, setClientRtaEmailandMobile] = useState('Pan'); 
  const handleRtaChange = (event) => {
    const value = event.target.value;
    setClientRtaEmailandMobile(value);
  };
  const ClientRtaOptions = ['Pan','Mobile Number','Email','Folio Number'];

  const [Pan,setPan] = useState('BQ6653728');
  const handlePanChange = (event) => {
    const value = event.target.value;
    setPan(value);
  };
  const ClientRTAEmailandMobile = [
    ["11281516","PPFAS Asset Management Pvt.Ltd","Parag Parikh Flexi Cap Fund-Reg(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["11281516","PPFAS Asset Management Pvt.Ltd","Parag Parikh Flexi Cap Fund-Reg(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["18034942/28","HDFC Asset Management Company Limited","HDFC Short Term Debt Fund(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["18497710/85","ICICI Prudential Asset Management Company Limited","ICICI Pru Ultra Short Term Fund Fund(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["18497710/85","ICICI Prudential Asset Management Company Limited","ICICI Pru Ultra Short Term Fund Fund(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["18497710/85","ICICI Prudential Asset Management Company Limited","ICICI Pru Ultra Short Term Fund Fund(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["910123220902","Axis Asset Management Company Ltd.","Axis TreasuryAdvantage Fund-Reg(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["910123220902","Axis Asset Management Company Ltd.","Axis TreasuryAdvantage Fund-Reg(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["910123220902","Axis Asset Management Company Ltd.","Axis Bluechip Fund- Reg(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"],
    ["18497710/85","ICICI Prudential Asset Management Company Limited","ICICI Pru NASDAQ 100 Index Fund(G)","Akshay k","BQ6653728","akshay.dx93@gmail.com","986763678"]
]

    return (
      <div className="p-[20px]">
        <div className="pb-[20px]">
            <div className="rounded-[20px] bg-[#ffffff]">
              <div className="font-semibold pl-[36.6px] p-[20px] text-[20px]">Client RTA Email and Mobile</div>
              <div className="grid grid-cols-2 gap-8  p-[20px]">
                <CustomSelectField label="User Email" value={ClientRtaEmailandMobile} valueOptions={ClientRtaOptions} handleChange={handleRtaChange}/>
                <CustomTextField label="Pan" value={Pan} handleChange={handlePanChange}/>
              </div>
              <div className="pl-[20px] pb-[20px] w-full">
                <button className="rounded-[25px] bg-[#0071E7] px-[30px] py-[10px] text-[#FFFFFF]">Submit</button>
              </div>
            </div>
            <div className="pt-[41px] pb-[15px] flex">
              <div>As on 13 Oct 2023</div>
            </div>
        </div>
        {(() => {
            return (
              <CustomTable className={''} headers={['Folio Number','AMC Name','Scheme Name','Investor Name','PAN Number','Email ID','Mobile Number']} data={ClientRTAEmailandMobile} />
            )
        })()}
      </div>
  );
}

export default ClientRTAEmailAndMobile;