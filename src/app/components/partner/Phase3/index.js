import Image from "next/image"
import IPhase3 from 'public/partner/shutterstock_2130751070 [Converted]/shutterstock_2130751070 [Converted]@2x.png'

function phase3() {
  return (
    <div className="p-[20px]" >
      <div className="w-full h-[469px] bg-white p-[20px] rounded-[20px]  ">
        <div className="text-[20px] font-semibold leading-[20px]">Phase 3</div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-[169px]">
            <Image src={IPhase3}/>
          </div>
          <div className="text-[18px] leading-[18px] mt-[30px] mb-[20px]">Coming Soon - Phase 3</div>
          <div className="text-[14px]  leading-[14px] text-[#6E6E72] ">Stay tuned for updates.</div>
        </div>
      </div>
    </div>
  )
}

export default phase3