import CustomSelectField from "../../InputFields";
import { useState } from "react";
import CustomTable from "../PartnerHome/CustomTable";
import Arrow from "/public/partner/Arrow.js";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
function Brokerage() {

 
    const [amc, setAMC] = useState("");
    const [schemeCategory,setSchemeCategory]=useState("");
    const [amcErrorMessage, setAmcErrorMessage] = useState("");
    const [schemeCategoryErrorMessage,setSchemeCategoryErrorMessage]=useState("");
    const [showTable,setShowTable]=useState(false);
    const [showInvoice,setShowInvoice]=useState(false);

    let data = [
        ['HDFC Arbitrage-WP(G)', '01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29']

    ]


    const handleAmcChange = (event) => {
        const value = event.target.value;
        setAMC(value);
        if (value === "") {
            setAmcErrorMessage("Select an AMC");
        }
        else {
            setAmcErrorMessage("");
        }
      };

      const handleSChemeCategoryChange=(event)=>{
         const val=event.target.value;
         setSchemeCategory(val);
         if(val===""){
            setSchemeCategoryErrorMessage("Select an Scheme Category");
         }
         else{
            setSchemeCategoryErrorMessage("");
         }
      }
      const openTable=()=>{
        if (amc == '') setAmcErrorMessage("Select an AMC")
        if (schemeCategory == '') setSchemeCategoryErrorMessage("Select an Scheme Category")
        if (amcErrorMessage=='' && schemeCategoryErrorMessage == '' && amc != '' && schemeCategory != '')
           setShowTable(true);
      }

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

    const amcOptions = ['HDFC Mutual Funds', 'Axis Bank Mutual Fund', 'SBI Mutual Fund','IDBI Bank','IDBI First Bank Limited','Canara Bank','Nippon Life India Assets'];
    const schemeCategoryOptions=['All','Debit','Equity','Gold','Hybrid','Liquid','Others'];
    return (
        <div className="m-[20px] overflow-scroll">
        {(showInvoice)?
            <div className="p-[20px] w-full flex-col justify-center items-center rounded-[15px] bg-[#FFFFFF] ">
                <div className="flex justify-between">
                    <div className="text-[20px] font-semibold pb-[20px]">Download Invoice</div>
                    <button className="flex items-center" onClick={()=>{setShowInvoice(false)}}>
                        <Arrow left={true} active={true}/>
                        <div className="text-[#0066CD] text-[16px] font-semibold ml-[6px]">Back</div>
                    </button>
                </div>
                <div className="flex gap-[10px]">
                    <button className={`flex h-[34px] w-[130px] ${selectedOption==='mf'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} text-[14px] font-bold rounded-lg rounded-b-none items-center justify-center`} onClick={()=>{setInvoiceData(mutualfundsData);setSelectedOption('mf')}}>Mutual Funds</button>
                    <button className={`flex h-[34px] w-[195px] ${selectedOption==='fd'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} text-[14px] font-bold rounded-lg rounded-b-none items-center justify-center`} onClick={()=>{setInvoiceData(fixeddepositsbondsData);setSelectedOption('fd')}}>Fixed Deposits & Bonds</button>
                    <button className={`flex h-[34px] w-[65px] ${selectedOption==='nps'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} text-[14px] font-bold rounded-lg rounded-b-none items-center justify-center`} onClick={()=>{setInvoiceData(npsData);setSelectedOption('nps')}}>NPS</button>
                </div>
                <CustomTable className={'p-0'} headers={['Invoice Month-Year', 'File', 'Action']} data={InvoiceData} />
            </div>
            :
            <>
            <div className=" w-full flex-col justify-center items-center rounded-[15px] bg-[#FFFFFF]">
                <div className="p-[20px]">
                        <div className="text-[20px] text-[#000000] font-semibold mb-[20px]">Revenue Share Percentage</div>
                        <div className="flex  space-x-[50px] items-center">
                            <CustomSelectField label="AMC" value={amc} valueOptions={amcOptions} errorMessage={amcErrorMessage} handleChange={handleAmcChange} />
                            <CustomSelectField label="Scheme Category" value={schemeCategory} valueOptions={schemeCategoryOptions} errorMessage={schemeCategoryErrorMessage} handleChange={handleSChemeCategoryChange} />
                        </div>
                        <div className="flex justify-between items-center mt-[20px]">
                            <button className="w-[144px] h-[40px] rounded-[25px] bg-[#0071E7] text-[#FFFFFF] text-[14px] flex  items-center justify-center font-bold" onClick={openTable}><p>Show Brokerage</p></button>
                            <button className="h-[40px] text-[#0066CD] text-[16px] font-bold flex gap-x-[5px]" onClick={()=>{setShowInvoice(true)}}><DownloadRoundedIcon />Download Invoice</button>
                        </div>
                </div>
            </div>
            {showTable &&
            <div className="mt-[20px]">
                <CustomTable headers={['Scheme Name', 'From', 'To', 'Trail']} data={data} />
            </div>
            }
            </>
        }
        </div>
    );
}

export default Brokerage;