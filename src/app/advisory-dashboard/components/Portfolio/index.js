import Image from "next/image";
import { CustomTextField } from "../InputFields";
import SearchIcon from '@mui/icons-material/Search';
import data from './data.json';
import { useRef, useState } from "react";
import CheckBoxName from "./CheckBoxName";
import { Checkbox } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import rightArrow from "/public/Group 547353.svg";
import leftArrow from "/public/Group 547354.svg";
import whatsappIcon from "/public/Group 549708.svg";
import telegramIcon from "/public/Path 238665.svg";
import { useDraggable } from "react-use-draggable-scroll";
import { useDataContext } from "../../context/DataContext";

export default function Portfolio() {

    const {navOpen} = useDataContext()

    // for(let i in data) {
    //     console.log(i)
    //     if (typeof data[i] == 'object') {
    //         for (let j in data[i]) console.log(j)
    //     }
    // }

    //Navigation REFS FOR NAVIGARION BAR
    const tablesNavbarRef = useRef(null);
    const navBasicDetailsRef = useRef(null);
    const navAssetAllocationRef = useRef(null);
    const navCashAllocationRef = useRef(null);
    const navPortfolioQualityRef = useRef(null);
    const navDiversificationRiskRef = useRef(null);
    const navLiquidityRef = useRef(null);
    const navCostRef = useRef(null);
    const navEquityMonitorRef = useRef(null);
    const navDebtMonitorRef = useRef(null);
    const navSIPBookRef = useRef(null);

    //TABLE REFS FOR NAVIGARION BAR
    const tablesContainerRef = useRef(null);
    const tableBasicDetailsRef = useRef(null);
    const tableAssetAllocationRef = useRef(null);
    const tableCashAllocationRef = useRef(null);
    const tablePortfolioQualityRef = useRef(null);
    const tableDiversificationRiskRef = useRef(null);
    const tableLiquidityRef = useRef(null);
    const tableCostRef = useRef(null);
    const tableEquityMonitorRef = useRef(null);
    const tableDebtMonitorRef = useRef(null);
    const tableSIPBookRef = useRef(null);


    const { events } = useDraggable(tablesNavbarRef);


    // TABLE BODY REFS FOR SCROLL
    const tableNameRef = useRef();
    const tableBasicDetailsBodyRef = useRef();
    const tableAssetAllocationBodyRef = useRef();
    const tableCashAllocationBodyRef = useRef();
    const tablePortfolioQualityBodyRef = useRef();
    const tableDiversificationRiskBodyRef = useRef();
    const tableLiquidityBodyRef = useRef();
    const tableCostBodyRef = useRef();
    const tableEquityMonitorBodyRef = useRef();
    const tableDebtMonitorBodyRef = useRef();
    const tableSIPBookBodyRef = useRef();

    function handleScroll(pos) {
        tableNameRef.current.scroll({top: pos});
        tableBasicDetailsBodyRef.current.scroll({top: pos});
        tableAssetAllocationBodyRef.current.scroll({top: pos});
        tableCashAllocationBodyRef.current.scroll({top: pos});
        tablePortfolioQualityBodyRef.current.scroll({top: pos});
        tableDiversificationRiskBodyRef.current.scroll({top: pos});
        tableLiquidityBodyRef.current.scroll({top: pos});
        tableCostBodyRef.current.scroll({top: pos});
        tableEquityMonitorBodyRef.current.scroll({top: pos});
        tableDebtMonitorBodyRef.current.scroll({top: pos});
        tableSIPBookBodyRef.current.scroll({top: pos});
    }

    let tableNames = ['basicDetails','assetAllocationRisk','cashAllocation','portfolioQualityRisk','diversityRisk','liquidity','cost','equityMonitor','debtMonitor','sipBook'];
    let refTable = [tableBasicDetailsRef, tableAssetAllocationRef, tableCashAllocationRef, tablePortfolioQualityRef, tableDiversificationRiskRef, tableLiquidityRef, tableCostRef, tableEquityMonitorRef, tableDebtMonitorRef, tableSIPBookRef]
    let refNav = [navBasicDetailsRef, navAssetAllocationRef, navCashAllocationRef, navPortfolioQualityRef, navDiversificationRiskRef, navLiquidityRef, navCostRef, navEquityMonitorRef, navDebtMonitorRef, navSIPBookRef]


    const [selectedOption,setSelectedOption]=useState("basicDetails");
    const [loadingScroll, setLoadingScroll] = useState(false);

    const handleTableBodyScroll = event => {
        if (loadingScroll) return;

        let i = tableNames.findIndex((e) => e === selectedOption)
        let start = refTable[i].current.offsetLeft - tableBasicDetailsRef.current.offsetLeft;
        let end = refTable[i].current.offsetLeft - tableBasicDetailsRef.current.offsetLeft + refTable[i].current.offsetWidth;
        let current;

        let paddingLeftForLastNav = tablesNavbarRef.current.offsetWidth + refNav[i].current.offsetLeft - ( navSIPBookRef.current.offsetLeft + navSIPBookRef.current.offsetWidth + 10 );

        if (tablesNavbarRef.current.offsetWidth + refNav[i].current.offsetLeft - navSIPBookRef.current.offsetLeft > 0 ){
            current = event.currentTarget.scrollLeft + paddingLeftForLastNav + (refNav[i].current.offsetWidth /2) + 10;
        }
        else {
            current = event.currentTarget.scrollLeft + (refNav[i].current.offsetWidth/2);
        }
        // console.log( current, paddingLeftForLastNav + (refNav[i].current.offsetWidth /2) + 10, tablesNavbarRef.current.offsetWidth + refNav[i].current.offsetLeft - navSIPBookRef.current.offsetLeft > 0 , "start : " + start, " end : " + end )

        if (true) {
            if ( current > end) {
                handleSelectOption(tableNames[i+1], i+1);
            }
            else if ( current < start) {
                handleSelectOption(tableNames[i-1], i-1);
            }
        }
    };

    function scrollRefIntoView(i) {

        let paddingLeftForLastNav = tablesNavbarRef.current.offsetWidth + refNav[i].current.offsetLeft - ( navSIPBookRef.current.offsetLeft + navSIPBookRef.current.offsetWidth + 10 );

        if (tablesNavbarRef.current.offsetWidth + refNav[i].current.offsetLeft - navSIPBookRef.current.offsetLeft > 0 && refTable[i].current.offsetWidth<paddingLeftForLastNav) {
            tablesContainerRef.current.scroll({left: (refTable[i].current.offsetLeft - tableBasicDetailsRef.current.offsetLeft) - paddingLeftForLastNav, behavior: "smooth"})
        }
        else {
            tablesContainerRef.current.scroll({left: refTable[i].current.offsetLeft - tableBasicDetailsRef.current.offsetLeft, behavior: "smooth"})
        }
        tablesNavbarRef.current.scroll({left: refNav[i].current.offsetLeft - navBasicDetailsRef.current.offsetLeft, behavior: "smooth"})

        // if (tablesNavbarRef.current.offsetWidth + refNav[i].current.offsetLeft - navSIPBookRef.current.offsetLeft > 0 ){
        //     console.log(paddingLeftForLastNav + (refNav[i].current.offsetWidth /2) + tablesNavbarRef.current.offsetLeft + 10) 
        // }
        // else{
        //     console.log(refNav[i].current.offsetLeft + (refNav[i].current.offsetWidth /2) + (tablesNavbarRef.current.offsetLeft-refNav[i].current.offsetLeft) , tablesNavbarRef.current.offsetLeft-refNav[i].current.offsetLeft)
        // }
    }

    function handleSelectOption(option, i) {
        if (loadingScroll) return;

        setLoadingScroll(true);
        setSelectedOption(option);
        scrollRefIntoView(i)
        setTimeout( () => setLoadingScroll(false), 1000);
    }

    function handleArrows(direction) {
        
        if (loadingScroll) return;
        
        let i = tableNames.findIndex((e) => e === selectedOption) + direction;
        setLoadingScroll(true);
        if (i < tableNames.length && i >= 0) {
            scrollRefIntoView(i);
            setSelectedOption(tableNames[i])
        }
        setTimeout( () => setLoadingScroll(false), 500);

    }
    

    const [checked, setChecked] = useState([false,false,false,false,false]);
    const [selectAll, setSelectAll] = useState(false);
    const handleChecked = i => {
        setChecked(checked.map((e, index) => {
            if (index == i) return !e;
            return e;
        }))
    }
    const handleCheckAll = (val) => {
        setChecked(Array(checked.length).fill(val));
    }

    const [showClientInfo, setShowClientInfo] = useState(-1);

    return (
        <div className="bg-white m-[20px] rounded-[10px] p-[20px] h-[calc(100vh-104px)]">
            <div className="flex justify-between items-center pb-[30px] pt-[10px]">
                <h1 className="text-[18px] font-bold leading-[20px]">Client Portfolio Monitor</h1>
                <div className="flex gap-x-[20px]">
                    <CustomTextField width="309px" label={<div className="flex gap-x-[8px] justify-center items-center"><SearchIcon className="text-[20px] text-[#0071E7]" /><p>Search</p></div>} />
                    <button className="flex items-center justify-center border-[1px] border-[#E4E5E5] hover:border-[#6f7070] rounded-[7px] gap-x-[10px] h-[40px] w-[100px]"><div className="text-[14px] text-[#6E6E72] font-medium leading-[18px]">Filter</div></button>
                </div>
            </div>
            
            <div className="flex">
                <div className="w-[210px] ml-[-15px]">
                    <div className="flex gap-x-[15.68px] h-[34px] items-center pl-[10px]">
                        <div className="text-[14px] text-[#6E6E72]">Share via</div>
                        <Image src={whatsappIcon}/>
                        <Image src={telegramIcon}/>
                    </div>
                    <table>
                    <thead>
                    <th className="h-[54px] max-w-[192px] pt-[10px] flex items-center text-[12px] text-[#6E6E72] font-normal">
                        <Checkbox 
                            checked={selectAll} 
                            onChange={(e)=> {
                                setSelectAll(e.target.checked); 
                                handleCheckAll(e.target.checked) 
                            }}
                            sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: '20px',
                                },
                                color: '#c2c2c5',
                                margin: "-5px"
                            }}
                        />
                        <p>Client Name</p>
                    </th>
                    </thead>

                    <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar z-[0]" ref={tableNameRef} onScroll={()=>{handleScroll(tableNameRef.current.scrollTop) }}>
                    <tbody >
                        {
                            data.clients.map( (client, i) => 
                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                    <CheckBoxName index={i} checked={checked} handleChecked={handleChecked} /> 
                                    <p>{client["Client Name"]}</p>
                                    <div onMouseOver={()=>setShowClientInfo(i)} onMouseLeave={()=>setShowClientInfo(-1)} className="relative">
                                        <InfoOutlinedIcon className="ml-[5px] mb-[-2px] text-[13px] text-primary " />
                                            <div className={` ${(showClientInfo == i) ? "opacity-100 cursor-auto": 'opacity-0 hidden'} absolute flex flex-col h-auto w-[250px] top-[20px] left-[-125px] bg-white rounded-[10px] shadow-[0px_3px_8px_#00000026] z-[3] `}>
                                                <h6 className="h-[40px] border-b-[1px] border-[#f6f6f6] px-[20px] py-[10px] ">{client["Client Name"]}</h6>
                                                <div className="py-[10px] px-[20px] flex-col flex gap-y-[10px]">
                                                    <p>Email : {client["Email"]}</p>
                                                    <p>Mobile : {client["Mobile"]}</p>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </tr>
                            ) //<input value={''} type="checkbox" className="appearance-none  w-[16px] h-[16px] rounded-[3px] border-[2px] border-solid outline-none border-[#ceced0] checked:bg-primary" />
                        }
                    </tbody>
                    </div>

                    </table>
                
                </div>
                <div className="flex flex-col">
                    <div ref={tablesNavbarRef} {...events} className={`h-[44px] flex gap-x-[10px] overflow-x-scroll ${ navOpen ? ' w-[calc(100vw-507px)] ' : ' w-[calc(100vw-325px)] '} no-scrollbar text-[14px] text-[#BEBEBE] font-bold transition-all duration-[0.5s] `}> 
                        <button onMouseDown={null} ref={navBasicDetailsRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='basicDetails'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('basicDetails', 0)}}>
                            <p>Basic Details</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'basicDetails' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navAssetAllocationRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='assetAllocationRisk'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('assetAllocationRisk', 1)}}>
                            <p>Asset Allocation Risk</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'assetAllocationRisk' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navCashAllocationRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='cashAllocation'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('cashAllocation', 2)} }>
                            <p>Cash Allocation</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'cashAllocation' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navPortfolioQualityRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='portfolioQualityRisk'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('portfolioQualityRisk', 3)} }>
                            <p>Portfolio Quality Risk</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'portfolioQualityRisk' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navDiversificationRiskRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='diversityRisk'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('diversityRisk', 4)} }>
                            <p>Diversification Risk</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'diversityRisk' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navLiquidityRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='liquidity'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('liquidity', 5)} }>
                            <p>Liquidity</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'liquidity' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navCostRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='cost'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('cost', 6)} }>
                            <p>Cost</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'cost' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navEquityMonitorRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='equityMonitor'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('equityMonitor', 7)} }>
                            <p>Equity Monitor</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'equityMonitor' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navDebtMonitorRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='debtMonitor'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('debtMonitor', 8)} }>
                            <p>Debt Monitor</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'debtMonitor' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                        <button ref={navSIPBookRef} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption==='sipBook'?'bg-[#DCEBFE] text-[#0071E7]':'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={()=>{handleSelectOption('sipBook', 9)} }>
                            <p>SIP Book</p>
                            <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${ selectedOption == 'sipBook' ? ' opacity-100 ': ' opacity-0 '} `}/>
                        </button>

                    </div>

                    <div ref={tablesContainerRef} onScroll={handleTableBodyScroll} className={`flex overflow-x-scroll ${ navOpen ? ' w-[calc(100vw-507px)] ' : ' w-[calc(100vw-325px)] '} transition-all duration-[0.6s] p-[10px] pt-0 gap-x-[10px] no-scrollbar `}>

                        <div ref={tableBasicDetailsRef}  className={` ${ (selectedOption === 'basicDetails') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[130px] justify-end flex items-center text-[12px] text-[#6E6E72] font-normal pr-[10px]">AUM</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p className="w-[135px]">Net Inflow YTD (without MTM)</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p className="w-[135px]">Net Inflow Growth (without MTM)</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p className="w-[135px]">Since Inception Returns</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>RiskScore</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableBasicDetailsBodyRef} onScroll={()=>{handleScroll(tableBasicDetailsBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[130px] justify-end flex items-center pr-[10px]">{client["Basic Details"]["AUM"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Basic Details"]["Net Inflow YTD (without MTM)"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Basic Details"]["Net Inflow Growth (without MTM)"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Basic Details"]["Since Inception Returns"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Basic Details"]["RiskScore"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>
                        
                        <div ref={tableAssetAllocationRef} className={` ${ (selectedOption === 'assetAllocationRisk') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">ABC Number</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Equity Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Target Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Equity Exposure Deviation</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Debt Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Gold & Others Exposure</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableAssetAllocationBodyRef} onScroll={()=>{handleScroll(tableAssetAllocationBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["ABC Number"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Equity Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Target Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Equity Exposure Deviation"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Debt Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Asset Allocation Risk"]["Gold & Others Exposure"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div ref={tableCashAllocationRef} className={` ${ (selectedOption === 'cashAllocation') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">Overnight/Liquid Exposure</th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableCashAllocationBodyRef} onScroll={()=>{handleScroll(tableCashAllocationBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Cash Allocation"]["Overnight/Liquid Exposure"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div ref={tablePortfolioQualityRef} className={` ${ (selectedOption === 'portfolioQualityRisk') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">5 star rated funds</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>4 star rated funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Low Rated Fund</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Not Rated Fund Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>FundsIndia Select Fund Exposure</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tablePortfolioQualityBodyRef} onScroll={()=>{handleScroll(tablePortfolioQualityBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["5 star rated funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["4 star rated funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["Low Rated Fund"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["Not Rated Fund Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Portfolio Quality Risk"]["FundsIndia Select Fund Exposure"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div ref={tableDiversificationRiskRef} className={` ${ (selectedOption === 'diversityRisk') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">Highest AMC Exposure</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Highest Fund Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>2nd Highest Fund Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Total Number of Non Debt Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Total Number of Funds</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableDiversificationRiskBodyRef} onScroll={()=>{handleScroll(tableDiversificationRiskBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Diversification Risk"]["Highest AMC Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Diversification Risk"]["Highest Fund Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Diversification Risk"]["2nd Highest Fund Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Diversification Risk"]["Total Number of Non Debt Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Diversification Risk"]["Total Number of Funds"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div ref={tableLiquidityRef} className={` ${ (selectedOption === 'liquidity') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">% of Portfolio under lock-in</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>ELSS Exposure</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableLiquidityBodyRef} onScroll={()=>{handleScroll(tableLiquidityBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Liquidity"]["% of Portfolio under lock-in"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Liquidity"]["ELSS Exposure"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div ref={tableCostRef} className={`${ (selectedOption === 'cost') && "border-[#7EB7F270]  border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">Portfolio Expense Ratio</th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableCostBodyRef} onScroll={()=>{handleScroll(tableCostBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Cost"]["Portfolio Expense Ratio"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div ref={tableEquityMonitorRef} className={` ${ (selectedOption === 'equityMonitor') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">Equity Exposure</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Active Large Cap Fund Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Sector/Thematic Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Small Cap Exposure</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>5 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>4 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>{"<3 Star Funds"}</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>1 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>2 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>3 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Not Rated</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Blend</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Quality</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Value</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Mid & Small</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Global</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Others</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableEquityMonitorBodyRef} onScroll={()=>{handleScroll(tableEquityMonitorBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Equity Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Active Large Cap Fund Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Sector/Thematic Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Small Cap Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["5 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["4 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["<3 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["1 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["2 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["3 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Not Rated"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Blend"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Quality"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Value"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Mid & Small"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Global"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Equity Monitor"]["Others"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div ref={tableDebtMonitorRef} className={` ${ (selectedOption === 'debtMonitor') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">Debt Exposure</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Net YTM</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>% of AAA Equivalent</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>5 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>4 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>{"<3 Star Funds"}</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>1 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>2 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>3 Star Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Not Rated</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Liquid & Overnight</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>UST</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Low Duration</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Short Duration</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Medium Duration</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Logn Duration</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Credit Risk</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Dynamic Funds</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Conservative Hybrid</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Others</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableDebtMonitorBodyRef} onScroll={()=>{handleScroll(tableDebtMonitorBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Debt Exposure"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Net YTM"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["% of AAA Equivalent"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["5 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["4 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["<3 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["1 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["2 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["3 Star Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Not Rated"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Liquid & Overnight"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["UST"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Low Duration"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Short Duration"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Medium Duration"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Logn Duration"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Credit Risk"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Dynamic Funds"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Conservative Hybrid"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["Debt Monitor"]["Others"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                        <div ref={tableSIPBookRef} className={` ${ (selectedOption === 'sipBook') && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                            <table>
                                <tr className="flex">
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">Total SIP Value</th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Equity</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Debt</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Others</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>5 Star</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>4 Star</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>{"<3 Star"}</p></th>
                                    <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal"><p>Not Rated</p></th>
                                </tr>
                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={tableSIPBookBodyRef} onScroll={()=>{handleScroll(tableSIPBookBodyRef.current.scrollTop) }}>
                                        {
                                            data.clients.map( (client, i) =>
                                                <tr className="h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] "> 
                                                    <td className="w-[150px] justify-center flex items-center">{client["SIP Book"]["Total SIP Value"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["SIP Book"]["Equity"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["SIP Book"]["Debt"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["SIP Book"]["Others"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["SIP Book"]["5 Star"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["SIP Book"]["4 Star"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["SIP Book"]["<3 Star"]}</td>
                                                    <td className="w-[150px] justify-center flex items-center">{client["SIP Book"]["Not Rated"]}</td>
                                                </tr>
                                            )
                                        }
                                </div>
                            </table>
                        </div>

                    </div>
                </div>
                <div className="mr-[-15px] w-[60px] h-[30px] flex px-[10px] justify-between ">
                    <Image className="cursor-pointer " onClick={() => handleArrows(-1)} src={leftArrow}/>
                    <Image className="cursor-pointer " onClick={() => handleArrows(1)} src={rightArrow}/>
                    
                </div>
            </div>
        </div>
    )
}