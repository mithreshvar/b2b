import CustomSelectField from "../../InputFields";
import { useState } from "react";
import CustomTable from "../PartnerHome/CustomTable";
function Brokerage() {

 
    const [amc, setAMC] = useState("");
    const [schemeCategory,setSchemeCategory]=useState("");
    const [amcErrorMessage, setAmcErrorMessage] = useState("");
    const [schemeCategoryErrorMessage,setSchemeCategoryErrorMessage]=useState("");
    const [showTable,setShowTable]=useState(false);
    let data = [
        ['HDFC Arbitrage-WP(G)', '01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Develoned World Indexes FoF-ReaG','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Arbitrage-WP(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29' ],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29'],
        ['HDFC Credit Risk Debt Fund-(G)','01/07/2023', '30/09/2023', '0.29', '0.29', '0.29','0.29','0.29','0.29']

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
           setShowTable(true);
      }


    const amcOptions = ['HDFC Mutual Funds', 'Axis Bank Mutual Fund', 'SBI Mutual Fund','IDBI Bank','IDBI First Bank Limited','Canara Bank','Nippon Life India Assets'];
    const schemeCategoryOptions=['All','Debit','Equity','Gold','Hybrid','Liquid','Others'];
    return (
        <div className="m-[20px] overflow-scroll">
            <div className=" w-full flex-col justify-center items-center rounded-[15px] bg-[#FFFFFF]">
                <div className="p-[20px]">
                        <div className="text-[20px] text-[#000000] font-semibold mb-[20px]">Revenue Share Percentage</div>
                        <div className="flex  space-x-[50px] items-center">
                            <CustomSelectField label="AMC" value={amc} valueOptions={amcOptions} errorMessage={amcErrorMessage} handleChange={handleAmcChange} />
                            <CustomSelectField label="Scheme Category" value={schemeCategory} valueOptions={schemeCategoryOptions} errorMessage={schemeCategoryErrorMessage} handleChange={handleSChemeCategoryChange} />
                        </div>
                        <button className="w-[144px] h-[40px] mt-[20px] rounded-[25px] bg-[#0071E7] text-[#FFFFFF] text-[14px] flex  items-center justify-center" onClick={openTable}><p>Show Brokerage</p></button>
                </div>
            </div>{showTable&&
            <div className="m-[20px]">
                <CustomTable headers={['Scheme Name', 'From', 'To', 'T1Y', 'T2Y', 'T3Y', 'T4Y', 'T5Y Onwards', 'TaddB30']} data={data} />
            </div>
             }
        </div>
    );
}

export default Brokerage;