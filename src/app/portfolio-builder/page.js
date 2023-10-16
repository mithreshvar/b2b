"use client"
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from '@mui/material';
import theme from './theme';


export default function  Home() {
    
    return (
        <ThemeProvider theme={theme} >
        <div className=' overflow-auto relative'>
            <Box sx={{ flexGrow: 1, zIndex: 1 }}>
                <AppBar position={(false)?"static":"absolute"} sx={{height: '60px', backgroundColor: "white", px: '40px', boxShadow: '0px 3px 6px #0000001A', top:0, left:0, '& .MuiToolbar-regular': {padding: '0px'}}}>
                    <Toolbar sx={{display: "flex", justifyContent: "start", alignItems: 'center'}}>
                    <div className='flex gap-x-[10px] items-center'>
                        <Link href={'/portfolio-builder'}><Image src='/logo.svg' width={125} height={36} /></Link>
                    </div>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <div className={`flex flex-col relative ${(!(false)) && ' mt-[60px]'} `}>
                <div className={`bg-gradient-to-b from-[#f6fafe] to-white h-[calc(100vh-60px)] w-full duration-[0.6s] transition-all overflow-auto z-0`}>
                    
                </div>
                <div className={`bg-white h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>

                </div>
                <div className={`bg-white h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>

                </div>
                <div className={`bg-white h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>

                </div>
                <div className={`bg-white h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>

                </div>
                <div className={`bg-gradient-to-t from-[#f6fafe] to-white h-screen w-full duration-[0.6s] transition-all overflow-auto z-0`}>

                </div>
            </div>
        </div>
        </ThemeProvider>

    );
}