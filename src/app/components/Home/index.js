"use client"

import Image from 'next/image'
import slider1 from '../../../../public/home/Group 544804/Group 544804@2x.png'
import img1 from '../../../../public/home/Group 483641/Group 483641@2x.png'
import img2 from '../../../../public/home/Group 498762/Group 498762@2x.png'
import img3 from '../../../../public/home/Group 498555/Group 498555@2x.png'
import success from '../../../../public/home/Group 405761/Group 405761@2x.png'
import { useState } from 'react'

import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme";
import {
    TextField,
} from "@mui/material";

export default function Home() {

    const [empannelSuccess, setEmpannelSuccess] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <div className="flex h-screen gap-x-[40px] px-[10px] items-center mt-[-60px]">
                <div className=' flex flex-col gap-y-[10px]'>
                <p className="text-primary text-[26px] font-bold">Easy to use online platform</p>
                <h1 className=" text-[45px] font-extrabold">That lets you <span className="text-primary">service clients</span> from anywhere in the world</h1>
                </div>
                <Image src={slider1} className='w-[525px] h-[555px]' />
            </div>

            <div className="h-screen flex flex-col items-center justify-center px-[70px]">

                <h2 className="text-primary text-[35px] mb-[60px] font-bold">Connect <span className="text-black">and</span> Grow!</h2>
                <div className="flex gap-x-[30px]">

                <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
                    <Image src={img1} className='w-[105px] h-[78px]' />
                    <h5 className="text-[16px] font-semibold ">Shift your Business to higher levels of Success and Value</h5>
                    <p className="text-[14px] ">Innovative interface that guides you step-by-step and makes Partner services easy! Provide access to a wide range of value-added services to your clients and give them the investment edge they deserve.</p>
                </div>
                <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
                    <Image src={img2} className='w-[143px] h-[84px]' />
                    <h5 className="text-[16px] font-semibold ">Give your clients the online advantage</h5>
                    <p className="text-[14px] ">Provide a host of benefits when your clients access their investments on our easy to use online platform. All you need is an internet connection and a FundsIndiaPartner account.</p>
                </div>
                <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
                    <Image src={img3} className='w-[187px] h-[87px]' />
                    <h5 className="text-[16px] font-semibold ">Connect, Communicate & Collaborate</h5>
                    <p className="text-[14px] ">Connect with clients across geographical barriers, grow business, access cutting-edge advice delivery tools & services to increase the levels of success and value in your practice.</p>
                </div>

                </div>
                
            </div>

            <div className="h-screen flex items-center justify-center  px-[40px]">
            {
                (!empannelSuccess) ?
                <div className="w-[870px] h-[351px] flex flex-col p-[60px] pt-[50px] gap-y-[30px] rounded-[15px] shadow-lg items-center">
                    <h3 className=" text-[26px] font-semibold text-center">Empanel with us for <span className="text-primary">FREE!</span></h3>
                    <div className="flex gap-x-[50px]">

                    <div className="flex flex-col gap-y-[25px] text-[14px]">
                        <TextField
                            id='name' 
                            label="Name"
                            sx={{width:'350px'}}
                        />
                        <TextField 
                            id='email'
                            label="Email"
                            sx={{width:'350px'}}
                        />
                        <TextField 
                            id='captcha'
                            label="Captcha"
                            sx={{width:'185px'}}
                        />

                    </div>
                    <div className="flex flex-col gap-y-[25px] text-[14px]">
                        <TextField 
                            id='mobile'
                            label="Mobile Number"
                            sx={{width:'350px'}} 
                        />
                        <TextField
                            id='phone' 
                            label="Phone Number"
                            sx={{width:'350px'}}
                        />
                        <button onClick={()=>{setEmpannelSuccess(true)}} className="bg-primary h-[40px] w-[165px] rounded-[25px] text-white font-bold self-end">Submit</button>

                    </div>

                    </div>
                </div>
                :
                <div className="w-[870px] h-[351px] flex flex-col py-[68px] px-[46px] gap-y-[15px] rounded-[15px] shadow-lg items-center">
                    <Image src={success} className='w-[113px] h-[132px]' />
                    <h3 className='text-[24px] text-[#00A345] font-semibold leading-[30px]'>Success</h3>
                    <p className='text-[16px] font-semibold text-center leading-[24px]'>Thanks for empanelling with us, we shall get in touch with you to complete the empanelment process.</p>
                </div>
            }
                
            </div>
        </ThemeProvider>
    )
}
