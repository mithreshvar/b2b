"use client"

import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';
import ClientRequirement from '../components/ClientRequirement';
import ThreeAndHalf from '../components/ThreeAndHalf';
import WealthEquation from '../components/WealthEquation';
import Recommendation from '../components/Recommendation';
import SuggestedPortfolio from '../components/SuggestedPortfolio';
import GoalPlanner from '../components/GoalPlanner';


export default function Content() {

    const [active, setActive] = useState('Client Requirement');

    
    function handleRoute(route) {
        setActive(route)
    }

    return (
        <ThemeProvider theme={theme} >
            <div className=' overflow-auto relative'>
                <div>
                <Box sx={{ flexGrow: 1, zIndex: 1 }}>
                    <AppBar position={(false)?"static":"absolute"} sx={{height: '60px', backgroundColor: "white", px: '40px', boxShadow: '0px 3px 6px #0000001A', top:0, left:0, '& .MuiToolbar-regular': {padding: '0px'}}}>
                        <Toolbar sx={{display: "flex", justifyContent: "start", alignItems: 'center'}}>
                        <div className='flex gap-x-[10px] items-center'>
                            <Link href={'/portfolio-builder'}><Image src='/logo.svg' width={125} height={36} /></Link>
                        </div>
                        </Toolbar>
                    </AppBar>
                </Box>

                    <div className={`flex flex-col bg-[#F5F7FE] h-[calc(100vh-60px)] relative px-[50px] ${(!(false)) && ' mt-[60px]'} `}> {/* */}
                        
                        {/* {
                            (notificationMessage == 'Portfolio Deleted Successfully' || notificationMessage == 'Successfully Downloaded' ) &&
                            <div className='absolute z-[1] top-[20px] right-[45px] bg-[#E2FFEE] rounded-[6px] border-[2px] border-[#04A345] p-[10px] flex gap-x-[10px] items-center'>
                                <CheckCircleRoundedIcon className='text-[#04A345]' />
                                <p className=' text-[#04A345] text-[14px] font-bold'>{notificationMessage}  </p>
                            </div>
                        } */}
                        {/* navigation segment */}
                        <div className='flex justify-between items-center h-[80px] shrink-0 text-[14px] font-semibold'>
                            <button onClick={() => handleRoute('Client Requirement') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active == 'Client Requirement' ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Client Requirement</button>
                            <div className=' w-[40px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Three & Half Box Money') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active == 'Three & Half Box Money' ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Three & Half Box Money</button>
                            <div className=' w-[40px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Wealth Equation') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active == 'Wealth Equation' ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Wealth Equation</button>
                            <div className=' w-[40px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Recommendation') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active == 'Recommendation' ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Recommendation</button>
                            <div className=' w-[40px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Suggested Portfolio') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active == 'Suggested Portfolio' ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Suggested Portfolio</button>
                            <div className=' w-[40px] h-0 border-[#e4e5e5] border-[1px] ' />
                            <button onClick={() => handleRoute('Goal Planner') } className={` h-[40px] px-[20px] py-[10px] flex justify-center items-center rounded-[25px]  ${active == 'Goal Planner' ? ' bg-primary text-white ' : ' bg-[#f8f9fa] border-[1px] border-[#e4e5e5] ' } `} >Goal Planner</button>
                        </div>

                        {/* page segment */}
                        <div className={` h-full w-full duration-[0.6s] transition-all overflow-auto z-0`}>

                            {
                                ((active == 'Client Requirement') && <ClientRequirement />)||
                                ((active == 'Three & Half Box Money') && <ThreeAndHalf />)||
                                ((active == 'Wealth Equation') && <WealthEquation />)||
                                ((active == 'Recommendation') && <Recommendation />)||
                                ((active == 'Suggested Portfolio') && <SuggestedPortfolio />)||
                                ((active == 'Goal Planner') && <GoalPlanner />)
                            }

                        </div>

                    </div>
                </div>   
            </div>
        </ThemeProvider>
    );
}