import {CustomSelectField} from "../../../../InputFields";
import {useState} from 'react';
import CustomTable from "../../../PartnerHome/CustomTable";
import {CustomTextField} from "../../../../InputFields";
import Image from "next/image";
import Arrow from "public/partner/Group 508900.svg";

function ClientRTAEmailAndMobile( {setActive} ) {
  const ClientRtaOptions = ['PAN','Mobile Number','Email','Folio Number'];
  const [ClientRtaEmailandMobile, setClientRtaEmailandMobile] = useState(ClientRtaOptions[0]); 
  const handleRtaChange = (event) => {
    const value = event.target.value;
    setClientRtaEmailandMobile(value);
  };
  

  const [Pan,setPan] = useState('');
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
              <div className="flex items-center gap-x-[10px] p-[20px]">
                <Image className="cursor-pointer" src={Arrow} onClick={()=>setActive('UserManagementReports')}/>
                <h1 className="text-[20px] font-semibold">Client RTA Email and Mobile</h1>
              </div>
              <div className="flex gap-x-[50px] pl-[20px] pb-[20px]">
                <CustomSelectField label="Search by" value={ClientRtaEmailandMobile} valueOptions={ClientRtaOptions} handleChange={handleRtaChange}/>
                <CustomTextField label={ClientRtaEmailandMobile} value={Pan} handleChange={handlePanChange}/>
              </div>
              <div className="pl-[20px] pb-[20px]">
                <button className="rounded-[25px] bg-[#0071E7] px-[30px] py-[10px] text-[#FFFFFF]">Submit</button>
              </div>
            </div>
            <div className="pt-[41px] flex">
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