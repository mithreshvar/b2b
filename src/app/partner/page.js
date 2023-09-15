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

import IDashboard from '/public/partner/Dashboard.js'
import IAbout from '/public/partner/About.js'
import IBrokerage from '/public/partner/Brokerage.js'
import IDbf from '/public/partner/Dbf.js'
import IHome from '/public/partner/Home.js'
import IManual from '/public/partner/Manual.js'
import IPassword from '/public/partner/Password.js'
import IPortfolio from '/public/partner/Portfolio';
import IRegistration from '/public/partner/Registration';
import IReports from '/public/partner/Reports';
import ITripartite from '/public/partner/Tripartite';

import back from '/public/partner/back.svg'
import Dashboard from '../components/partner/Dashboard';


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
                        <span className='cursor-pointer' onClick={()=>{setActive('dashboard')}}><IDashboard active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='dashboard' && 'font-semibold text-primary'}`} onClick={()=>{setActive('dashboard')}} >Dashboard</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'home' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('home')}}><IHome active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='home' && 'font-semibold text-primary'}`} onClick={()=>{setActive('home')}} >Partner Home</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'registration' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('registration')}}><IRegistration active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='registration' && 'font-semibold text-primary'}`} onClick={()=>{setActive('registration')}} >New User Registration</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'tripartite' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('tripartite')}}><ITripartite active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='tripartite' && 'font-semibold text-primary'}`} onClick={()=>{setActive('tripartite')}} >Tripartite Agreement</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'portfolio' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('portfolio')}}><IPortfolio active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='portfolio' && 'font-semibold text-primary'}`} onClick={()=>{setActive('portfolio')}} >Partner Portfolio</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'reports' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('reports')}}><IReports active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='reports' && 'font-semibold text-primary'}`} onClick={()=>{setActive('reports')}} >Reports</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'brokerage' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('brokerage')}}><IBrokerage active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='brokerage' && 'font-semibold text-primary'}`} onClick={()=>{setActive('brokerage')}} >Brokerage Details</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'dbf' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('dbf')}}><IDbf active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='dbf' && 'font-semibold text-primary'}`} onClick={()=>{setActive('dbf')}} >DBF File Download</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'about' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('about')}}><IAbout active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='about' && 'font-semibold text-primary'}`} onClick={()=>{setActive('about')}} >About Partner</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'manual' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('manual')}}><IManual active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='manual' && 'font-semibold text-primary'}`} onClick={()=>{setActive('manual')}} >Partner Manual</h6>
                    </div>

                    <div className='flex gap-x-[14px] items-center relative '>
                        {active === 'password' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                        <span className='cursor-pointer' onClick={()=>{setActive('password')}}><IPassword active={active} /></span>
                        <h6 className={`cursor-pointer ${active==='password' && 'font-semibold text-primary'}`} onClick={()=>{setActive('password')}} >Change Password</h6>
                    </div>

                </div>

                {/* page segment */}
                <div className='bg-[#F5F7FE] h-full w-[calc(100vw-250px)] z-0 p-[20px] pr-0 '>

                    {
                        (active==='about' && <Dashboard /> )||
                        (active==='brokerage' && <Dashboard /> )||
                        (active==='dashboard' && <Dashboard /> )||
                        (active==='dbf' && <Dashboard /> )||
                        (active==='home' && <Dashboard /> )||
                        (active==='manual' && <Dashboard /> )||
                        (active==='password' && <Dashboard /> )||
                        (active==='portfolio' && <Dashboard /> )||
                        (active==='registration' && <Dashboard /> )||
                        (active==='reports' && <Dashboard /> )||
                        (active==='tripartite' && <Dashboard /> )
                    }

                </div>

            </div>
        </ThemeProvider>
    );
}