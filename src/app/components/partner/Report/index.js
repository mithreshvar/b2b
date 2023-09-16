import Image from "next/image"
// import IReport from '../../../../../public/partner/'

function report() {
  return (
    <div className="p-[20px]" >
      <div className="w-full h-[469px] bg-white p-[20px] rounded-[20px]  ">

        <div className="text-[20px] font-semibold leading-[20px]">Reports</div>

        <div className="flex flex-col h-[259px] items-center">
          <div className="w-[169px] h-[177px]">
            {/* <Image src={IReport}/> */}
          </div>
          <div className="text-[18px] leading-[18px] mt-[30px] mb-[20px]">
          Coming Soon-Reports
          </div>
          <div className="text-[14px]  leading-[14px] text-[#6E6E72] ">
          Stay tuned for updates.
          </div>

        </div>

      </div>
    </div>
  )
}

export default report