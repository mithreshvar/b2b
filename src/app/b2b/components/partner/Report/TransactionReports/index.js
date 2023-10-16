import Image from "next/image";
function TransactioReports() {
  return (
    <div className="p-[20px]" >
      <div className="w-full bg-white p-[20px] rounded-[20px]">
        <h1 className="text-[20px] font-semibold leading-[20px] mb-[30px]">Transaction reports</h1>
        <div className="grid grid-cols-3 justify-between gap-[20px]">
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]">
            <Image height={50} width={52} alt="icon" />
            <h2 className="text-[14px] font-semibold">Transaction Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]">
            <Image height={50} width={52} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Investor Scheme Details</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]">
            <Image height={50} width={52} alt="icon"/>
            <h2 className="text-[14px] font-semibold">SIP Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]">
            <Image height={50} width={52} alt="icon" />
            <h2 className="text-[14px] font-semibold">STP Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]">
            <Image height={50} width={52} alt="icon"/>
            <h2 className="text-[14px] font-semibold">SWP Report</h2>
          </button>
          <button className="flex items-center justify-start gap-x-[15px] p-[20px] bg-[#F5F7FE] rounded-[25px]">
            <Image height={50} width={52} alt="icon"/>
            <h2 className="text-[14px] font-semibold">Authorization Pending Report</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactioReports;
