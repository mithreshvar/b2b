import Image from "next/image";
import { CustomTextField } from "../InputFields";
import data from './data.json';
import { useRef, useState } from "react";
import CheckBoxName from "./CheckBoxName";
import { Checkbox, InputAdornment } from "@mui/material";
import whatsappIcon from "/public/Group 549708.svg";
import telegramIcon from "/public/Path 238665.svg";
import { useDraggable } from "react-use-draggable-scroll";
import { useDataContext } from "../../context/DataContext";
import Arrow from "/public/partner/Arrow";
import threeDots from '/public/partner/threeDots.svg'
import { Popper } from '@mui/material';
import Filter from "./Filter";
import FilterListIcon from '@mui/icons-material/FilterList';
import TradeUp from '/public/TradeUp.svg';
import TradeDown from '/public/TradeDown.svg';

import unsorted from "/public/unsorted.svg"
import sortedAscending from "/public/sortedAscending.svg"
import sortedDecending from "/public/sortedDecending.svg"
import { Search } from "@mui/icons-material";
import info from "/public/infoIcon.svg"

export default function Portfolio() {

    const [Data, setData] = useState(data.clients)

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
    
    const [FilterColumnOption, setFilterColumnOption] = useState(columns)
    const [filterDataOptions, setFilterDataOptions] = useState([]);
    const [IsFilterOpen, setIsFilterOpen] = useState(false)

    const handleFilterColumnOption = (data) => {
        setFilterColumnOption(data)
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

    const [savedFilterData, setSavedFilterData] = useState([])

    const handleFilterDataOptions = (filterOptions) => {
        setFilterDataOptions(filterOptions);
        console.log("filter data" ,filterOptions);

        let newData = [...data.clients];
        filterOptions.forEach( currentFilter => {
            newData = newData.filter( client => {
                if (currentFilter.subcategory == 'All') {
                    let showClient = true;
                    for (let i=1; i<columns[currentFilter.category].length; i++) {
                        console.log(columns[currentFilter.category][i])
                        if (client[currentFilter.category][columns[currentFilter.category][i]] == '-') {
                            continue;
                        }
                        if (client[currentFilter.category][columns[currentFilter.category][i]] && client[currentFilter.category][columns[currentFilter.category][i]][0] == '₹' ) {
                            let compareDataString = (client[currentFilter.category][columns[currentFilter.category][i]].slice(1).replace(/\,/g,'') + ' ' + currentFilter.condition + ' ' + currentFilter.value) 
                            // console.log(compareDataString);
                            // console.log( eval(compareDataString) );
                            showClient = ( eval(compareDataString) );
                            if (showClient == false) break;
                        }
                        if (client[currentFilter.category][columns[currentFilter.category][i]] && client[currentFilter.category][columns[currentFilter.category][i]][client[currentFilter.category][columns[currentFilter.category][i]].length-1] == '%') {
                            let compareDataString = (client[currentFilter.category][columns[currentFilter.category][i]].slice(0. -1) + ' ' + currentFilter.condition + ' ' + currentFilter.value) 
                            showClient = ( eval(compareDataString) );
                            if (showClient == false) break;
                        }
                    }
                    return showClient;
                }
                else{
                    if (client[currentFilter.category][currentFilter.subcategory] == '-') {
                        return true;
                    }
                    else if (client[currentFilter.category][currentFilter.subcategory] && client[currentFilter.category][currentFilter.subcategory][0] == '₹' ) {
                        let compareDataString = (client[currentFilter.category][currentFilter.subcategory].slice(1).replace(/\,/g,'') + ' ' + currentFilter.condition + ' ' + currentFilter.value) 
                        // console.log(compareDataString);
                        // console.log( eval(compareDataString) );
                        return ( eval(compareDataString) )
                    }
                    else if (client[currentFilter.category][currentFilter.subcategory] && client[currentFilter.category][currentFilter.subcategory][client[currentFilter.category][currentFilter.subcategory].length-1] == '%') {
                        let compareDataString = (client[currentFilter.category][currentFilter.subcategory].slice(0, -1) + ' ' + currentFilter.condition + ' ' + currentFilter.value) 
                        console.log(compareDataString)
                        return ( eval(compareDataString) );
                    }
                    else 
                        return true;
                }
            })
        } )

        console.log("newData", newData)
        setData(newData)
    }
    
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


    const { events } = useDraggable(tablesNavbarRef, {isMounted: (Data.length != 0)});


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

    const defaultSortedState = {
        "Client Name" : 0,
        "Basic Details": {
            "AUM": 0,
            "Net Inflow YTD (without MTM)": 0,
            "Net Inflow Growth (without MTM)": 0,
            "Since Inception Returns": 0,
            "Risk Score": 0
        },
        "Asset Allocation Risk": {
            "ABC Number": 0,
            "Equity Exposure": 0,
            "Target Exposure": 0,
            "Equity Exposure Deviation": 0,
            "Debt Exposure": 0,
            "Gold & Others Exposure": 0
        },
        "Cash Allocation": {
            "Overnight/Liquid Exposure": 0
        },
        "Portfolio Quality Risk": {
            "5 star rated funds": 0,
            "4 star rated funds": 0,
            "Low Rated Fund": 0,
            "Not Rated Fund Exposure": 0,
            "FundsIndia Select Fund Exposure": 0
        },
        "Diversification Risk": {
            "Highest AMC Exposure": 0,
            "Highest Fund Exposure": 0,
            "2nd Highest Fund Exposure": 0, 
            "Total Number of Non Debt Funds": 0,
            "Total Number of Funds": 0
        },
        "Liquidity" : {
            "% of Portfolio under lock-in": 0,
            "ELSS Exposure":  0
        },
        "Cost": {
            "Portfolio Expense Ratio": 0
        },
        "Equity Monitor": {
            "Equity Exposure": 0,
            "Active Large Cap Fund Exposure": 0,
            "Sector/Thematic Exposure": 0,
            "Small Cap Exposure": 0,
            "5 Star Funds": 0,
            "4 Star Funds": 0,
            "<3 Star Funds": 0,
            "1 Star Funds": 0,
            "2 Star Funds": 0,
            "3 Star Funds": 0,
            "Not Rated": 0,
            "Blend": 0,
            "Quality": 0,
            "Value": 0,
            "Mid & Small": 0,
            "Global": 0,
            "Others": 0
        },
        "Debt Monitor": {
            "Debt Exposure": 0,
            "Net YTM": 0,
            "% of AAA Equivalent": 0,
            "5 Star Funds": 0,
            "4 Star Funds": 0,
            "<3 Star Funds": 0,
            "1 Star Funds": 0,
            "2 Star Funds": 0,
            "3 Star Funds": 0,
            "Not Rated": 0,
            "Liquid & Overnight": 0,
            "UST": 0,
            "Low Duration": 0,
            "Short Duration": 0,
            "Medium Duration": 0,
            "Long Duration": 0,
            "Credit Risk": 0,
            "Dynamic Funds": 0,
            "Conservative Hybrid": 0,
            "Others": 0
        },
        "SIP Book": {
            "Total SIP Value": 0,
            "Equity": 0,
            "Debt": 0,
            "Others": 0,
            "5 Star": 0,
            "4 Star": 0,
            "<3 Star": 0,
            "Not Rated": 0
        }
    }

    const [sortedStateArray, setSortedStateArray] = useState(defaultSortedState)

    function sort(header, tableName){
        const category = Object.keys(columns).find(categoryName => columns[categoryName].includes(header));
        const top = `${category}`;
        const sorted = [...Data].sort((a, b) => {
            var x = a[top][header] || '';
            var y = b[top][header] || '';
            if(x === "-" && y!=="-")return -1;
            if(x !== "-" && y === "-")return 1;
            x = x.toString();
            y = y.toString();
            var a1 = parseFloat(x.replace(/[₹,]/g, ''));
            var b1 = parseFloat(y.replace(/[₹,]/g, ''))
            return a1 - b1;
        });
        if (sortedStateArray[tableName][header] == 0 || sortedStateArray[tableName][header] == -1){
            let newSortedState = defaultSortedState;
            newSortedState[tableName][header] = 1;
            setSortedStateArray(newSortedState);
            setData(sorted);
        }
        if (sortedStateArray[tableName][header] == 1) {
            let newSortedState = defaultSortedState;
            newSortedState[tableName][header] = -1;
            setSortedStateArray(newSortedState);
            setData(sorted.reverse());
        }
    }

    const [checked, setChecked] = useState(new Array(Data.length).fill(false));
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
    const [activeActionButtonName, setActiveActionButtonName] = useState('')

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const [SearchValue, setSearchValue] = useState('')
    function filterData() {
        const valueReg = new RegExp(SearchValue.trim(), 'i'); // Case-insensitive regex for name
        const filteredData = data.clients.filter((item) => {
          // Check if the name, email, and number match the provided regex patterns
            return (
              valueReg.test(item['Client Name'])
            );
        });
        // Now, 'filteredData' contains the filtered data based on the provided criteria.
        setData(filteredData);
      }

    function sortString() {
        if(sortedStateArray["Client Name"] == 0 || sortedStateArray["Client Name"] == -1){
            Data.sort((a,b)=>a['Client Name'].toLowerCase().localeCompare(b['Client Name'].toLowerCase()));
            let newSortedState = defaultSortedState;
            newSortedState["Client Name"] = 1;
            setSortedStateArray(newSortedState);
        }
        else if(sortedStateArray["Client Name"] == 1){
            Data.sort((a,b)=>b['Client Name'].toLowerCase().localeCompare(a['Client Name'].toLowerCase()));
            let newSortedState = defaultSortedState;
            newSortedState["Client Name"] = -1;
            setSortedStateArray(newSortedState);
        }
        
        setSortedStateArray(defaultSortedState);
    }
    return (
        <div className="bg-white m-[20px] rounded-[10px] p-[20px] h-[calc(100vh-104px)]">
            <div className="flex justify-between items-center pb-[30px] pt-[10px]">
                <h1 className="text-[18px] font-bold leading-[20px]">Client Portfolio Monitor</h1>
                <div className="flex gap-x-[20px]">
                    <CustomTextField 
                        type="text" 
                        value={SearchValue} 
                        width="309px" 
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" >
                            <Search className="text-[18px] text-primary" />
                            </InputAdornment>
                        ),
                        }} 
                        label="Search"
                        handleChange={(event)=>{setSearchValue(event.target.value);filterData()}}
                    />
                    <button className="flex items-center justify-center border-[1px] border-[#E4E5E5] hover:border-[#6f7070] rounded-[7px] gap-x-[10px] h-[40px] w-[100px]" onClick={() => { setIsFilterOpen(!IsFilterOpen) }}><div className="text-[14px] text-[#6E6E72] font-medium leading-[18px]"><FilterListIcon color="primary" />Filter</div></button>
                </div>
            </div>
            {
                IsFilterOpen && <div className={` absolute top-[120px] ${navOpen ? " left-[270px] w-[calc(100vw-290px)] " : " left-[81px] w-[calc(100vw-100px)] " } z-[5] `} onFocus={() => { setIsFilterOpen(true) }}  > <Filter FilterColumnOption={FilterColumnOption} handleFilterColumnOption={handleFilterColumnOption} columns={columns} filterDataOptions={filterDataOptions} handleFilterDataOptions ={handleFilterDataOptions} onBlur={() => { setIsFilterOpen(false) }} savedFilterData={savedFilterData} setSavedFilterData={setSavedFilterData} /> </div>
            }
            {
                (Data.length == 0) ?
                    <div className="flex justify-center items-center h-full w-full text-[25px] font-semibold">
                        <p>No Users Found</p>
                    </div>
                :
                    <div className="flex ">
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
                                        <button className="flex items-center justify-center gap-[4px]" onClick={()=>sortString()}>Client Name{sortedStateArray["Client Name"] == 0 && <Image className=" cursor-pointer " src={unsorted} />} {sortedStateArray["Client Name"] == 1 && <Image className=" cursor-pointer " src={sortedAscending}/>} {sortedStateArray["Client Name"] == -1 && <Image className=" cursor-pointer " src={sortedDecending}/>} </button>
                                    </th>
                                </thead>

                                <div className="overflow-scroll h-[calc(100vh-310px)] no-scrollbar z-[0]" ref={tableNameRef} onScroll={() => { handleScroll(tableNameRef.current.scrollTop) }}>
                                    <tbody >
                                        {
                                            Data.map((client, i) =>
                                                <tr onMouseOver={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(-1)} className={`h-[44px] w-full flex items-center text-[#1F2125] text-[14px] font-medium even:bg-white odd:bg-[#F9FBFF] ${(hoverIndex == i) && " border-[#5DA9F8] border-y-[1px] border-l-[1px] "} `}>
                                                    <CheckBoxName index={i} checked={checked} handleChecked={handleChecked} />
                                                    <p className="whitespace-nowrap">{client["Client Name"]}</p>
                                                    <div onMouseOver={() => setShowClientInfo(i)} onMouseLeave={() => setShowClientInfo(-1)} className="relative">
                                                        <Image src={info} className={` ml-[5px] mb-[-2px] h-[13px] w-[12px] ${(showClientInfo == i) ? " opacity-0 hidden " : ' opacity-100 '} `} />
                                                        <div className={` ${(showClientInfo == i) ? "opacity-100 cursor-auto" : 'opacity-0 hidden'} whitespace-nowrap relative mb-[-90px] ml-[110px] flex flex-col h-auto p-[15px] pt-0 left-[-125px] bg-white rounded-[10px] shadow-[0px_3px_8px_#00000026] z-[3] `}>
                                                            <h6 className="h-[40px] border-b-[1px] border-[#f6f6f6] px-[10px] py-[10px] ">{client["Client Name"]}</h6>
                                                            <table cellPadding={8} >
                                                                <tr>
                                                                    <td className="text-[#707070]">Investing Since</td>
                                                                    <td className="pl-[10px]">05-Nov-2022. (10.8 Years)</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-[#707070]">Email</td>
                                                                    <td className="pl-[10px]">{client["Email"]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-[#707070]">Mobile</td>
                                                                    <td className="pl-[10px]">{client["Mobile"]}</td>
                                                                </tr>
                                                            </table>
                                                        </div>

                                                    </div>
                                                </tr>
                                            ) //<input value={''} type="checkbox" className="appearance-none  w-[16px] h-[16px] rounded-[3px] border-[2px] border-solid outline-none border-[#ceced0] checked:bg-primary" />
                                        }
                                    </tbody>
                                </div>

                            </table>

                        </div>
                        
                        
                        <div className={`flex flex-col ${ showClientInfo!=-1 && ' ml-[-45px] '} `}>
                            <div ref={tablesNavbarRef} {...events} className={`h-[44px] flex gap-x-[10px] overflow-x-scroll ${navOpen ? ' w-[calc(100vw-507px)] ' : ' w-[calc(100vw-325px)] '} no-scrollbar text-[14px] text-[#BEBEBE] font-semibold transition-all duration-[0.5s] `}>
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
                                            // if ( !(tableName == "Client Name" || tableName == "Email" || tableName == "Mobile") && FilterColumnOption[tableName].includes("All") ) {
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
                                                                            if (FilterColumnOption[tableName].includes(header))
                                                                            return (
                                                                                <th className="flex items-center justify-center gap-x-[5px] h-[44px] w-[150px] text-[12px] text-[#6E6E72] font-normal " onClick={() => sort(header, tableName)}> 
                                                                                    <button>{header}</button> 
                                                                                    {sortedStateArray[tableName][header] == 0 && <Image className=" cursor-pointer " src={unsorted} onClick={() => sort(header, tableName)} /> }
                                                                                    {sortedStateArray[tableName][header] == 1 && <Image className=" cursor-pointer " src={sortedAscending} onClick={() => sort(header, tableName)} />}
                                                                                    {sortedStateArray[tableName][header] == -1 && <Image className=" cursor-pointer " src={sortedDecending} onClick={() => sort(header, tableName)} />}
                                                                                </th>
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
                                                                                
                                                                                if (FilterColumnOption[tableName].includes(header)){

                                                                                    // For Net Inflow YTD (without MTM)

                                                                                    if(header == "Net Inflow YTD (without MTM)" ){
                                                                                        if(tableData == '-' ){
                                                                                            return(
                                                                                                <td className="w-[150px] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                        if(tableData.search('-') == 1){
                                                                                            return(
                                                                                                <div className="flex w-[150px] items-center justify-center gap-[5px]">
                                                                                                    <Image height={10} width={15} src={TradeDown} alt="TradeUP"/>
                                                                                                    <td className="justify-center flex items-center">{tableData}</td>
                                                                                                </div>
                                                                                                
                                                                                            )
                                                                                        }
                                                                                        return(
                                                                                            <div className="flex w-[150px] items-center justify-center gap-[5px]">
                                                                                                <Image height={10} width={15} src={TradeUp} alt="TradeUP"/>
                                                                                                <td className="justify-center flex items-center">{tableData}</td>
                                                                                            </div>
                                                                                        )
                                                                                    }

                                                                                    // For Net Inflow Growth (without MTM)

                                                                                    if(header == "Net Inflow Growth (without MTM)" ){
                                                                                        if(tableData == '-' ){
                                                                                            return(
                                                                                                <td className="w-[150px] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                        if(tableData.search('-') == 0){
                                                                                            return(
                                                                                                <div className="flex w-[150px] items-center justify-center gap-[5px]">
                                                                                                    <Image height={10} width={15} src={TradeDown} alt="TradeUP"/>
                                                                                                    <td className="justify-center flex items-center">{tableData}</td>
                                                                                                </div>
                                                                                                
                                                                                            )
                                                                                        }
                                                                                        return(
                                                                                            <div className="flex w-[150px] items-center justify-center gap-[5px]">
                                                                                                <Image height={10} width={15} src={TradeUp} alt="TradeUP"/>
                                                                                                <td className="justify-center flex items-center">{tableData}</td>
                                                                                            </div>
                                                                                        )
                                                                                    }

                                                                                    // For Equity Exposure Deviation 
                                                                                    
                                                                                    if(header == "Equity Exposure Deviation" ){
                                                                                        if(parseInt(tableData) < -5 || parseInt(tableData) > 5){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else{
                                                                                            return(
                                                                                                <td className="w-[150px] text-green-500 justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For Gold & Others Exposure

                                                                                    if(header == "Gold & Others Exposure"){
                                                                                        if(parseInt(tableData)>30){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=20 && parseInt(tableData)<=30){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else{
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For Overnight/Liquid Exposure

                                                                                    if(header == 'Overnight/Liquid Exposure'){
                                                                                        if(parseInt(tableData)>15){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=5 && parseInt(tableData)<=15){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)<5){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For 5 star rated funds

                                                                                    if(header == '5 star rated funds' || header == '5 Star Funds' || header == '5 Star'){
                                                                                        if(parseInt(tableData)>0){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For 4 star rated funds

                                                                                    if(header == '4 star rated funds' || header == '4 Star Funds' || header == '4 Star'){
                                                                                        if(parseInt(tableData)>0){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For Low Rated Fund

                                                                                    if(header == 'Low Rated Fund'){
                                                                                        if(parseInt(tableData)>20){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=0 && parseInt(tableData)<=20){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For Not Rated Fund Exposure

                                                                                    if(header == 'Not Rated Fund Exposure'){
                                                                                        if(parseInt(tableData)>20){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=0 && parseInt(tableData)<=20){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For Highest AMC Exposure

                                                                                    if(header == 'Highest AMC Exposure'){
                                                                                        if(parseInt(tableData)>50){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=30 && parseInt(tableData)<=50){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else{
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }
                                                                                    
                                                                                    // For Highest Fund Exposure

                                                                                    if(header == 'Highest Fund Exposure'){
                                                                                        if(parseInt(tableData)>30){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=20 && parseInt(tableData)<=30){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else{
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For 2nd Highest Fund Exposure

                                                                                    if(header == '2nd Highest Fund Exposure'){
                                                                                        if(parseInt(tableData)>50){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=30 && parseInt(tableData)<=50){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else{
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For Total Number of Non Debt Funds

                                                                                    if(header == 'Total Number of Non Debt Funds'){
                                                                                        if(parseInt(tableData)>10){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=5 && parseInt(tableData)<=10){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else{
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For Total Number of Funds

                                                                                    if(header == 'Total Number of Funds' || header == '% of Portfolio under lock-in' || header == 'Active Large Cap Fund Exposure' || header == 'Sector/Thematic Exposure' || header == 'Small Cap Exposure'){
                                                                                        if(parseInt(tableData)>20){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=10 && parseInt(tableData)<=20){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)<10){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For <3 Star funds

                                                                                    if(header == '<3 Star Funds' || header == '1 Star Funds' || header == '2 Star Funds' || header == '3 Star Funds' || header == 'Credit Risk' || header == 'Not Rated' || header == '<3 Star'){
                                                                                        if(parseInt(tableData)>0)
                                                                                        return(
                                                                                            <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                        )
                                                                                    }
                                                                                    
                                                                                    // For  "Blend","Quality","Value","Mid & Small", "Global"

                                                                                    if(header == 'Blend' || header == 'Quality' || header == 'Value' || header == 'Mid & Small' || header == 'Global'){
                                                                                        if(parseInt(tableData)>40){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=20 && parseInt(tableData)<=40){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)<20){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For others

                                                                                    if(header == 'Others'){
                                                                                        if(parseInt(tableData)>40){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>=10 && parseInt(tableData)<=40){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>0){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For % of AAA Equivalent

                                                                                    if(header == '% of AAA Equivalent'){
                                                                                        if(parseInt(tableData)<80){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else if(parseInt(tableData)>0){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#00A345] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }

                                                                                    // For Medium Duration

                                                                                    if(header == 'Medium Duration' || header == 'Conservative Hybrid'){
                                                                                        if(parseInt(tableData)>0){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#EBC135] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else{
                                                                                            return(
                                                                                                <td className="w-[150px] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }
                                                                                    
                                                                                    // For Long Duration, Dynamic Funds

                                                                                    if(header == 'Long Duration' || header == 'Dynamic Funds'){
                                                                                        if(parseInt(tableData)>10){
                                                                                            return(
                                                                                                <td className="w-[150px] text-[#F56902] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }else{
                                                                                            return(
                                                                                                <td className="w-[150px] justify-center flex items-center">{tableData}</td>
                                                                                            )
                                                                                        }
                                                                                    }
                                                                                    
                                                                                    return(
                                                                                        <td className="w-[150px] justify-center flex items-center">{tableData}</td>
                                                                                    )
                                                                                }
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
                                    Data.map((client, i) => {
                                        return(
                                            <div key={i} className="h-[44px] flex items-center justify-center">
                                                <button className="h-[15px] p-[5px] flex items-center justify-center cursor-pointer" onClick={(event) => { setActiveActionButtonName(client["Client Name"]); handleClick(event) }} onBlur={handleClick}>
                                                    <Image src={threeDots} />
                                                </button>
                                                <Popper id={id} open={open} anchorEl={anchorEl} >
                                                    <div className='w-[130px] text-[14px] flex flex-col bg-white rounded-[10px] shadow-[0px_2px_5px_#00000007] justify-around items-center mt-[5px] mr-[30px] p-[5px] '>
                                                        <p onMouseDown={() => { setShowMonthlyDetails(activeActionButtonName) }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[120px] flex items-center justify-center ' >Monthly Details</p>
                                                        <p onMouseDown={() => { setShowNote(true) }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[120px] flex items-center justify-center '>Note</p>
                                                        <p className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[120px] flex items-center justify-center '>Mail</p>
                                                        <p className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[120px] flex items-center justify-center '>Whatsapp</p>
                                                    </div>
                                                </Popper>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}