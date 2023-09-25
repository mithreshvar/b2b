import { useState } from 'react'
import Tick from 'public/callback/successmark.png';
import Image from 'next/image';
import { CustomTextField } from '../../InputFields';

function about() {
  const[success, setSuccess] = useState(false);
  const[About, setAbout] = useState('My wealth advisor allows management of client’s family accounts under one client id easily. For example, multiple accounts can be created for one family for a husband. wife. minor account for children etc To add multiple accounts for a single family, the steps are similar to the steps above for creating a client account. Except, in this case instead of using the Ad?? New user registrationAc?? (Step 1 above), the the following: 1. Login using the Advisor account to My wealth Advisor 2. Click on the investor for whom an additional investment account needs to be added 3. Click on À¢??My Info on the top bar 4. Click on ¢??Add investorÂ¢?? on the side bar')
  
  const handleAboutChange = (event)=>{
    setAbout(event.target.value);
  }
  return (
    <div className='p-[20px]'>
    
      <div className=' flex flex-col w-full h-full rounded-[15px] bg-white p-[20px]'>
        <div className='text-[20px] leading-[20px] font-semibold pb-[20px] '>
        About Partner
        </div>
        {
        (!success)?
        <div className='flex flex-col gap-[20px]'>
          <CustomTextField type='text' width='100%' height='194px' multiline value={About} handleChange={handleAboutChange}/>

        <button className='w-[128px] h-[40px] text-[14px] text-white font-bold bg-[#0071E7] rounded-[25px]' onClick={()=>setSuccess(true)}>
        Submit
        </button>
        </div>
        :
        <div className='flex flex-col self-center h-full  items-center justify-center'>
          <Image className='w-[113px] h-[133px]' src={Tick}/>
          <div className='text-[#00A345] text-[20px] font-semibold'>
          About Partner Message Updated Successfully. 
          </div>
        </div>
        }
        </div>
    </div>
  )
}

export default about