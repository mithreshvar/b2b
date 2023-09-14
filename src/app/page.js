"use client"

import { useState } from 'react';
import Home from './components/Home'
import Demo from './components/Demo';
import Callback from './components/Callback';

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import phoneIcon from '../../public/home/Group 511824/Group 511824@2x.png'
import partner from '../../public/home/Mask Group 29511/Mask Group 29511@2x.png'
import investor from '../../public/home/Mask Group 29512/Mask Group 29512@2x.png'
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

export default function HomePage() {

  const [route, setRoute] = useState('Home');
  const [login, setLogin] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <main className={`flex h-screen flex-col items-center px-[80px] font-poppins ${(login)?' overflow-hidden':''}`}> 
        <div className={` w-full ${(login)?' opacity-20 pointer-events-none select-none ':''}`}>
          <div className='w-full flex justify-between items-center h-[100px] px-[20px] z-[1]'>
            <div className='text-[26px]'><Link href={'/'}>FundsIndia</Link></div>
            <div className='flex gap-x-[30px] font-semibold text-[14px] text-[#6E6E72] items-center'>
              <h6 className={` cursor-pointer ${(route=='Home')?'text-[#0066CD]':''}`} onClick={()=>{setRoute('Home')}}>Home</h6>
              <h6 className={` cursor-pointer ${(route=='Why FundsIndiaPartner?')?'text-[#0066CD]':''}`} onClick={()=>{setRoute('Why FundsIndiaPartner?')}}>Why FundsIndiaPartner?</h6>
              <h6 className={` cursor-pointer ${(route=='Demo')?'text-[#0066CD]':''}`} onClick={()=>{setRoute('Demo')}}>Demo</h6>
              <h6 className={` cursor-pointer ${(route=='Register With Us')?'text-[#0066CD]':''}`} onClick={()=>{setRoute('Register With Us')}}>Register With Us</h6>
              <h6 className={` cursor-pointer ${(route=='Contact us')?'text-[#0066CD]':''}`} onClick={()=>{setRoute('Contact us')}}>Contact us</h6>
              <button onClick={()=>{setLogin(true)}} className='w-[96px] h-[35px] bg-primary text-white rounded-[25px]'>Login</button>
              <button onClick={()=>{setRoute('Callback')}} className='w-[119px] h-[35px] border-[1px] border-primary text-[#0066CD] rounded-[25px] flex items-center justify-center gap-x-[5px] '><Image src={phoneIcon} className='w-[12px] h-[12px]'/>Callback</button>
            </div>
          </div>
          {
            (route==='Home' && <Home/>) || 
            (route==='Why FundsIndiaPartner?' && <p>Why FundsIndiaPartner?</p>) || 
            (route==='Demo' && <Demo/>) ||
            (route==='Register With Us' && <p>Register With Us</p>) || 
            (route==='Contact us' && <p>Contact us</p>) || 
            (route==='Callback' && <Callback />)
          }
        </div>
        {(login) &&
          <div className='absolute w-screen h-screen bg-[rgba(10,22,8,0.3)] flex items-center justify-center' >
            <div className='relative w-[840px] h-[450px] rounded-[20px] bg-white py-[70px] px-[80px] text-center flex flex-col gap-y-[50px]  items-center '>
              <ClearRoundedIcon className='absolute top-[15px] right-[15px] cursor-pointer text-primary' onClick={()=>{setLogin(false)}} />
              <h2 className='text-[24px] font-semibold'>A revolutionary platform for all your investment needs</h2>
              <div className='flex gap-x-[120px]'>
                <div className='w-[260px] h-[210px] flex flex-col items-center justify-center p-[10px] gap-y-[30px] shadow-lg rounded-[20px]'>
                  <Image src={partner} className='w-[85px] h-[113px]' />
                  <Link href={'/register-with-us'}  className='w-[116px] h-[35px] text-white text-[14px] font-semibold bg-primary rounded-[25px] flex items-center justify-center'>Partner</Link>
                </div>
                <div className='w-[260px] h-[210px] flex flex-col items-center justify-center p-[10px] gap-y-[30px] shadow-lg rounded-[20px]'>
                  <Image src={investor} className='w-[97px] h-[115px]' />
                  <button className='w-[116px] h-[35px] text-white text-[14px] font-semibold bg-primary rounded-[25px]'>Investor</button>
                </div>
              </div>
            </div>
          </div>
        }
      </main>
    </ThemeProvider>
  )
}
