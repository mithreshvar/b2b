"use client"

import { ThemeProvider } from "@mui/material";
import theme from '../../../theme.js'

import Arrow from "/public/partner/Arrow.js";
import { useEffect, useState } from "react";
import Table from "./Table.js";

import { CustomTextField } from "../../InputFields/index.js";
import { useDataContext } from "@/app/context/DataContext.js";

export default function PartnerHome () {

    const {data} = useDataContext();

    if (!data) return(<></>);

    function splitData (data) {
        let data10 = [];
        let tenDatas = [];
        data.map(ele => {
            tenDatas.push(ele);
            if (tenDatas.length === 10) {
                data10.push(tenDatas);
                tenDatas = [];
            }
        })
        if (tenDatas.length > 0) {
            data10.push(tenDatas);
        }
        setDividedData(data10);
        setDividedDataLength(data10.length);
        if (data10.length<=1) setBackActive(false);
    }

    const [dividedData, setDividedData] = useState([]);
    const [dividedDataLength, setDividedDataLength] = useState(0);

    useEffect(()=>{
        splitData(data)
    },[])

    const [frontActive, setFrontActive] = useState(false);
    const [backActive, setBackActive] = useState(true);
    const [pageNo, setPageNo] = useState(0);

    const [pageArray, setPageArray] = useState([2,3,4]);

    const pageUpdate = (pageNo)=>{
        if (dividedDataLength<=4) return;
        if (pageNo<3) {
            pageArray[0] = 2; pageArray[1] = 3; pageArray[2] = 4;
            setPageArray(pageArray)
        }
        else if (pageNo>dividedDataLength-4) {
            pageArray[0] = dividedDataLength-3; pageArray[1] = dividedDataLength-2; pageArray[2] = dividedDataLength-1;
            setPageArray(pageArray)
        }
        else {
            pageArray[0] = pageNo; pageArray[1] = pageNo+1; pageArray[2] = pageNo+2;
            setPageArray(pageArray)
        }
    }

    const pageNoClick = (n) => {
        setPageNo(n);
        pageUpdate(n);
        if(n == dividedDataLength-1) setBackActive(false);
        else setBackActive(true);
        if(n == 0) setFrontActive(false);
        else setFrontActive(true);
    }

    // search function 

    function filterData() {
        const nameReg = new RegExp(name, 'i'); // Case-insensitive regex for name
        const emailReg = new RegExp(email, 'i'); // Case-insensitive regex for email
        const numberReg = new RegExp(number, 'i'); // Case-insensitive regex for number

        const filteredData = data.filter((item) => {
          // Check if the name, email, and number match the provided regex patterns
            return (
                (name === '' || nameReg.test(item.name)) &&
                (email === '' || emailReg.test(item.email)) &&
                (number === '' || numberReg.test(item.phone))
            );
        });
    
        // Now, 'filteredData' contains the filtered data based on the provided criteria.
        splitData(filteredData);
    }
    
    // input variables

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [numberErrorMessage, setNumberErrorMessage] = useState('');

    
    // Handle error change
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        
        //validations
        if (value === "") {
            setEmailErrorMessage("Email cannot be empty");
        } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
            setEmailErrorMessage("Invalid email format");
        } else {
            setEmailErrorMessage("");
        }
    };

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        
        //validations
        if (value === "") {
            setNameErrorMessage("Name cannot be empty");
        } else if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
            setNameErrorMessage("Username can not contain special characters");
        } else {
            setNameErrorMessage("");
        }
    };

    const handleNumberChange = (event) => {
        const value = event.target.value;
        console.log(/^\+\s\d{12}$/.test(value))
        if (! /^\+\s\d{12}$/.test(value) ) {
            setNumber(value);
        }
        
        //validations
        if (value === "") {
            setNumberErrorMessage("Phone Number cannot be empty");
        } else if (!/^(\+91\s)?\d{10}$/.test(value)) {  //! accepts only indian standard number
            setNumberErrorMessage("Invalid phone number");
        } else {
            setNumberErrorMessage("");
        }
    };
    
    

    return(
        <ThemeProvider theme={theme} >
            <div className='flex flex-col h-full gap-y-[20px] overflow-scroll p-[20px]'>
                <div className="text-[14px] font-medium flex justify-between bg-white px-[30px] py-[15px] rounded-[10px]">
                    <p><span className="font-bold">ARN Number:</span> Am-3333 & <span className="font-bold">Expiry Date:</span> 30/oct/2020</p>
                    <p><span className="font-bold">Euin Number:</span> N/A & <span className="font-bold">Expiry Date:</span> N/A</p>
                </div>

                {/* Search Box */}
                <div className=" flex flex-col gap-y-[20px] bg-white p-[20px] rounded-[15px]">
                    <h4 className="text-[20px] font-semibold">Investor Search</h4>
                    <div className="flex gap-x-[50px]">
                        <div className="flex flex-col gap-y-[20px]">
                            <CustomTextField id="userName" label='User Name' sx={{width: '380px'}} type="text" errorMessage={nameErrorMessage} value={name} handleChange={handleNameChange} />
                            <CustomTextField id="mobileNumber" label='Mobile Number' sx={{width: '380px'}} type="number" errorMessage={numberErrorMessage} value={number} handleChange={ handleNumberChange } />
                        </div>
                        <CustomTextField id="userEmail" label='User Email' sx={{width: '380px'}} type="text" errorMessage={emailErrorMessage} value={email} handleChange={handleEmailChange}/>
                    </div>
                    <div className="flex gap-x-[20px] text-[14px] font-bold">
                        <button onClick={()=>{filterData()}} className='w-[108px] h-[40px] bg-primary text-white rounded-[25px]'>Search</button>
                        <button onClick={()=>{}} className='w-[128px] h-[40px] border-[1px] border-primary text-[#0066CD] rounded-[25px] flex items-center justify-center gap-x-[5px] '>Download</button>
                    </div>
                </div>

                {/* Table content */}
                <Table tenData={dividedData[pageNo]} />

                {/* Page Number Navigator */}
                <div className="flex items-center justify-center" >

                    <div className="flex gap-x-[30px] leading-[20px] font-medium text-[14px] items-center">

                        {/* Previous Button */}
                        <button className={`flex items-center gap-x-[5px] ${frontActive ? 'cursor-pointer' : 'cursor-default'}`} 
                            onClick={ () => {
                                if(frontActive) { 
                                    setPageNo(pageNo-1);
                                    pageUpdate(pageNo-1);
                                    if(pageNo-1 == 0) setFrontActive(false);
                                    setBackActive(true) 
                                }
                            }}
                        >
                            <Arrow active={frontActive} left={true} />
                            <p className={` ${frontActive?"text-[#0071e7]":"text-[#6e6e72]"} `} >Previous</p>
                        </button>

                        <div className="flex items-center font-medium">
                            <button onClick={()=>pageNoClick(0)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == 0 && dividedDataLength>1) && 'text-white bg-primary'} `}>{1}</button>
                            <button className={`h-[35px] w-[35px] flex items-center justify-center cursor-default ${ (pageNo<3 || dividedDataLength<=4) && 'hidden ' } `}>...</button>
                            <button onClick={()=>pageNoClick(pageArray[0]-1)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == pageArray[0]-1) && 'text-white bg-primary'} ${ ( dividedDataLength<=1) && 'hidden ' } `}>{pageArray[0]}</button>
                            <button onClick={()=>pageNoClick(pageArray[1]-1)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == pageArray[1]-1) && 'text-white bg-primary'} ${ ( dividedDataLength<=2) && 'hidden ' } `}>{pageArray[1]}</button>
                            <button onClick={()=>pageNoClick(pageArray[2]-1)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == pageArray[2]-1) && 'text-white bg-primary'} ${ ( dividedDataLength<=3) && 'hidden ' } `}>{pageArray[2]}</button>
                            <button className={`h-[35px] w-[35px] flex items-center justify-center cursor-default ${ (pageNo>dividedDataLength-4 || dividedDataLength<=4) && 'hidden ' } `}>...</button>
                            <button onClick={()=>pageNoClick(dividedDataLength-1)} className={`h-[35px] w-[35px] cursor-pointer flex items-center justify-center rounded-[7px] ${(pageNo == dividedDataLength-1) && 'text-white bg-primary'} ${ ( dividedDataLength<=4) && 'hidden ' } `}>{dividedDataLength}</button>
                        </div>
                        
                        {/* Next Button */}
                        <button className={`flex items-center gap-x-[5px] ${backActive ? 'cursor-pointer' : 'cursor-default' }`} 
                            onClick={ () => {
                                if(backActive) {
                                    setPageNo(pageNo+1);
                                    pageUpdate(pageNo+1);
                                    if(pageNo+1 == dividedDataLength-1) setBackActive(false);
                                    setFrontActive(true) 
                                }
                            }}
                        >
                            <p className={` ${backActive?"text-[#0071e7]":"text-[#6e6e72]"} `} >Next</p>
                            <Arrow active={backActive} />
                        </button>
                        
                    </div>

                </div>
            </div>
        </ThemeProvider>
    );
}