import React, { useState } from 'react'
import CustomSelectField from '../InputFields'
import CustomDropSelectField from './CustomDropSelectField';
import { Button } from '@mui/material';
import Image from 'next/image';
import clearFilter from '../../../../../public/clearFilter.svg'
import { useEffect } from 'react';

function Filter(props) {
    const [CurrFilterState, setCurrFilterState] = useState({ ...props.data })
    const [Filter, setFilter] = useState("first")
    const handleFilterChange = (data) => {
        setCurrFilterState(data)
    }
    const handleApplyFilter = () => {
        props.handleChange(CurrFilterState)
        props.onBlur()
    }
    const handleClearFilter = () => {
        props.handleChange(props.columns)
        props.onBlur()
    }



    return (
        <div className='w-full h[460px] pl-[25px] mt-[33px] pr-[30px]'>

            <p className='font-bold text-[14px]'>Filters</p>
            <div className='flex mt-[10px] gap-[10px]'>
                <div className={`w-[141px] h-[33px] text-center text-bold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "first" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`} onClick={() => (setFilter("first"))}>Display columns</div>
                <div className={`w-[141px] h-[33px] text-center text-bold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "second" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`} onClick={() => { setFilter("second") }}>Filters 2</div>
            </div>
            {
                Filter === "first" ? (
                    <div className='w-[990px] bg-white  '>
                        <div className='grid grid-cols-3 gap-[17px]'>
                            {
                                Object.keys(props.columns).map((ele) => {


                                    return <CustomDropSelectField data={props.data} title={ele} value={props.columns[ele]} columns={props.columns} handleChange={handleFilterChange} />
                                })
                            }
                        </div>
                        <div className='pt-[50px] flex flex-row-reverse gap-[30px]'>

                            <Button >
                                <div className='w-[108px] h-[40px] text-white font-semibold text-center text-[14px] pt-[10px] bg-[#0071E7] rounded-[20px] cursor-pointer' onClick={handleApplyFilter}>Apply Filter</div>
                            </Button>
                            <div className='w-[108px] h-[40px] text-[#0071E7] flex gap-[5px] font-semibold justify-center align-middle text-[14px] pt-[10px] bg-white rounded-[20px] cursor-pointer' onClick={handleClearFilter} > <Image src={clearFilter} className='mb-[12px]' />Clear Filter</div>
                        </div>
                    </div>)
                    :

                    (
                        <div className='w-full h-[100px] '>
                            <div>Filter2</div>
                        </div>
                    )
            }


        </div>
    )
}

export default Filter