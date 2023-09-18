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
import { useRouter, useSearchParams } from 'next/navigation';

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

// import back from '/public/partner/back.svg'

//region - Component imports
import Dashboard from '../components/partner/Dashboard';
import Registration from '../components/partner/Registration';
import Report from '../components/partner/Report';
import Dbf from '../components/partner/Dbf'
import About from '../components/partner/About';
import Manual from '../components/partner/Manual';
import Phase3 from '../components/partner/Phase3';
import Tripartite from '../components/partner/Tripartite';
import PartnerHome from '../components/partner/PartnerHome';
import Brokerage from '../components/partner/Brokerage';
import Portfolio from '../components/partner/Portfolio';
import Password from '../components/partner/Password';
import { ClearRounded } from '@mui/icons-material';
import { useDataContext } from '../context/DataContext';
import CustomTable from '../components/partner/PartnerHome/CustomTable';
import { get5Data } from '../components/partner/PartnerHome/dummyData';
//endregion

export default function Content() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const tab = searchParams.get('tab');

    const [active, setActive] = useState(tab || 'dashboard');
    const [navOpen, setNavOpen] = useState(true);

    const {popup, setPopup, deletePopup, setDeletePopup, investor, setSip, setAddScheme} = useDataContext();

    function handleRoute(tab) {
        setActive(tab);
        if (tab == 'dashboard') router.push('/partner', undefined, { shallow: true });
        else router.push(`/partner?tab=${tab}`, undefined, { shallow: true });
    }

    return (
        <ThemeProvider theme={theme} >
            <div className=' overflow-auto'>
                <div>
                    <Box sx={{ flexGrow: 1, zIndex: 1 }}>
                    <AppBar position={(popup||deletePopup)?"static":"absolute"} sx={{height: '60px', backgroundColor: "white", px: '70px', boxShadow: '0px 3px 6px #0000001A', top:0, left:0}}>
                        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                        <Link href={'/'}><Image src='/logo.svg' width={125} height={36} /></Link>
                        <div className='w-[38px] h-[38px] text-white rounded-full bg-[#6A6C7C] font-medium text-[18px] flex items-center justify-center'>T</div>
                        </Toolbar>
                    </AppBar>
                    </Box>

                    <div className={`flex h-[calc(100vh-60px)] ${(!(popup||deletePopup)) && ' mt-[60px]'} `}> {/* */}

                        {/* navigation segment */}
                        <div className={` h-full py-[35px] px-[20px] flex flex-col gap-y-[30px] overflow-y-scroll overflow-x-hide text-[14px] font-medium text-[#6E6E72] ${(navOpen)? 'w-[250px] ': 'w-[61px]'} `}>

                            {/* <Image src={back} className='absolute left-[240px] z-[2] cursor-pointer ' onClick={()=>{setNavOpen(!navOpen)}} /> */}

                            <div className='flex gap-x-[14px] items-center relative'>
                                {(active==='dashboard') && <div className='absolute w-[3px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('dashboard')}}><IDashboard active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='dashboard' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('dashboard')}} >Dashboard</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'home' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{setSip(false); handleRoute('home');}}><IHome active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='home' && 'font-semibold text-primary'}`} onClick={()=>{setSip(false); handleRoute('home')}} >Partner Home</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'registration' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('registration')}}><IRegistration active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='registration' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('registration')}} >New User Registration</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'tripartite' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('tripartite')}}><ITripartite active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='tripartite' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('tripartite')}} >Tripartite Agreement</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'portfolio' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{ setAddScheme(false); handleRoute('portfolio')}}><IPortfolio active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='portfolio' && 'font-semibold text-primary'}`} onClick={()=>{ setAddScheme(false); handleRoute('portfolio')}} >Partner Portfolio</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'reports' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('reports')}}><IReports active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='reports' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('reports')}} >Reports</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'brokerage' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('brokerage')}}><IBrokerage active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='brokerage' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('brokerage')}} >Brokerage Details</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'dbf' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('dbf')}}><IDbf active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='dbf' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('dbf')}} >DBF File Download</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'about' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('about')}}><IAbout active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='about' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('about')}} >About Partner</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'manual' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('manual')}}><IManual active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='manual' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('manual')}} >Partner Manual</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'password' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('password')}}><IPassword active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='password' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('password')}} >Change Password</h6>
                            </div>

                            <div className='flex gap-x-[14px] items-center relative '>
                                {active === 'phase3' && <div className='absolute w-[4px] h-[30px] rounded-r-[2px] bg-primary ml-[-19px]' />}
                                <span className='cursor-pointer' onClick={()=>{handleRoute('phase3')}}><IPassword active={active} /></span>
                                <h6 className={`cursor-pointer ${active==='phase3' && 'font-semibold text-primary'}`} onClick={()=>{handleRoute('phase3')}} > Phase 3</h6>
                            </div>

                        </div>

                        {/* page segment */}
                        <div className='bg-[#F5F7FE] h-full w-[calc(100vw-250px)] z-0'>

                            {
                                (active==='about' && <About /> )||
                                (active==='brokerage' && <Brokerage /> )||
                                (active==='dashboard' && <Dashboard /> )||
                                (active==='dbf' && <Dbf /> )||
                                (active==='home' && <PartnerHome setActive={setActive}/> )||
                                (active==='manual' && <Manual /> )||
                                (active==='password' && <Password /> )||
                                (active==='portfolio' && <Portfolio /> )||
                                (active==='registration' && <Registration /> )||
                                (active==='reports' && <Report /> )||
                                (active==='tripartite' && <Tripartite /> )||
                                (active==='phase3' && <Phase3 /> )
                            }

                        </div>

                    </div>
                </div>   
            </div> 
            {(popup) &&
                <div className='absolute w-screen h-screen z-20 top-0 bg-[rgba(10,22,8,0.3)] flex items-end justify-center' >
                    <div className='relative w-full rounded-t-[25px] bg-white p-[40px] flex flex-col gap-y-[50px]  items-center '>
                        <ClearRounded className='absolute top-[15px] right-[15px] cursor-pointer text-primary' onClick={()=>{setPopup(false)}} />
                        <div className='flex flex-col w-full'>
                            <h2 className='text-[20px] font-semibold '>View Investors by Groups</h2>
                            <CustomTable headers={['S.No','Investor Name','Date of Birth','PAN Number','Complete Application','Received Application','KYC','Status']} data={get5Data(investor)} />
                        </div>
                    </div>
                </div>
            }
            {(deletePopup) &&
                <div className='absolute w-screen h-screen top-0 bg-[rgba(10,22,8,0.3)] flex items-end justify-center' >
                    <div className='relative w-full rounded-t-[25px] bg-white p-[40px] text-center flex flex-col gap-y-[50px]  items-center '>
                        <ClearRounded className='absolute top-[15px] right-[15px] cursor-pointer text-primary' onClick={()=>{setDeletePopup(false)}} />
                    </div>
                </div>
            }
        </ThemeProvider>
    );
}