function UserManagementReports() {
  return (
    <div className="p-[20px]">
      <div className="rounded-[20px] w-full bg-[#ffffff]">
        <div className="font-semibold p-[20px] leading-[20px]">User management reports</div>
          <div className="p-[20px]">
            <div className="grid grid-cols-3 gap-8 font-semibold mb-[30px]">
              <button className="bg-[#F5F7FE] p-[30px] mr-[86px] rounded-[20px]">Investor Details</button>
              <button className="bg-[#F5F7FE] p-[30px] mr-[86px] rounded-[20px]">Valuation Report</button>
              <button className="bg-[#F5F7FE] p-[30px] rounded-[20px]">Client RTA Email and Mobile</button>
            </div>
            <div className="grid grid-cols-3 gap-8 font-semibold mb-[30px]">
              <div className="bg-[#F5F7FE] p-[30px] mr-[86px] rounded-[20px]">Mandates Report</div>
              <div className="bg-[#F5F7FE] p-[30px] mr-[86px] rounded-[20px]">Last Login Report</div>
              <div className="bg-[#F5F7FE] p-[30px] rounded-[20px]">Birthday details</div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default UserManagementReports;