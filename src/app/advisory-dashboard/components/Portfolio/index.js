import Image from "next/image";
import { CustomTextField } from "../InputFields";
import SearchIcon from '@mui/icons-material/Search';
import data from './data.json';
import { useRef, useState } from "react";
import CheckBoxName from "./CheckBoxName";
import { Checkbox } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import whatsappIcon from "/public/Group 549708.svg";
import telegramIcon from "/public/Path 238665.svg";
import { useDraggable } from "react-use-draggable-scroll";
import { useDataContext } from "../../context/DataContext";
import Arrow from "/public/partner/Arrow";
import threeDots from '/public/partner/threeDots.svg'
import { Popper } from '@mui/material';
import Filter from "./Filter";
import FilterListIcon from '@mui/icons-material/FilterList';

export default function Portfolio() {

    const columns = {

        "Basic Details": [
            "All",
            "AUM", 
            "Net Inflow YTD (without MTM)", 
            "Net Inflow Growth (without MTM)", 
            "Since Inception Returns", 
            "Risk Score", 
        ],

        "Asset Allocation Risk": [
            "All",
            "ABC Number",
            "Equity Exposure",
            "Target Exposure",
            "Equity Exposure Deviation",
            "Debt Exposure",
            "Gold & Others Exposure"
        ],

        "Cash Allocation": [
            "All",
            "Overnight/Liquid Exposure"
        ],

        "Portfolio Quality Risk": [
            "All",
            "5 star rated funds",
            "4 star rated funds",
            "Low Rated Fund",
            "Not Rated Fund Exposure",
            "FundsIndia Select Fund Exposure"
        ],

        "Diversification Risk": [
            "All", 
            "Highest AMC Exposure",
            "Highest Fund Exposure",
            "2nd Highest Fund Exposure",
            "Total Number of Non Debt Funds",
            "Total Number of Funds"
        ],

        "Liquidity": [
            "All",
            "% of Portfolio under lock-in",
            "ELSS Exposure"
        ],

        "Cost": [
            "All",
            "Portfolio Expense Ratio"
        ],

        "Equity Monitor": [
            "All",
            "Equity Exposure",
            "Active Large Cap Fund Exposure",
            "Sector/Thematic Exposure",
            "Small Cap Exposure",
            "5 Star Funds",
            "4 Star Funds",
            "<3 Star Funds",
            "1 Star Funds",
            "2 Star Funds",
            "3 Star Funds",
            "Not Rated",
            "Blend",
            "Quality",
            "Value",
            "Mid & Small",
            "Global",
            "Others"
        ],

        "Debt Monitor": [
            "All",
            "Debt Exposure",
            "Net YTM",
            "% of AAA Equivalent",
            "5 Star Funds",
            "4 Star Funds",
            "<3 Star Funds",
            "1 Star Funds",
            "2 Star Funds",
            "3 Star Funds",
            "Not Rated",
            "Liquid & Overnight",
            "UST",
            "Low Duration",
            "Short Duration",
            "Medium Duration",
            "Long Duration",
            "Credit Risk",
            "Dynamic Funds",
            "Conservative Hybrid",
            "Others"
        ],

        "SIP Book": [
            "All",
            "Total SIP Value",
            "Equity",
            "Debt",
            "Others",
            "5 Star",
            "4 Star",
            "<3 Star",
            "Not Rated"
        ]
    }
    
    const [FilterOption, setFilterOption] = useState(columns)
    const [IsFilterOpen, setIsFilterOpen] = useState(false)
    const [Data, setData] = useState(data.clients)
    const { navOpen, setShowNote, setShowMonthlyDetails } = useDataContext()

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
    const tableActionButtonRef = useRef();


    function handleScroll(pos) {
        tableNameRef.current.scroll({ top: pos });
        currentRefTableBody.forEach((ref, i) => {
            ref.current.scroll({ top: pos });
        })
        tableActionButtonRef.current.scroll({ top: pos });
    }

    let tableNames = ['Basic Details', 'Asset Allocation Risk', 'Cash Allocation', 'Portfolio Quality Risk', 'Diversification Risk', 'Liquidity', 'Cost', 'Equity Monitor', 'Debt Monitor', 'SIP Book'];
    let refTable = [tableBasicDetailsRef, tableAssetAllocationRef, tableCashAllocationRef, tablePortfolioQualityRef, tableDiversificationRiskRef, tableLiquidityRef, tableCostRef, tableEquityMonitorRef, tableDebtMonitorRef, tableSIPBookRef]
    let refNav = [navBasicDetailsRef, navAssetAllocationRef, navCashAllocationRef, navPortfolioQualityRef, navDiversificationRiskRef, navLiquidityRef, navCostRef, navEquityMonitorRef, navDebtMonitorRef, navSIPBookRef]
    let refTableBody = [tableBasicDetailsBodyRef, tableAssetAllocationBodyRef, tableCashAllocationBodyRef, tablePortfolioQualityBodyRef, tableDiversificationRiskBodyRef, tableLiquidityBodyRef, tableCostBodyRef, tableEquityMonitorBodyRef, tableDebtMonitorBodyRef, tableSIPBookBodyRef];

    const [currentTableNames, setCurrentTableNames] = useState(tableNames);
    const [currentRefTable, setCurrentRefTable] = useState(refTable);
    const [currentRefNav, setCurrentRefNav] = useState(refNav);
    const [currentRefTableBody, setCurrentRefTableBody] = useState(refTableBody);


    const [selectedOption, setSelectedOption] = useState("Basic Details");
    const [hoverIndex, setHoverIndex] = useState(-1)
    const [loadingScroll, setLoadingScroll] = useState(true);

    setTimeout(() => setLoadingScroll(false), 1000); // loading is set false only after initial render

    const handleFilterOption = (data) => {
        setFilterOption(data)
        console.log("fitler", data)

        let tempTableNames = [...tableNames];
        let tempRefTable = [...refTable];
        let tempRefNav = [...refNav];
        let tempRefTableBody = [...refTableBody];

        let dataAsArray = Object.entries(data);
        dataAsArray.map(([tableName, columns]) => {
            if (!(columns.includes("All"))) {
                let removeIndex = tempTableNames.findIndex( name => name == tableName);
                tempTableNames = tempTableNames.filter((name, index) => index != removeIndex);
                tempRefTable = tempRefTable.filter((name, index) => index != removeIndex);
                tempRefNav = tempRefNav.filter((name, index) => index != removeIndex);
                tempRefTableBody = tempRefTableBody.filter((name, index) => index != removeIndex);
            }
        })

        setCurrentRefTableBody(tempRefTableBody)
        setCurrentRefNav(tempRefNav)
        setCurrentRefTable(tempRefTable)
        setCurrentTableNames(tempTableNames)

    }

    const handleTableBodyScroll = event => {
        if (loadingScroll) return;

        let i = currentTableNames.findIndex((e) => e === selectedOption)
        let start = currentRefTable[i].current.offsetLeft - currentRefTable[0].current.offsetLeft;
        let end = currentRefTable[i].current.offsetLeft - currentRefTable[0].current.offsetLeft + currentRefTable[i].current.offsetWidth;
        let current;

        let paddingLeftForLastNav = tablesNavbarRef.current.offsetWidth + currentRefNav[i].current.offsetLeft - (currentRefNav[currentRefNav.length - 1].current.offsetLeft + currentRefNav[currentRefNav.length - 1].current.offsetWidth + 10);

        if (tablesNavbarRef.current.offsetWidth + currentRefNav[i].current.offsetLeft - currentRefNav[currentRefNav.length - 1].current.offsetLeft > 0) {
            current = event.currentTarget.scrollLeft + paddingLeftForLastNav + (currentRefNav[i].current.offsetWidth / 2) + 10;
        }
        else {
            current = event.currentTarget.scrollLeft + (currentRefNav[i].current.offsetWidth / 2);
        }
        // console.log( current, paddingLeftForLastNav + (currentRefNav[i].current.offsetWidth /2) + 10, tablesNavbarRef.current.offsetWidth + currentRefNav[i].current.offsetLeft - currentRefNav[currentRefNav.length - 1].current.offsetLeft > 0 , "start : " + start, " end : " + end )

        if (true) {
            if (current > end) {
                handleSelectOption(currentTableNames[i + 1], i + 1);
            }
            else if (current < start) {
                handleSelectOption(currentTableNames[i - 1], i - 1);
            }
        }
    };

    function scrollRefIntoView(i) {
        if (i < 0 || i >= currentTableNames.length) return;
        console.log(i, currentTableNames[i], currentRefTable[i])
        let paddingLeftForLastNav = tablesNavbarRef.current.offsetWidth + currentRefNav[i].current.offsetLeft - (currentRefNav[currentRefNav.length - 1].current.offsetLeft + currentRefNav[currentRefNav.length - 1].current.offsetWidth + 10);

        if (tablesNavbarRef.current.offsetWidth + currentRefNav[i].current.offsetLeft - currentRefNav[currentRefNav.length - 1].current.offsetLeft > 0 && currentRefTable[i].current.offsetWidth < paddingLeftForLastNav) {
            tablesContainerRef.current.scroll({ left: (currentRefTable[i].current.offsetLeft - currentRefTable[0].current.offsetLeft) - paddingLeftForLastNav, behavior: "smooth" })
        }
        else {
            tablesContainerRef.current.scroll({ left: currentRefTable[i].current.offsetLeft - currentRefTable[0].current.offsetLeft, behavior: "smooth" })
        }
        tablesNavbarRef.current.scroll({ left: currentRefNav[i].current.offsetLeft - currentRefNav[0].current.offsetLeft, behavior: "smooth" })

        // if (tablesNavbarRef.current.offsetWidth + currentRefNav[i].current.offsetLeft - currentRefNav[currentRefNav.length - 1].current.offsetLeft > 0 ){
        //     console.log(paddingLeftForLastNav + (currentRefNav[i].current.offsetWidth /2) + tablesNavbarRef.current.offsetLeft + 10) 
        // }
        // else{
        //     console.log(currentRefNav[i].current.offsetLeft + (currentRefNav[i].current.offsetWidth /2) + (tablesNavbarRef.current.offsetLeft-currentRefNav[i].current.offsetLeft) , tablesNavbarRef.current.offsetLeft-refNav[i].current.offsetLeft)
        // }
    }

    function handleSelectOption(option, i) {
        if (loadingScroll) return;

        setLoadingScroll(true);
        setSelectedOption(option);
        scrollRefIntoView(i)
        setTimeout(() => setLoadingScroll(false), 1000);
    }

    function handleArrows(direction) {

        if (loadingScroll) return;

        let i = currentTableNames.findIndex((e) => e === selectedOption) + direction;
        setLoadingScroll(true);
        if (i < currentTableNames.length && i >= 0) {
            scrollRefIntoView(i);
            setSelectedOption(currentTableNames[i])
        }
        setTimeout(() => setLoadingScroll(false), 500);

    }

    const [checked, setChecked] = useState([false, false, false, false, false]);
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

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    return (
        <div className="bg-white m-[20px] rounded-[10px] p-[20px] h-[calc(100vh-104px)]">
            <div className="flex justify-between items-center pb-[30px] pt-[10px]">
                <h1 className="text-[18px] font-bold leading-[20px]">Client Portfolio Monitor</h1>
                <div className="flex gap-x-[20px]">
                    <CustomTextField width="309px" label={<div className="flex gap-x-[8px] justify-center items-center"><SearchIcon className="text-[20px] text-[#0071E7]" /><p>Search</p></div>} />
                    <button className="flex items-center justify-center border-[1px] border-[#E4E5E5] hover:border-[#6f7070] rounded-[7px] gap-x-[10px] h-[40px] w-[100px]" onBlur={() => { setIsFilterOpen(false) }} onClick={() => { setIsFilterOpen(!IsFilterOpen) }}><div className="text-[14px] text-[#6E6E72] font-medium leading-[18px]"><FilterListIcon color="primary" />Filter</div></button>
                </div>
            </div>
            {
                IsFilterOpen && <div className="absolute bg-white z-50 mt-[-10px] w-[1210px]" onFocus={() => { setIsFilterOpen(true) }}  > <Filter data={FilterOption} handleChange={handleFilterOption} columns={columns} onBlur={() => { setIsFilterOpen(false) }} /> </div>
            }
            <div className="flex">
                <div className="w-[210px] ml-[-15px]">
                    <div className="flex gap-x-[15.68px] h-[34px] items-center pl-[10px]">
                        <div className="text-[14px] text-[#6E6E72]">Share via</div>
                        <Image src={whatsappIcon} />
                        <Image src={telegramIcon} />
                    </div>
                    <table>
                        <thead>
                            <th className="h-[54px] w-[165px] pt-[10px] flex items-center text-[12px] text-[#6E6E72] font-normal">
                                <Checkbox
                                    checked={selectAll}
                                    onChange={(e) => {
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

                        <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar z-[0]" ref={tableNameRef} onScroll={() => { handleScroll(tableNameRef.current.scrollTop) }}>
                            <tbody >
                                {
                                    Data.map((client, i) =>
                                        <tr onMouseOver={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(-1)} className={`h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] ${(hoverIndex == i) && " border-[#5DA9F8] border-y-[1px] border-l-[1px] "} `}>
                                            <CheckBoxName index={i} checked={checked} handleChecked={handleChecked} />
                                            <p>{client["Client Name"]}</p>
                                            <div onMouseOver={() => setShowClientInfo(i)} onMouseLeave={() => setShowClientInfo(-1)} className="relative">
                                                <InfoOutlinedIcon className="ml-[5px] mb-[-2px] text-[13px] text-primary " />
                                                <div className={` ${(showClientInfo == i) ? "opacity-100 cursor-auto" : 'opacity-0 hidden'} absolute flex flex-col h-auto w-[250px] top-[20px] left-[-125px] bg-white rounded-[10px] shadow-[0px_3px_8px_#00000026] z-[3] `}>
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
                    <div ref={tablesNavbarRef} {...events} className={`h-[44px] flex gap-x-[10px] overflow-x-scroll ${navOpen ? ' w-[calc(100vw-507px)] ' : ' w-[calc(100vw-325px)] '} no-scrollbar text-[14px] text-[#BEBEBE] font-bold transition-all duration-[0.5s] `}>
                        {
                            currentTableNames.map( (tableName, index) => 
                                <button ref={currentRefNav[index]} className={`relative h-[34px] rounded-t-[10px] p-[10px] shrink-0  ${selectedOption === tableName ? 'bg-[#DCEBFE] text-[#0071E7]' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => { handleSelectOption(tableName, index) }}>
                                    <p>{tableName}</p>
                                    <div className={`absolute h-0 w-0 border-x-[7px] border-x-transparent border-b-[9px] border-b-primary bottom-[-10px] left-[calc(50%-5px)] pointer-events-none ${selectedOption == tableName ? ' opacity-100 ' : ' opacity-0 '} `} />
                                </button>
                            )
                        }
                    </div>

                    <div ref={tablesContainerRef} onScroll={handleTableBodyScroll} className={`flex overflow-x-scroll ${navOpen ? ' w-[calc(100vw-507px)] ' : ' w-[calc(100vw-325px)] '} transition-all duration-[0.6s] p-[10px] pt-0 gap-x-[10px] no-scrollbar `}>
                        {
                            (function () {
                                let tableNamesAsArray = Object.entries(Data[0]);
                                return tableNamesAsArray.map(([tableName, obj], tableNamesIndex) => {
                                    // if ( !(tableName == "Client Name" || tableName == "Email" || tableName == "Mobile") && FilterOption[tableName].includes("All") ) {
                                    if ( currentTableNames.includes(tableName) ) {
                                        let currentTableNameIndex = currentTableNames.findIndex( name => name == tableName );
                                        return (
                                            <div ref={currentRefTable[currentTableNameIndex]} className={` ${(selectedOption === tableName) && "border-[#7EB7F270] border-[2px] "} rounded-[10px] pb-[2px] px-[4px] shadow-[0px_1px_5px_#0000000F]`}>
                                                <table>
                                                    <thead>
                                                        <tr className="flex">
                                                        {
                                                            (function() {
                                                                let headersAsArray = Object.entries(Data[0][tableName])
                                                                return headersAsArray.map(([header, val]) => {
                                                                    if (FilterOption[tableName].includes(header))
                                                                    return (
                                                                        <th className="h-[44px] w-[150px] justify-center flex items-center text-[12px] text-[#6E6E72] font-normal">{header}</th>
                                                                    )
                                                                })
                                                            })()
                                                        }
                                                        </tr>
                                                    </thead>
                                                    <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" ref={currentRefTableBody[currentTableNameIndex]} onScroll={() => { handleScroll(currentRefTableBody[currentTableNameIndex].current.scrollTop) }}>
                                                    {
                                                        Data.map((client, tableRowIndex) => {
                                                            let asArray = Object.entries(client[tableName]);
                                                            return (
                                                                <tr onMouseOver={() => setHoverIndex(tableRowIndex)} onMouseLeave={() => setHoverIndex(-1)} className={`h-[44px] flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] ${(hoverIndex == tableRowIndex) && " border-[#5DA9F8] border-y-[1px] "} `}>
                                                                {
                                                                    asArray.map(([header, tableData]) => {
                                                                        if (FilterOption[tableName].includes(header))
                                                                        return(
                                                                            <td className="w-[150px] justify-center flex items-center">{tableData}</td>
                                                                        )
                                                                    })
                                                                }
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </table>
                                            </div>
                                        )
                                    }
                                })
                            })()
                        }
                    </div>
                </div>
                <div className=" flex flex-col gap-y-[54px]">
                    <div className="w-[50px] h-[34px] flex px-[10px] justify-between items-center ">
                        <button onClick={() => handleArrows(-1)}><Arrow active={!(selectedOption == currentTableNames[0])} left={true} h={12} w={8} notActiveClr={'#0071e750'} /></button>
                        <button onClick={() => handleArrows(1)}><Arrow active={!(selectedOption == currentTableNames[currentTableNames.length -1])} h={12} w={8} notActiveClr={'#0071e750'} /></button>
                    </div>

                    <div ref={tableActionButtonRef} className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar" onScroll={() => { handleScroll(tableActionButtonRef.current.scrollTop) }}>
                        {
                            Data.map((client, i) =>
                                <div className="h-[44px] flex items-center justify-center">
                                    <button className="h-[15px] p-[5px] flex items-center justify-center cursor-pointer" onClick={handleClick} onBlur={handleClick}>
                                        <Image src={threeDots} />
                                    </button>
                                    <Popper id={id} open={open} anchorEl={anchorEl} >
                                        <div className='w-[130px] text-[14px] flex flex-col bg-white rounded-[10px] shadow-[0px_2px_5px_#00000007] justify-around items-center mt-[5px] mr-[30px] p-[5px] '>
                                            <p onMouseDown={() => { setShowMonthlyDetails(client["Client Name"]) }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[120px] flex items-center justify-center ' >Monthly Details</p>
                                            <p onMouseDown={() => { setShowNote(true) }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[120px] flex items-center justify-center '>Note</p>
                                            <p className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[120px] flex items-center justify-center '>Mail</p>
                                            <p className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[120px] flex items-center justify-center '>Whatsapp</p>
                                        </div>
                                    </Popper>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}