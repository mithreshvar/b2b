import { useState } from 'react'
import Tick from '../../../../../public/callback/successmark.png';
import Image from 'next/image';

function dbf() {
  const[success, setSuccess] = useState(false);
  return (
    <div className='p-[20px]'>
    
      <div className='w-full max-h-min rounded-[15px] bg-white p-[20px]'>
        <div className='text-[20px] leading-[20px] font-semibold'>
        DBF File Download
        </div>
        <div className='text-[14px] pt-[20px] pb-[20px]'>
        <span className='font-semibold'>Note:</span> Only last 60 days (maximum) data will be available for DBF file download.
        </div>
        {
        (!success)?
        <>
        <div>
          {/* date feild */}
        </div>

        <button className='w-[108px] h-[40px] text-[14px] text-white font-bold bg-[#0071E7] rounded-[25px]' onClick={()=>setSuccess(true)}>
        Download
        </button>
        </>
        :
        <div className='flex flex-col items-center'>
          <Image className='w-[113px] h-[133px]' src={Tick}/>
          <div className='text-[#00A345] text-[20px] font-semibold'>
          Downloaded Successfully.
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default dbf