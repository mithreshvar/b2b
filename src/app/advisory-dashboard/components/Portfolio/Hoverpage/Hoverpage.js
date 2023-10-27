import React from 'react'
import data from './drillDownData.json'
import { Star } from '@mui/icons-material';

export default function DefaultHoverPage() {
  return (
    
    <div className='flex flex-col gap-y-[10px] p-[20px]'>
        <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
            <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
            <p className='w-[19%] text-right'>Amount</p>
            <p className='w-[16%] text-right'>% Exposure</p>
            <p className='w-[15%] text-right'>No of funds</p>
        </div>

        {/* Darkest */}
        <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex'> 
            <p className='w-[50%]'>Total AUM</p>
            <p className='w-[19.5%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
            <p className='w-[16%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
            <p className='w-[14%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).length }</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
            {
                Object.keys(data.AUM).map((split) => {
                    return (
                        <div className='flex flex-col gap-[10px]'>
                            <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                <p className='w-[50%]'>{split}</p>
                                <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().length }</p>
                            </div>
                            {
                                Object.keys(data.AUM[split]).map((category) => {
                                    return (
                                        <div>
                                            <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                <p className='w-[50%]'>{category}</p>
                                                <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                            </div>
                                            <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                {
                                                    data.AUM[split][category].map(row => 
                                                        <div className='flex'> 
                                                            <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : "text-[#F56902]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                            <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                            <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                            <p className='w-[15%] text-right'></p>
                                                        </div>    
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}

export function EquityExposureHoverPage() {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
        <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
            <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
            <p className='w-[19%] text-right'>Amount</p>
            <p className='w-[16%] text-right'>% Exposure</p>
            <p className='w-[15%] text-right'>No of funds</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
            {
                Object.keys(data.AUM).filter(option => option === "Equity").map((split) => {
                    return (
                        <div className='flex flex-col gap-[10px]'>
                            <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                <p className='w-[50%]'>{split}</p>
                                <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().length }</p>
                            </div>
                            {
                                Object.keys(data.AUM[split]).map((category) => {
                                    return (
                                        <div>
                                            <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                <p className='w-[50%]'>{category}</p>
                                                <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                            </div>
                                            <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                {
                                                    data.AUM[split][category].map(row => 
                                                        <div className='flex'> 
                                                            <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : "text-[#F56902]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                            <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                            <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                            <p className='w-[15%] text-right'></p>
                                                        </div>    
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
    )
};

export function DebtExposureHoverPage() {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
        <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
            <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
            <p className='w-[19%] text-right'>Amount</p>
            <p className='w-[16%] text-right'>% Exposure</p>
            <p className='w-[15%] text-right'>No of funds</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
            {
                Object.keys(data.AUM).filter(option => option === "Debt").map((split) => {
                    return (
                        <div className='flex flex-col gap-[10px]'>
                            <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                <p className='w-[50%]'>{split}</p>
                                <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().length }</p>
                            </div>
                            {
                                Object.keys(data.AUM[split]).map((category) => {
                                    return (
                                        <div>
                                            <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                <p className='w-[50%]'>{category}</p>
                                                <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                            </div>
                                            <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                {
                                                    data.AUM[split][category].map(row => 
                                                        <div className='flex'> 
                                                            <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : "text-[#F56902]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                            <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                            <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                            <p className='w-[15%] text-right'></p>
                                                        </div>    
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
    )
};

export function GoldOthersExposureHoverPage() {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
        <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
            <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
            <p className='w-[19%] text-right'>Amount</p>
            <p className='w-[16%] text-right'>% Exposure</p>
            <p className='w-[15%] text-right'>No of funds</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
            {
                Object.keys(data.AUM).filter(option => option === "Gold").map((split) => {
                    return (
                        <div className='flex flex-col gap-[10px]'>
                            <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                <p className='w-[50%]'>Total Gold & Others</p>
                                <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().length }</p>
                            </div>
                            {
                                Object.keys(data.AUM[split]).map((category) => {
                                    return (
                                        <div>
                                            <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                <p className='w-[50%]'>{category}</p>
                                                <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                            </div>
                                            <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                {
                                                    data.AUM[split][category].map(row => 
                                                        <div className='flex'> 
                                                            <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : "text-[#F56902]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                            <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                            <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                            <p className='w-[15%] text-right'></p>
                                                        </div>    
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
    )
};

export function OvernightLiquidExposureHoverPage() {
    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
        <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
            <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
            <p className='w-[19%] text-right'>Amount</p>
            <p className='w-[16%] text-right'>% Exposure</p>
            <p className='w-[15%] text-right'>No of funds</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
            {
                Object.keys(data.AUM.Debt).filter(option => option === "Debt - Liquid & Overnight Funds").map((category) => {
                    return (
                        <div>
                            <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                <p className='w-[50%]'>{category}</p>
                                <p className='w-[20%] text-right'>{data.AUM.Debt[category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                <p className='w-[16%] text-right'>{data.AUM.Debt[category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                <p className='w-[14%] text-right'>{data.AUM.Debt[category].length}</p>
                            </div>
                            <div className='flex flex-col gap-[15px] pl-[10px]'>
                                {
                                    data.AUM.Debt[category].map(row => 
                                        <div className='flex'> 
                                            <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : "text-[#F56902]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                            <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                            <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                            <p className='w-[15%] text-right'></p>
                                        </div>    
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
};

export function FiveStarRatedHoverPage() {
    return (
      
      <div className='flex flex-col gap-y-[10px] p-[20px]'>
          <div className='text-[#6E6E72] font-medium text-[12px] flex px-[10px]'>
              <p className='w-[50%]'>Asset Class/Category/Scheme Name</p>
              <p className='w-[19%] text-right'>Amount</p>
              <p className='w-[16%] text-right'>% Exposure</p>
              <p className='w-[15%] text-right'>No of funds</p>
          </div>
  
          {/* Darkest */}
          <div className='bg-[#CFE5F8] p-[10px] font-extrabold rounded-[10px] flex'> 
              <p className='w-[50%]'>Total - 5 Star Funds</p>
              <p className='w-[19.5%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).filter(fund => fund.rating === 5).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
              <p className='w-[16%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).filter(fund => fund.rating === 5).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
              <p className='w-[14%] text-right'>{ Object.values(data.AUM).flatMap((category) => Object.values(category).flat()).filter(fund => fund.rating === 5).length }</p>
          </div>
          <div className='flex flex-col gap-[20px]'>
              {
                  Object.keys(data.AUM).map((split) => {
                      return (
                          <div className='flex flex-col gap-[10px]'>
                              <div className='bg-[#E2F0FD] p-[10px] font-bold rounded-[10px] flex'> 
                                  <p className='w-[50%]'>{split}</p>
                                  <p className='w-[19.5%] text-right'>{ Object.values(data.AUM[split]).flat().filter(fund => fund.rating === 5).reduce((sum, fund) => sum + fund.amount, 0).toLocaleString("en-IN") }</p>
                                  <p className='w-[16%] text-right'>{ Object.values(data.AUM[split]).flat().filter(fund => fund.rating === 5).reduce((sum, fund) => sum + fund.exp, 0.0).toFixed(1) + "%" }</p>
                                  <p className='w-[14%] text-right'>{ Object.values(data.AUM[split]).flat().filter(fund => fund.rating === 5).length }</p>
                              </div>
                              {
                                  Object.keys(data.AUM[split]).map((category) => {
                                      return (
                                        data.AUM[split][category].filter(fund => fund.rating === 5).length > 0 ?

                                          <div>
                                              <div className='bg-[#F1F7FD] p-[10px] font-semibold rounded-[10px] mb-[10px] flex pr-[20px]'> 
                                                  <p className='w-[50%]'>{category}</p>
                                                  <p className='w-[20%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.amount, 0).toLocaleString("en-IN")}</p>
                                                  <p className='w-[16%] text-right'>{data.AUM[split][category].reduce((accum, curr) => accum + curr.exp, 0.0).toFixed(1) + "%" }</p>
                                                  <p className='w-[14%] text-right'>{data.AUM[split][category].length}</p>
                                              </div>
                                              <div className='flex flex-col gap-[15px] pl-[10px]'>
                                                  {
                                                      data.AUM[split][category].filter(fund => fund.rating === 5).map(row => 
                                                          <div className='flex'> 
                                                              <p className='w-[50%] flex items-center'>{row.name} <span className={`ml-[5px] whitespace-nowrap flex items-center ${row.rating === 0 ? "hidden" : [4,5].includes(row.rating) ? "text-[#00A345]" : "text-[#F56902]"}`}><Star className='text-[15px] mr-[3px]' />{row.rating}</span></p>
                                                              <p className='w-[19%] text-right'>{row.amount.toLocaleString("en-IN")}</p>
                                                              <p className='w-[16%] text-right'>{row.exp.toFixed(1) + "%"}</p>
                                                              <p className='w-[15%] text-right'></p>
                                                          </div>    
                                                      )
                                                  }
                                              </div>
                                          </div>
                                          :
                                          <></>
                                      )
                                  })
                              }
                          </div>
                          
                      )
                  })
              }
          </div>
      </div>
    )
  }