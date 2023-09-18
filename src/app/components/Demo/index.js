"use client"

import Image from 'next/image';
import success from '/public/home/Group 405761/Group 405761@2x.png'

import { useRef, useState } from "react";

import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme";
import { CustomTextField } from '../InputFields';

export default function Demo() {

    const [scheduled, setScheduled] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [comment, setComment] = useState('');

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [mobileErrorMessage, setMobileErrorMessage] = useState('');
    
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
        } else if (!/^[A-Za-z./s]+$/.test(value)) {
            setNameErrorMessage("Invalid Name");
        } else {
            setNameErrorMessage("");
        }
    };
    
    const handleMobileChange = (event) => {
        const value = event.target.value;
        setMobile(value);

        if (value === "") {
            setMobileErrorMessage("Mobile Number cannot be empty");
        } else if (!/^\d{10}$/.test(value)) {
            setMobileErrorMessage("Invalid mobile number format (10 digits required)");
        } else {
            setMobileErrorMessage("");
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="flex min-h-screen flex-col items-center justify-center px-[150px] mt-[-100px] ">
                <div className="flex flex-col gap-y-[10px] items-center justify-center">
                    <h1 className="text-[45px] font-extrabold text-center">Schedule a <span className="text-primary">DEMO</span></h1>
                    <p className="text-[16px] text-center font-medium ">Let us take you through a DEMO of partner.fundsindia.com. In this demo you will be able to experience the platform first hand and View the various features available in it. Just enter your information below to schedule a DEMO with us</p>
                    {
                        (!scheduled) ?
                        <div className=" w-[960px] flex flex-col mt-[20px] p-[30px] gap-y-[30px] items-center shadow-lg rounded-[15px]">
                            <div className="flex flex-col gap-y-[30px]">
                                <div className="flex gap-x-[40px]">
                                    <CustomTextField
                                        label="Name"
                                        value={name}
                                        handleChange={handleNameChange}
                                        errorMessage={nameErrorMessage}
                                    />
                                    <CustomTextField 
                                        label="Mobile Number"
                                        value={mobile}
                                        handleChange={handleMobileChange}
                                        errorMessage={mobileErrorMessage}
                                    />
                                </div>
                                <div className="flex gap-x-[40px]">
                                    <CustomTextField 
                                        label="Email"
                                        value={email}
                                        handleChange={handleEmailChange}
                                        errorMessage={emailErrorMessage}
                                    />
                                    <CustomTextField 
                                        label="Comment"
                                        type = 'text'
                                        value={comment}
                                        handleChange={e => (setComment(e.target.value))}
                                        errorMessage=''
                                    />
                                </div>
                            </div>
                            <button onClick={()=>{setScheduled(true)}} className="bg-primary h-[40px] w-[180px] rounded-[25px] text-white text-[14px] font-bold">SCHEDULE DEMO</button>
                        </div>
                        :
                        <div className=" w-[960px] h-[240px] flex flex-col mt-[20px] p-[30px] gap-y-[7px] items-center shadow-lg rounded-[15px]">
                            <Image src={success} className='w-[113px] h-[132px]' /> 
                            <div className=' text-center font-semibold text-[16px]'>
                                <p>Thank You for showing interest in PartnerFundsindia.</p>
                                <p>A Member of our customer support team will get in touch with you shortly</p>
                            </div>
                        </div>
                    }
                </div>
                
            </div>
        </ThemeProvider>
    );
}
