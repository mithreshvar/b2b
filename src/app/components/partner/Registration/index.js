import { TextField } from '@mui/material'
import { useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

function Registration() {
  var[success, setSuccess] = useState(false);

  const[email,setEmail] = useState('');
  const[name,setName] = useState('');
  const[mobilenumber,setMobilenumber] = useState('');


  return (
    <>
    {
      (!success) ?
      <div className='w-full p-[20px] bg-white rounded-[15px]'>
        <div className='text-[20px] font-semibold pb-[20px]'>
          Account Creation
        </div>
        <div className='grid gap-[20px] grid-cols-2'>
          <TextField className='w-[380px]' type='email' label='Email' id='email'/>
          <TextField className='w-[380px]' type='text' label='Name' id='name'/>
          {/* <TextField  type='tel' label='Mobile Number' id='mobilenumber'/> */}
          <PhoneInput style={{borderRadius: '10px'}} defaultCountry="in" value={mobilenumber} onChange={(mobilenumber) => setMobilenumber(mobilenumber)}/>
        </div>
          
        <div className='text-[14px] font-medium text-[#6E6E72] pt-[15px] pb-[20px]'>
          For NRIs, Please enter the appropriate country code followed by their mobile number.
        </div>
        <button className='w-[166px] h-[40px] text-[14px] text-white font-bold bg-[#0071E7] rounded-[25px] ' onClick={()=>{setSuccess(true)}}>
        Create Account
        </button>
      </div>
      :
      <div>
        <div className='w-[990px] h-[84px] bg-white p-[20px] rounded-[15px]'>
          <div className='text-[20px] font-semibold'>Account Type</div>
          <div className='text-[#6E6E72] text-[14px] font-medium'>To Create an Account please click on relevant Button below.</div>
        </div>
        <div className='grid gap-[20px] grid-cols-2 pt-[20px] pr-[20px] '>

          <div className='w-[485px] h-[180px] bg-white rounded-[15px] p-[20px]'>
            <div className='text-[18px] font-semibold leading-[18px]'>
            Resident Individual
            </div>
            <div className='text-[14px] pt-[15px] pb-[35px] leading-[20px]'> 
            If the investor is an adult resident of India, please create the account as a ‘Resident Individual’.
            </div>
            {/* Here the button is not placed exactly as given in the desgin due to default font */}
            <button className='w-[200px] h-[38px] bg-[#0071E7] text-white rounded-[25px] text-[14px]'>
            Resident Individual
            </button>
          </div>

          <div className='w-[485px] h-[180px] bg-white rounded-[15px] p-[20px]'>
            <div className='text-[18px] font-semibold leading-[18px] '>
            Non Resident Individual
            </div>
            <div className='text-[14px] pt-[15px] pb-[15px] leading-[20px]'> 
            If the investor is either an Indian citizen or a person of Indian origin, and resides outside of India, please create the account as a Nonresident Individual
            </div>
            {/* Here the button is not placed exactly as given in the desgin due to default font */}
            <button className='w-[200px] h-[38px] bg-[#0071E7] text-white rounded-[25px] text-[14px]'>
            Non Resident Individual
            </button>
          </div>

          <div className='w-[485px] h-[228px] bg-white rounded-[15px] p-[20px]'>
            <div className='text-[18px] font-semibold leading-[18px] '>
            Minor
            </div>
            <div className='text-[14px] pt-[15px] pb-[20px] leading-[20px]'> 
            If the investor is less than 18 years old, please create the account as a Minor account. Please note that you would need to provide information about an adult guardian (with proof of relationship) and a bank account in the name of the minor under the guardianship of the adult guardian.
            </div>
            {/* Here the button is not placed exactly as given in the desgin due to default font */}
            <button className='w-[200px] h-[38px] bg-[#0071E7] text-white rounded-[25px] text-[14px]'>
            Minor
            </button>
          </div>

          <div className='w-[485px] h-[228px] bg-white rounded-[15px] p-[20px]'>
            <div className='text-[18px] font-semibold leading-[18px] '>
            Corporates / HUF
            </div>
            <div className='text-[14px] pt-[15px] pb-[63px] leading-[20px]'> 
            If the investments will be made in the name of a non-individual - a company or a Hindu Undivided Family (HUF), please use this type of account creation
            </div>
            {/* Here the button is not placed exactly as given in the desgin due to default font */}
            <button className='w-[200px] h-[38px] bg-[#0071E7] text-white rounded-[25px] text-[14px]'>
            Corporates / HUF
            </button>
          </div>

        </div>
      </div>

    }
    </>
  )
}

export default Registration