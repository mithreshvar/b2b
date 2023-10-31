import { useState } from "react";
import { CustomTextField } from "./InputFields";

export default function WealthEquation() {

    const [inputData, setInputData] = useState({
        "Current Investment (Rs.)": {
            value: '',
            error: ''
        },
        "Monthly SIP (Rs.)": {
            value: '',
            error: '',
            check: false,
            "Increase Every Year by (%)": {
                value: '',
                error: ''
            }
        },
        "Yearly One Time Investment (Rs.)": {
            value: '',
            error: '',
            check: false,
            "Increase Every Year by (%)": {
                value: '',
                error: ''
            }
        }
    })

    const handleInputDataChange = event => {
        const {id, value, checked} = event.target;
        const newState = {...inputData};

        const contents = id.split('_');
        const label = contents[0];
        const type = contents.at(-1);

        if (type == 'check') {
            newState[label].check = checked;
        }
        else if (type == 'input') {

            if (contents.length == 2) {
                newState[label].value = value;
                newState[label].error = ( value.trim() == '') ? `${label} can not be empty` : '';
            }
            else if (contents.length == 3) {
                newState[label][contents[1]].value = value;
                newState[label][contents[1]].error = ( value.trim() == '') ? `${[contents[1]]} can not be empty` : '';
            }
        }

        // console.log(newState)
        setInputData( newState );
    }

    const noOfYears = [2,5,7,10,12,15,20,25,30];
    const [totalAggregateInvestment, setTotalAggregateInvestment] = useState([])

    function calTotalAggregateInvestment() {
        let arr = []
        let currentAmount = Number(inputData["Current Investment (Rs.)"].value)
        let currentMonthlySIP = Number(inputData["Monthly SIP (Rs.)"].value)
        let monthlySIPIncreaseEveryYear = Number(inputData["Monthly SIP (Rs.)"]["Increase Every Year by (%)"].value)
        for (let i=1; i<=30; i++) {
            currentAmount += currentMonthlySIP*12;
            currentMonthlySIP += currentMonthlySIP*monthlySIPIncreaseEveryYear/100;
            if (noOfYears.includes(i)) arr.push( '₹ ' + Math.round(currentAmount).toLocaleString() )
        }
        setTotalAggregateInvestment(arr)
    }

    const [selected, setSelected] = useState('Total Investment');

    return(
        <div className="px-[60px] flex flex-col gap-y-[20px] ">
            <div className="flex justify-between">
                <h1 className="text-[20px] font-bold">Wealth equation</h1>
                <button className="h-[34px] border-[1px] border-[#0071E7] text-[#0071E7] text-[14px] font-semibold bg-white rounded-[25px] px-[20px] ">Goal Planner</button>
            </div>

            <div className="bg-white p-[30px] rounded-[15px] flex flex-col gap-y-[30px]">

                <CustomTextField label="Current Investment (Rs.)" type='number' value={inputData["Current Investment (Rs.)"]["value"]} handleChange={handleInputDataChange} errorMessage={inputData["Current Investment (Rs.)"]["error"]}  />

                <div className="flex gap-x-[15px] items-center ">
                    <CustomTextField label="Monthly SIP (Rs.)" type='number' value={inputData["Monthly SIP (Rs.)"]["value"]} handleChange={handleInputDataChange} errorMessage={inputData["Monthly SIP (Rs.)"]["error"]}  />
                    <div className="flex gap-x-[10px]">
                        <input type="checkbox" id={"Monthly SIP (Rs.)_check"} onChange={handleInputDataChange} />
                        <label className="font-medium text-[14px]">Increase Every Year by (%)</label>
                    </div>
                    { inputData["Monthly SIP (Rs.)"].check && <CustomTextField id={"Monthly SIP (Rs.)_Increase Every Year by (%)_input"} label="Increase Every Year by (%)" type='number' value={inputData["Monthly SIP (Rs.)"]["Increase Every Year by (%)"].value} handleChange={handleInputDataChange} errorMessage={inputData["Monthly SIP (Rs.)"]["Increase Every Year by (%)"].error}  /> }
                </div>

                <div className="flex gap-x-[15px] items-center ">
                    <CustomTextField label="Yearly One Time Investment (Rs.)" type='number' value={inputData["Yearly One Time Investment (Rs.)"].value} handleChange={handleInputDataChange} errorMessage={inputData["Yearly One Time Investment (Rs.)"].error}  />
                    <div className="flex gap-x-[10px]">
                        <input type="checkbox" id={"Yearly One Time Investment (Rs.)_check"} onChange={handleInputDataChange} />
                        <label className="font-medium text-[14px]">Increase Every Year by (%)</label>
                    </div>
                    { inputData["Yearly One Time Investment (Rs.)"].check && <CustomTextField id={"Yearly One Time Investment (Rs.)_Increase Every Year by (%)_input"} label="Increase Every Year by (%)" type='number' value={inputData["Yearly One Time Investment (Rs.)"]["Increase Every Year by (%)"].value} handleChange={handleInputDataChange} errorMessage={inputData["Yearly One Time Investment (Rs.)"]["Increase Every Year by (%)"].error}  /> }
                </div>

            </div>

            <div className="bg-white p-[30px] py-[20px] rounded-[15px] flex flex-col gap-y-[30px]">
                <div className="flex justify-between">
                    <div className="flex gap-x-[20px] ">
                        <button className={`relative h-[34px] rounded-t-[10px] p-[10px] px-[30px] font-semibold shrink-0  ${(selected == 'Total Investment') ? 'bg-[#DCEBFE] text-[#0071E7] ' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => {setSelected('Total Investment'); calTotalAggregateInvestment()}} >
                            <p>Total Investment</p>
                        </button>
                        <button className={`relative h-[34px] rounded-t-[10px] p-[10px] px-[30px] font-semibold shrink-0  ${(selected == 'One Time Investment') ? 'bg-[#DCEBFE] text-[#0071E7] ' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => setSelected('One Time Investment')} >
                            <p>One Time Investment</p>
                        </button>
                        <button className={`relative h-[34px] rounded-t-[10px] p-[10px] px-[30px] font-semibold shrink-0  ${(selected == 'Monthly Savings') ? 'bg-[#DCEBFE] text-[#0071E7] ' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => setSelected('Monthly Savings')} >
                            <p>Monthly Savings</p>
                        </button>
                        <button className={`relative h-[34px] rounded-t-[10px] p-[10px] px-[30px] font-semibold shrink-0  ${(selected == 'Yearly One Time Saving') ? 'bg-[#DCEBFE] text-[#0071E7] ' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => setSelected('Yearly One Time Saving')} >
                            <p>Yearly One Time Saving</p>
                        </button>
                    </div>

                    <div className="flex gap-x-[5px] items-center">

                        <h6 className="text-[#6E6E72] text-[12px]">Graph</h6>
                    </div>
                </div>

                <div className="flex flex-col ">
                    {
                        (
                            selected == 'Total Investment' &&
                            <>
                                <div className="flex gap-x-[10px]">
                                    <div className="rounded-[10px] border-[#F2F2F2] border-[1px]">
                                        <table cellPadding={10} >
                                            <thead>
                                                <th className="text-[#6E6E72] w-[190px] h-[55px] font-semibold">Total Aggregate Investment (in Lakhs)</th>
                                            </thead>
                                            <tbody>
                                                {
                                                    totalAggregateInvestment.map( item => 
                                                        <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                            <td className="h-[44px] text-center">{item}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="rounded-[10px] border-[#F2F2F2] border-[1px]">
                                        <table >
                                            <thead>
                                                <tr>
                                                    <th rowSpan={2} className="text-[#6E6E72] flex w-[60px] h-[62px] font-semibold">No of Years</th>
                                                    <th colSpan={7} className="text-[#6E6E72] w-full font-semibold">Assumed Annual Returns</th>
                                                </tr>
                                                <tr>
                                                    <th className="text-[#6E6E72] w-[120px] font-semibold ">6 %</th>
                                                    <th className="text-[#6E6E72] w-[120px] font-semibold ">8 %</th>
                                                    <th className="text-[#6E6E72] w-[120px] font-semibold ">10 %</th>
                                                    <th className="text-[#6E6E72] w-[120px] font-semibold ">12 %</th>
                                                    <th className="text-[#6E6E72] w-[120px] font-semibold ">15 %</th>
                                                    <th className="text-[#6E6E72] w-[120px] font-semibold ">18 %</th>
                                                    <th className="text-[#6E6E72] w-[120px] font-semibold ">20 %</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    noOfYears.map( item => 
                                                        <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                            <td className="h-[44px] text-center">{item}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )||
                        (
                            selected == 'One Time Investment' &&
                            <></>
                        )||
                        (
                            selected == 'Monthly Savings' &&
                            <></>
                        )||
                        (
                            selected == 'Yearly One Time Saving' &&
                            <></>
                        )
                    }
                </div>
            </div>
        </div>
    );
}