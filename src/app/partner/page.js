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

import Dashboard from '/public/partner/Dashboard.js'
import About from '/public/partner/About.js'
import Brokerage from '/public/partner/Brokerage.js'
import Dbf from '/public/partner/Dbf.js'
import Home from '/public/partner/Home.js'
import Manual from '/public/partner/Manual.js'
import Password from '/public/partner/Password.js'
import Portfolio from '/public/partner/Portfolio';
import Registration from '/public/partner/Registration';
import Reports from '/public/partner/Reports';
import Tripartite from '/public/partner/Tripartite';

import back from '/public/partner/back.svg'


export default function NavBar() {

    const [active, setActive] = useState('dashboard');
    const [navOpen, setNavOpen] = useState(true);

    return (
        <ThemeProvider theme={theme} >
            <Box sx={{ flexGrow: 1, zIndex: 2 }}>
            <AppBar position="absolute" sx={{height: '60px', backgroundColor: "white", px: '70px', boxShadow: '0px 3px 6px #0000001A', top:0, left:0}}>
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Link href={'/'}><Image src='/logo.svg' width={125} height={36} /></Link>
                <div className='w-[38px] h-[38px] text-white rounded-full bg-[#6A6C7C] font-medium text-[18px] flex items-center justify-center'>T</div>
                </Toolbar>
            </AppBar>
            </Box>

            <div className='flex h-[calc(100vh-60px)] mt-[60px]'>

                {/* navigation segment */}
                <div className={` h-full py-[35px] px-[20px] flex flex-col gap-y-[30px] overflow-y-scroll overflow-x-visible text-[14px] font-medium text-[#6E6E72] z-20 relative ${(navOpen)? 'w-[250px] ': 'w-[61px]'} `}>

                    <Image src={back} className='absolute right-0 mr-[-9px] ' />

                    <div className='flex gap-x-[14px] items-center relative'>
                        {(active==='dashboard') && <div className='absolute w-[3px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('dashboard')}}><Dashboard active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='dashboard' && 'font-semibold text-primary'}`} onClick={()=>{setActive('dashboard')}} >Dashboard</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'home' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('home')}}><Home active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='home' && 'font-semibold text-primary'}`} onClick={()=>{setActive('home')}} >Partner Home</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'registration' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('registration')}}><Registration active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='registration' && 'font-semibold text-primary'}`} onClick={()=>{setActive('registration')}} >New User Registration</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'tripartite' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('tripartite')}}><Tripartite active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='tripartite' && 'font-semibold text-primary'}`} onClick={()=>{setActive('tripartite')}} >Tripartite Agreement</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'portfolio' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('portfolio')}}><Portfolio active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='portfolio' && 'font-semibold text-primary'}`} onClick={()=>{setActive('portfolio')}} >Partner Portfolio</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'reports' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('reports')}}><Reports active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='reports' && 'font-semibold text-primary'}`} onClick={()=>{setActive('reports')}} >Reports</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'brokerage' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('brokerage')}}><Brokerage active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='brokerage' && 'font-semibold text-primary'}`} onClick={()=>{setActive('brokerage')}} >Brokerage Details</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'dbf' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('dbf')}}><Dbf active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='dbf' && 'font-semibold text-primary'}`} onClick={()=>{setActive('dbf')}} >DBF File Download</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'about' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('about')}}><About active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='about' && 'font-semibold text-primary'}`} onClick={()=>{setActive('about')}} >About Partner</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'manual' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('manual')}}><Manual active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='manual' && 'font-semibold text-primary'}`} onClick={()=>{setActive('manual')}} >Partner Manual</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'password' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('password')}}><Password active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='password' && 'font-semibold text-primary'}`} onClick={()=>{setActive('password')}} >Change Password</h6>
                    </div>

                </div>

                {/* page segment */}
                <div className='bg-[#F5F7FE] h-full w-[calc(100vw-250px)] z-0'>



                </div>

            </div>
        </ThemeProvider>
    );
}