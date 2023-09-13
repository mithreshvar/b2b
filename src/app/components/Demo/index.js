"use client"

import Image from 'next/image';
import success from '../../../../public/home/Group 405761/Group 405761@2x.png'

import { useState } from "react";

export default function Demo() {

    const [scheduled, setScheduled] = useState(false);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-[150px] mt-[-100px] ">
            <div className="flex flex-col gap-y-[10px] items-center justify-center">
                <h1 className="text-[45px] font-extrabold text-center">Schedule a <span className="text-[#0071E7]">DEMO</span></h1>
                <p className="text-[16px] text-center font-medium ">Let us take you through a DEMO of partner.fundsindia.com. In this demo you will be able to experience the platform first hand and View the various features available in it. Just enter your information below to schedule a DEMO with us</p>
                {
                    (!scheduled) ?
                    <div className=" w-[960px] h-[240px] flex flex-col mt-[20px] p-[30px] gap-y-[30px] items-center shadow-lg rounded-[15px]">
                        <div className="flex gap-x-[40px]">
                            <div className="flex flex-col gap-y-[30px]">
                                <input 
                                    placeholder="Name"
                                    className="h-[40px] w-[350px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px]" 
                                    type="text"
                                />
                                <input 
                                    placeholder="Email"
                                    className="h-[40px] w-[350px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px]" 
                                    type="email"
                                />
                            </div>
                            <div className="flex flex-col gap-y-[30px]">
                                <input 
                                    placeholder="Mobile Number"
                                    className="h-[40px] w-[350px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px]" 
                                    type="text"
                                />
                                <input 
                                    placeholder="Comment"
                                    className="h-[40px] w-[350px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px]" 
                                    type="text"
                                />
                            </div>
                        </div>
                        <button onClick={()=>{setScheduled(true)}} className="bg-[#0071E7] h-[40px] w-[180px] rounded-[25px] text-white text-[14px] font-bold">SCHEDULE DEMO</button>
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
    );
}
