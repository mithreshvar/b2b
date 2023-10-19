import React, { useState } from 'react'
import CustomSelectField from '../InputFields'
import CustomDropSelectField from './CustomDropSelectField';
import { Button } from '@mui/material';
import Image from 'next/image';
import clearFilter from '../../../../../public/clearFilter.svg'
import { useEffect } from 'react';

function Filter() {
    const [Filter, setFilter] = useState("first")
    const handleApplyFilter = () => {

    }
    const handleClearFilter = () => {
        setUnSelectedColumn({
            "Basic Details": [],
            "Asset Allocation Risk": [],
            "Cash Allocation": [],
            "Portfolio Quality Risk": [],
            "Diversification Risk": [],
            "Liquidity": [],
            "Cost": [],
            "Equity Monitor": [],
            "Debt Monitor": [],
            "SIP Book": []
        })
    }


    const columns = {
        "Basic Details": ["AUM", "Net Inflow YTD", "Net Inflow Growth", "Sice Inception Returns", "Risk Score"],

        "Asset Allocation Risk": [
            "ABC Number",
            "Equity Exposure",
            "Target Exposure",
            "Equity Exposure Deviation",
            "Debt Exposure",
            "Gold & Others Exposure"],

        "Cash Allocation": [
            "Overnight/Liquid Exposure"
        ],

        "Portfolio Quality Risk": [
            "5 star rated funds",
            "4 star rated funds",
            "Low Rated Fund",
            "Not Rated Fund Exposure",
            "FundsIndia Select Fund Exposure"
        ],

        "Diversification Risk": [
            "Highest AMC Exposure",
            "Highest Fund Exposure",
            "2nd Highest Fund Exposure",
            "Total Number of Non Debt Funds",
            "Total Number of Funds"
        ],

        "Liquidity": [
            "% of Portfolio under lock-in",
            "ELSS Exposure"
        ],
        "Cost": [
            "Portfolio Expense Ratio"
        ],
        "Equity Monitor": [
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
            "Logn Duration",
            "Credit Risk",
            "Dynamic Funds",
            "Conservative Hybrid",
            "Others"
        ],
        "SIP Book": [
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

    const [unSelectedColumn, setUnSelectedColumn] = useState({
        "Basic Details": [],
        "Asset Allocation Risk": [],
        "Cash Allocation": [],
        "Portfolio Quality Risk": [],
        "Diversification Risk": [],
        "Liquidity": [],
        "Cost": [],
        "Equity Monitor": [],
        "Debt Monitor": [],
        "SIP Book": []
    })
    useEffect(() => { }, [unSelectedColumn])
    const handleColumnChange = (data) => {
        setUnSelectedColumn(data)
        console.log("set", data)
    };
    return (
        <div className='w-full h[460px] pl-[25px] mt-[33px] pr-[30px]'>

            <p className='font-bold text-[14px]'>Filters</p>
            <div className='flex mt-[10px] gap-[10px]'>
                <div className={`w-[141px] h-[33px] text-center text-bold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "first" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`} onClick={() => (setFilter("first"))}>Display columns</div>
                <div className={`w-[141px] h-[33px] text-center text-bold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "second" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`} onClick={() => { setFilter("second") }}>Filters 2</div>
            </div>
            {
                Filter === "first" ?
                    <div className='w-full bg-white  '>
                        {
                            Object.keys(columns).map((ele) => {


                                return <CustomDropSelectField title={ele} value={columns[ele]} columns={unSelectedColumn} handleChange={handleColumnChange} />
                            })
                        }
                        <div className='pt-[50px] flex flex-row-reverse gap-[30px]'>

                            <div className='w-[108px] h-[40px] text-white font-semibold text-center text-[14px] pt-[10px] bg-[#0071E7] rounded-[20px] cursor-pointer' onClick={handleApplyFilter}>Apply Filter</div>
                            <div className='w-[108px] h-[40px] text-[#0071E7] flex gap-[5px] font-semibold justify-center align-middle text-[14px] pt-[10px] bg-white rounded-[20px] cursor-pointer' onClick={handleClearFilter} > <Image src={clearFilter} className='mb-[12px]' />Clear Filter</div>
                        </div>
                    </div>
                    :


                    <div className='w-full h-[100px] '>
                        <div>Filter2</div>
                    </div>
            }


        </div>
    )
}

export default Filter