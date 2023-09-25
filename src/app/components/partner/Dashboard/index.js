import { useState } from "react";
import DoughnutChart from "./DoughnutChart";

function Dashboard() {

    const [isOverall, setIsOverall] = useState(true);

    return (
        <div className="p-[20px] text-[14px]">
            <div className="bg-white w-full h-[57px] rounded-[15px] p-[5px] flex">
                <p className={` ${isOverall? "bg-[#e5f1fd] font-bold text-primary" : "font-medium text-textLight"} cursor-pointer w-[127px] h-[47px] flex justify-center items-center rounded-[15px] font-[16px]`} onClick={() => setIsOverall(true)}>Overall</p>
                <p className={` ${!isOverall? "bg-[#e5f1fd] font-bold text-primary" : "font-medium text-textLight"} cursor-pointer w-[127px] h-[47px] flex justify-center items-center rounded-[15px] font-[16px]`} onClick={() => setIsOverall(false)}>Monthly</p>
            </div>
            {isOverall ? 
                <>
                    <div className="flex gap-[20px] my-[20px] text-[16px]">
                        <div className="bg-white w-[calc((100%-20px)/2)] h-[300px] rounded-[15px] p-[20px] flex flex-col gap-[10px] items-center font-bold">
                            <p>AUM Inflow</p>
                            <DoughnutChart 
                                totalName="Total AUM"
                                data = {
                                    [
                                        { name: "name1", value: 20000 },
                                        { name: "name2", value: 80000 },
                                        { name: "name3", value: 30000 },
                                    ]
                                }
                            />
                        </div>
                        <div className="bg-white w-[calc((100%-20px)/2)] h-[300px] rounded-[15px] p-[20px] flex flex-col gap-[10px] items-center font-bold">
                            <p>SIP Inflow</p>
                            <DoughnutChart 
                                totalName="Total SIP"
                                data = {
                                    [
                                        { name: "name1", value: 20000 },
                                        { name: "name3", value: 30000 },
                                      ]
                                }
                            />
                        </div>
                    </div>
                    <div className="bg-white w-[calc(50%-10px)] h-[101px] leading-none rounded-[15px] p-[25px] flex flex-col gap-[10px] items-start font-medium">
                        <p>Total Number of Active Investors</p>
                        <p className="text-[26px] font-bold">70</p>
                    </div>
                </>
                :
                <>
                    <div className="flex gap-[20px] my-[20px] text-[16px]">
                        <div className="bg-white w-[calc((100%-40px)/3)] h-[300px] rounded-[15px] p-[20px] flex flex-col gap-[10px] items-center font-bold">
                            <p>AUM Inflow</p>
                            <DoughnutChart 
                                totalName="Total Asset Inflow"
                                data = {
                                    [
                                        { name: "name1", value: 20000 },
                                        { name: "name2", value: 40000 },
                                        { name: "name3", value: 30000 },
                                    ]
                                }
                            />
                        </div>
                        <div className="bg-white w-[calc((100%-40px)/3)] h-[300px] rounded-[15px] p-[20px] flex flex-col gap-[10px] items-center font-bold">
                            <p>Redemption</p>
                            <DoughnutChart 
                                data = {[]}
                            />
                        </div>
                        <div className="bg-white w-[calc((100%-40px)/3)] h-[300px] rounded-[15px] p-[20px] flex flex-col gap-[10px] items-center font-bold">
                            <p>SIP Inflow</p>
                            <DoughnutChart 
                                totalName="Total SIP Inflow"
                                data = {
                                    [
                                        { name: "name1", value: 80000 },
                                        { name: "name2", value: 60000 },
                                        { name: "name3", value: 30000 },
                                    ]
                                }
                            />
                        </div>
                    </div>
                    <div className="flex gap-[20px]">
                        <div className="bg-white w-[calc((100%-10px)*2/3)] h-[101px] leading-none rounded-[15px] p-[25px] flex items-start font-medium">
                            <div className="flex flex-col w-[calc((100%-10px)/3)] gap-[10px] border-r-[1px] border-gray-200">
                                <p>Registered Users</p>
                                <p className="text-[26px] font-bold">8</p>
                            </div>
                            <div className="flex flex-col w-[calc((100%-10px)/3)] gap-[10px] pl-[30px] border-r-[1px] border-gray-200">
                                <p>Activated Users</p>
                                <p className="text-[26px] font-bold">4</p>
                            </div>
                            <div className="flex flex-col w-[calc((100%-10px)/3)] gap-[10px] pl-[30px] ">
                                <p>Non-Activated Users</p>
                                <p className="text-[26px] font-bold">4</p>
                            </div>
                        </div>
                        <div className="bg-white w-[calc((100%-10px)*1/3)] h-[101px] leading-none rounded-[15px] p-[25px] flex items-start font-medium">
                            <div className="flex flex-col w-[calc((100%-10px)/2)] gap-[10px] border-r-[1px] border-gray-200">
                                <p className="w-[150px]">SIP's setup this month</p>
                                <p className="text-[26px] font-bold">0</p>
                            </div>
                            <div className="flex flex-col w-[calc((100%-10px)/2)] gap-[10px] pl-[30px] ">
                                <p>SIP expiring in Next 30 days</p>
                                <p className="text-[26px] font-bold">0</p>
                            </div>
                        </div>
                    </div>
                </>
            }
            <p className="mt-[120px] font-medium"><strong>Disclaimer:</strong> The AUM inflow data is as of the previous day. The redemption data does not account for STP or Switch transaction. <br/> Transfer-in Partner's data may vary.</p>
        </div>
    );
}

export default Dashboard;