import React, { useState } from 'react'
import Image from 'next/image'
import IPolicy from 'public/home/Group 545629/Group 545629@2x.png'

function PrivacyPolicy() {

  var [active,setActive] = useState(1);
  return (
    <>
    <div className="flex min-h-screen flex-row items-center justify-center font-poppins">
      <div className="w-[50%]">
          <div className="text-[45px] font-extrabold text-[#0071E7]">
          Privacy Policy
          </div>
          <br/><br/>
          <div className="text-[16px] font-medium leading-[20px]">
          This privacy policy sets out how Funds ndiaPartner and Wealth India Financial Services Pvt. Ltd. (WIFS) uses and protects an information that vou share<br/><br/> when vou use tais doolcaron.<br/>virS Is committed to ensuring that your privacy is protected at all times. Should we ask you to provide certain information by which you can be identitied<br/><br/> when using this application, you can be assured that it will only be used in accordance with this privacy statement WIES mav change this policy from time to time ov updating this page. This policy is effective from March 1. 2022
          </div>
      </div>
      <div className="w-[50%] p-[63px]">
          <Image src={IPolicy}/>
      </div>
    </div>

    <div className="flex min-h-screen flex-row items-center justify-center font-poppins">
      <div className="w-[30%] leading-[18px]">
          <ul className='w-[100%] min-h-screen text-[18px] font-medium space-y-[50px]'>
            {
              (active==1)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>What We Collect</li>
              :
              <li onClick={()=>{setActive(1)}}>What We Collect</li>
            }
            {
              (active==2)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>Aadhar User Consent Policy</li>
              :
              <li onClick={()=>{setActive(2)}}>Aadhar User Consent Policy</li>
            }
            {
              (active==3)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>Security</li>
              :
              <li onClick={()=>{setActive(3)}}>Security</li>
            }
            {
              (active==4)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>How We Use Cookies</li>
              :
              <li onClick={()=>{setActive(4)}}>How We Use Cookies</li>
            }
            {
              (active==5)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>Links to Other Websites</li>
              :
              <li onClick={()=>{setActive(5)}}>Links to Other Websites</li>
            }
            {
              (active==6)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>Controlling Your Personal Information</li>
              :
              <li onClick={()=>{setActive(6)}}>Controlling Your Personal Information</li>
            }
            {
              (active==7)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>Security Certificates</li>
              :
              <li onClick={()=>{setActive(7)}}>Security Certificates</li>
            }
            {
              (active==8)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>When it Comes To Data Security, Our Goal is to Ensure that</li>
              :
              <li onClick={()=>{setActive(8)}}>When it Comes To Data Security, Our Goal is to Ensure that</li>
            }
            {
              (active==9)?
              <li  className='border-[#0071E7] border-b-[2px] pb-[15px]'>Each of the Seals Below are Verified Daily, and they Hold a Specific Meaning</li>
              :
              <li onClick={()=>{setActive(9)}}>Each of the Seals Below are Verified Daily, and they Hold a Specific Meaning</li>
            }
          </ul>
      </div>
      <div className="w-[72%] p-[63px]">
          <section >

          </section>
      </div>
    </div>
    </>
  )
}

export default PrivacyPolicy