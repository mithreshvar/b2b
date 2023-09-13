

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[80px] font-poppins">

      <div className="flex justify-between h-screen gap-x-[40px] pt-[80px]">
        <div>
          <p className="text-[#0071E7] text-[26px] font-bold">Easy to use online platform</p>
          <h1 className=" text-[45px] font-extrabold">That lets you <span className="text-[#0071E7]">service clients</span> from anywhere in the world</h1>
        </div>

        <div>

        </div>
      </div>
      
      <div className="h-screen flex flex-col items-center justify-center px-[70px]">

        <h2 className="text-[#0071E7] text-[35px] mb-[60px]">Connect <span className="text-black">and</span> Grow!</h2>
        <div className="flex gap-x-[100px]">

          <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
            <h5 className="text-[16px] font-semibold ">Shift your Business to higher levels of Success and Value</h5>
            <p className="text-[14px] ">Innovative interface that guides you step-by-step and makes Partner services easy! Provide access to a wide range of value-added services to your clients and give them the investment edge they deserve.</p>
          </div>
          <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
            <h5 className="text-[16px] font-semibold ">Give your clients the online advantage</h5>
            <p className="text-[14px] ">Provide a host of benefits when your clients access their investments on our easy to use online platform. All you need is an internet connection and a FundsIndiaPartner account.</p>
          </div>
          <div className="text-center gap-y-[20px] flex-col flex border-[1px] border-[#F0F1F4] rounded-[20px] h-[365px] w-[340px] items-center justify-center px-[35px]">
            <h5 className="text-[16px] font-semibold ">Connect, Communicate & Collaborate</h5>
            <p className="text-[14px] ">Connect with clients across geographical barriers, grow business, access cutting-edge advice delivery tools & services to increase the levels of success and value in your practice.</p>
          </div>

        </div>
        
      </div>

      <div className="h-screen flex items-center justify-center  px-[40px]">
        <div className="flex flex-col p-[60px] pt-[50px] gap-y-[30px] bg-white rounded-[15px] shadow-lg">
          <h3 className=" text-[26px] font-semibold text-center">Empanel with us for <span className="text-[#0071E7]">FREE!</span></h3>
          <div className="flex gap-x-[50px]">

            <div className="flex flex-col gap-y-[25px] text-[14px]">
              <input 
                placeholder="Name"
                className="h-[40px] w-[350px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px]" 
                type="text"
              />
              <input 
                placeholder="Email"
                className="h-[40px] w-[350px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px]" 
                type="email"
              />
              <input 
                placeholder="Captcha"
                className="h-[40px] w-[185px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px] mt-[5px]" 
                type="text"
              />

            </div>
            <div className="flex flex-col gap-y-[25px] text-[14px]">
              <input 
                placeholder="Mobile Number"
                className="h-[40px] w-[350px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px]" 
                type="text"
              />
              <input 
                placeholder="Phone Number"
                className="h-[40px] w-[350px] rounded-[10px] border-[1px] border-[#E4E5E5] px-[20px]" 
                type="text"
              />
              <button className="bg-[#0071E7] h-[40px] w-[165px] rounded-[25px] text-white font-bold self-end">Submit</button>

            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
