import { useState } from "react";
import { CustomTextField } from "./InputFields";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export default function WealthEquation() {

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
            width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
            duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));

    const [showGraph, setShowGraph] = useState(false)

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
        calMonthlySavings ();calOneTimeInvestment();calYearlyOneTimeSaving();calTotalAggregateInvestment();
    }

    const noOfYears = [2,5,7,10,12,15,20,25,30];
    const percentage = [6,8,10,12,15,18,20];
    const [tableData, setTableData] = useState({})

    function calMonthlySavings (){
        let arr = []
        let monthlySIP = Number(inputData["Monthly SIP (Rs.)"].value)
        let currentAmount = 0
        let yearlyIncreaseEveryYear = Number(inputData["Monthly SIP (Rs.)"]["Increase Every Year by (%)"].value)
        for (let i=1; i<=30; i++){
            currentAmount += monthlySIP * 12;
            // if (noOfYears.includes(i)) arr.push( '₹ ' + Math.round(currentAmount).toLocaleString() );
            if (noOfYears.includes(i)) arr.push( Math.round(currentAmount) );
            monthlySIP += monthlySIP * yearlyIncreaseEveryYear/100;
        }
        const monthlySaving = {data: arr};
        
        percentage.forEach( percent => {
            let arr = []
            let monthlySIP = Number(inputData["Monthly SIP (Rs.)"].value);
            let currentAmount = Number(inputData["Monthly SIP (Rs.)"].value);
            let yearlyIncreaseEveryYear = Number(inputData["Monthly SIP (Rs.)"]["Increase Every Year by (%)"].value)
            currentAmount += currentAmount*percent/100/12;
            for (let i=2; i<=30*12; i++){
                currentAmount = (currentAmount+monthlySIP) * (1 + (percent/100/12));
                // if (noOfYears.includes(i/12)) arr.push( '₹ ' + Math.round(currentAmount).toLocaleString() );
                if (noOfYears.includes(i/12)) arr.push( Math.round(currentAmount) );
                if (i%12 == 0) monthlySIP += monthlySIP * yearlyIncreaseEveryYear/100;
            }
            monthlySaving[percent] = arr;
        })
        // console.log(monthlySaving)
        setTableData(prevState => ({
            ...prevState,
            monthlySaving
        }));
    }

    function calOneTimeInvestment(){
        // let arr = new Array(9).fill('₹ ' + Math.round(Number(inputData["Current Investment (Rs.)"].value)).toLocaleString())
        let arr = new Array(9).fill(Math.round(Number(inputData["Current Investment (Rs.)"].value)))
        const oneTimeInvestment = {data: arr};
        percentage.forEach( percent => {
            let arr = []
            let yearlyLumpsum = Number(inputData["Current Investment (Rs.)"].value);
            let currentAmount = Number(inputData["Current Investment (Rs.)"].value);
            for (let i=2; i<=30; i++){
                currentAmount = yearlyLumpsum*(1+(percent/100))**i;
                // if (noOfYears.includes(i)) arr.push( '₹ ' + Math.round(currentAmount).toLocaleString() )
                if (noOfYears.includes(i)) arr.push( Math.round(currentAmount) )
            }
            
            oneTimeInvestment[percent] = arr;
        })
        // console.log(oneTimeInvestment)
        setTableData(prevState => ({
            ...prevState,
            oneTimeInvestment
        }));
    }

    function calYearlyOneTimeSaving(){
        let arr = []
        let yearlyOneTimeInvestment = Number(inputData["Yearly One Time Investment (Rs.)"].value)
        let currentAmount = Number(inputData["Yearly One Time Investment (Rs.)"].value)
        let yearlyIncreaseEveryYear = Number(inputData["Yearly One Time Investment (Rs.)"]["Increase Every Year by (%)"].value)
        for (let i=1; i<=30; i++){
            // if (noOfYears.includes(i)) arr.push( '₹ ' + Math.round(currentAmount).toLocaleString() )
            if (noOfYears.includes(i)) arr.push( Math.round(currentAmount) )
            currentAmount += (currentAmount*yearlyIncreaseEveryYear/100) + yearlyOneTimeInvestment;
        }
        const yearlyOneTimeSaving = {data: arr};
        
        percentage.forEach( percent => {
            let arr = []
            let yearlyLumpsum = Number(inputData["Yearly One Time Investment (Rs.)"].value);
            let currentAmount = Number(inputData["Yearly One Time Investment (Rs.)"].value);
            let yearlyIncreaseEveryYear = Number(inputData["Yearly One Time Investment (Rs.)"]["Increase Every Year by (%)"].value)
            currentAmount += currentAmount*percent/100;
            for (let i=2; i<=30; i++){
                yearlyLumpsum += yearlyLumpsum*yearlyIncreaseEveryYear/100;
                currentAmount = (currentAmount + yearlyLumpsum)*(1+(percent/100))
                // if (noOfYears.includes(i)) arr.push( '₹ ' + Math.round(currentAmount).toLocaleString() )
                if (noOfYears.includes(i)) arr.push( Math.round(currentAmount) )
            }
            yearlyOneTimeSaving[percent] = arr;
        })
        // console.log(yearlyOneTimeSaving)
        setTableData(prevState => ({
            ...prevState,
            yearlyOneTimeSaving
        }));
    }

    function calTotalAggregateInvestment() {
        let arr = []
        for (let i=0; i<9; i++) {
            let yearlyOneTimeSaving = tableData.yearlyOneTimeSaving?.data[i] || 0;
            let monthlySaving = tableData.monthlySaving?.data[i] || 0;
            let oneTimeInvestment = tableData.oneTimeInvestment?.data[i] || 0;
            arr.push( yearlyOneTimeSaving + monthlySaving + oneTimeInvestment )
        }
        const totalAggregateInvestment = {data: arr}
        
        percentage.forEach( percent => {
            let arr = []
            for (let i=0; i<9; i++) {
                let yearlyOneTimeSaving = (tableData.yearlyOneTimeSaving) ? tableData.yearlyOneTimeSaving[percent][i] : 0;
                let monthlySaving = (tableData.yearlyOneTimeSaving) ? tableData.monthlySaving[percent][i] : 0;
                let oneTimeInvestment = (tableData.yearlyOneTimeSaving) ? tableData.oneTimeInvestment[percent][i] : 0;
                arr.push( yearlyOneTimeSaving + monthlySaving + oneTimeInvestment )
            }
            totalAggregateInvestment[percent] = arr;
        })
        setTableData(prevState => ({
            ...prevState,
            totalAggregateInvestment
        }));
    }

    const [selected, setSelected] = useState('Total Investment');

    const [units, setUnits] = useState('Default')

    const UnitConversion = (number) => {
        number = parseInt(number)
        if (units === 'units(k,l,cr)') {
            if (number >= 10000000) {
            return parseInt(number / 10000000) + ' Cr';
            } else if (number >= 100000) {
            return parseInt(number / 100000) + ' L';
            } else if (number >= 1000) {
            return parseInt(number / 1000) + ' K';
            } else {
            return number;
            }
        }
        return number;
    };
      
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

            {
                (tableData.totalAggregateInvestment) &&
                <div className="bg-white p-[30px] py-[20px] rounded-[15px] flex flex-col gap-y-[30px]">
                    <div className="flex justify-between">
                        <div className="flex gap-x-[20px] ">
                            <button className={`relative h-[34px] rounded-t-[10px] p-[10px] px-[30px] font-semibold shrink-0  ${(selected == 'Total Investment') ? 'bg-[#DCEBFE] text-[#0071E7] ' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => {setSelected('Total Investment')}} >
                                <p>Total Investment</p>
                            </button>
                            <button className={`relative h-[34px] rounded-t-[10px] p-[10px] px-[30px] font-semibold shrink-0  ${(selected == 'One Time Investment') ? 'bg-[#DCEBFE] text-[#0071E7] ' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => {setSelected('One Time Investment')}} >
                                <p>One Time Investment</p>
                            </button>
                            <button className={`relative h-[34px] rounded-t-[10px] p-[10px] px-[30px] font-semibold shrink-0  ${(selected == 'Monthly Savings') ? 'bg-[#DCEBFE] text-[#0071E7] ' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => {setSelected('Monthly Savings')}} >
                                <p>Monthly Savings</p>
                            </button>
                            <button className={`relative h-[34px] rounded-t-[10px] p-[10px] px-[30px] font-semibold shrink-0  ${(selected == 'Yearly One Time Saving') ? 'bg-[#DCEBFE] text-[#0071E7] ' : 'bg-[#F7F8FF] text-[#BEBEBE]'} `} onClick={() => {setSelected('Yearly One Time Saving')}} >
                                <p>Yearly One Time Saving</p>
                            </button>
                        </div>

                        <div className="flex gap-x-[5px] items-center">
                            <div className="flex h-[34px] w-[172px] bg-[#F5F7FE] rounded-[8px] ga- p-[5px]">
                                <button className={` h-full w-[80px] text-[12px] font-semibold ${ units == 'Default' && ' bg-white text-primary rounded-[8px] '}`} onClick={()=>setUnits('Default')}>Default</button>
                                <button className={` h-full w-[80px] text-[12px] font-semibold ${ units == 'units(k,l,cr)' && ' bg-white text-primary rounded-[8px] '}`} onClick={()=>setUnits('units(k,l,cr)')}>units(k,l,cr)</button>
                            </div>
                            <AntSwitch checked={showGraph} onClick={(event) => setShowGraph(event.target.checked)} inputProps={{ 'aria-label': 'ant design' }} />
                            <h6 className="text-[#6E6E72] text-[12px]">Graph</h6>
                        </div>
                    </div>

                    {
                        (showGraph) ?
                        <div className="flex">
                            
                        </div>
                        :
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
                                                            units == 'Default' &&
                                                            tableData.totalAggregateInvestment.data.map( item =>{
                                                                    return(
                                                                        <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                            <td className="h-[44px] text-center">{'₹ ' + item.toLocaleString()}</td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            )
                                                        }{
                                                            units == 'units(k,l,cr)' &&
                                                            tableData.totalAggregateInvestment.data.map( item =>{
                                                                    return(
                                                                        <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                            <td className="h-[44px] text-center">{'₹ ' + UnitConversion(item).toLocaleString()}</td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>

                                        <div className="rounded-[10px] border-[#F2F2F2] border-[1px]">
                                            <table >
                                                <thead>
                                                    <tr>
                                                        <th rowSpan={2} className="text-[#6E6E72] h-[62px] px-[20px] font-semibold">No of Years</th>
                                                        <th colSpan={7} className="text-[#6E6E72] w-full font-semibold">Assumed Annual Returns</th>
                                                    </tr>
                                                    <tr>
                                                        {
                                                            percentage.map( item =>
                                                                <th className="text-[#6E6E72] w-[120px] font-semibold ">{item} %</th>
                                                            )
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        units == 'Default' &&
                                                        noOfYears.map( (year, yearIndex) => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{year}</td>
                                                                {
                                                                    percentage.map( percent => 
                                                                        <td className="h-[44px] text-center">{'₹ ' + tableData.totalAggregateInvestment[percent][yearIndex].toLocaleString()}</td>
                                                                    )
                                                                }
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        units == 'units(k,l,cr)' &&
                                                        noOfYears.map( (year, yearIndex) => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{year}</td>
                                                                {
                                                                    percentage.map( percent => {
                                                                        return(
                                                                            <td className="h-[44px] text-center">{'₹ ' + UnitConversion(tableData.totalAggregateInvestment[percent][yearIndex]).toLocaleString()}</td> 
                                                                        )
                                                                    })
                                                                }
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
                                <>
                                    <div className="flex gap-x-[10px]">
                                        <div className="rounded-[10px] border-[#F2F2F2] border-[1px]">
                                            <table cellPadding={10} >
                                                <thead>
                                                    <th className="text-[#6E6E72] w-[190px] h-[55px] font-semibold">Total Aggregate Investment (in Lakhs)</th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        units == 'Default' &&
                                                        tableData.oneTimeInvestment.data.map( item => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{'₹ ' + item.toLocaleString()}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        units == 'units(k,l,cr)' &&
                                                        tableData.oneTimeInvestment.data.map( item => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{'₹ ' + UnitConversion(item).toLocaleString()}</td>
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
                                                        <th rowSpan={2} className="text-[#6E6E72] h-[62px] px-[20px] font-semibold">No of Years</th>
                                                        <th colSpan={7} className="text-[#6E6E72] w-full font-semibold">Assumed Annual Returns</th>
                                                    </tr>
                                                    <tr>
                                                        {
                                                            percentage.map( item =>
                                                                <th className="text-[#6E6E72] w-[120px] font-semibold ">{item} %</th>
                                                            )
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        units == 'Default' &&
                                                        noOfYears.map( (year, yearIndex) => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{year}</td>
                                                                {
                                                                    percentage.map( percent => 
                                                                        <td className="h-[44px] text-center">{'₹ ' + tableData.oneTimeInvestment[percent][yearIndex].toLocaleString()}</td>
                                                                    )
                                                                }
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        units == 'units(k,l,cr)' &&
                                                        noOfYears.map( (year, yearIndex) => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{year}</td>
                                                                {
                                                                    percentage.map( percent => 
                                                                        <td className="h-[44px] text-center">{'₹ ' + UnitConversion(tableData.oneTimeInvestment[percent][yearIndex]).toLocaleString()}</td>
                                                                    )
                                                                }
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
                                selected == 'Monthly Savings' &&
                                <>
                                    <div className="flex gap-x-[10px]">
                                        <div className="rounded-[10px] border-[#F2F2F2] border-[1px]">
                                            <table cellPadding={10} >
                                                <thead>
                                                    <th className="text-[#6E6E72] w-[190px] h-[55px] font-semibold">Total Aggregate Investment (in Lakhs)</th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        units == 'Default' &&
                                                        tableData.monthlySaving.data.map( item => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{'₹ ' + item.toLocaleString()}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        units == 'units(k,l,cr)' &&
                                                        tableData.monthlySaving.data.map( item => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{'₹ ' + UnitConversion(item).toLocaleString()}</td>
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
                                                        <th rowSpan={2} className="text-[#6E6E72] h-[62px] px-[20px] font-semibold">No of Years</th>
                                                        <th colSpan={7} className="text-[#6E6E72] w-full font-semibold">Assumed Annual Returns</th>
                                                    </tr>
                                                    <tr>
                                                        {
                                                            percentage.map( item =>
                                                                <th className="text-[#6E6E72] w-[120px] font-semibold ">{item} %</th>
                                                            )
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        units == 'Default' &&
                                                        noOfYears.map( (year, yearIndex) => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{year}</td>
                                                                {
                                                                    percentage.map( percent => 
                                                                        <td className="h-[44px] text-center">{'₹ ' + tableData.monthlySaving[percent][yearIndex].toLocaleString()}</td>
                                                                    )
                                                                }
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        units == 'units(k,l,cr)' &&
                                                        noOfYears.map( (year, yearIndex) => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{year}</td>
                                                                {
                                                                    percentage.map( percent => 
                                                                        <td className="h-[44px] text-center">{'₹ ' + UnitConversion(tableData.monthlySaving[percent][yearIndex]).toLocaleString()}</td>
                                                                    )
                                                                }
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
                                selected == 'Yearly One Time Saving' &&
                                <>
                                    <div className="flex gap-x-[10px]">
                                        <div className="rounded-[10px] border-[#F2F2F2] border-[1px]">
                                            <table cellPadding={10} >
                                                <thead>
                                                    <th className="text-[#6E6E72] w-[190px] h-[55px] font-semibold">Total Aggregate Investment (in Lakhs)</th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        units == 'Default' &&
                                                        tableData.yearlyOneTimeSaving.data.map( item => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{'₹ ' + item.toLocaleString()}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        units == 'units(k,l,cr)' &&
                                                        tableData.yearlyOneTimeSaving.data.map( item => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{'₹ ' + UnitConversion(item).toLocaleString()}</td>
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
                                                        <th rowSpan={2} className="text-[#6E6E72] h-[62px] px-[20px] font-semibold">No of Years</th>
                                                        <th colSpan={7} className="text-[#6E6E72] w-full font-semibold">Assumed Annual Returns</th>
                                                    </tr>
                                                    <tr>
                                                        {
                                                            percentage.map( item =>
                                                                <th className="text-[#6E6E72] w-[120px] font-semibold ">{item} %</th>
                                                            )
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        units == 'Default' &&
                                                        noOfYears.map( (year, yearIndex) => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{year}</td>
                                                                {
                                                                    percentage.map( percent => 
                                                                        <td className="h-[44px] text-center">{'₹ ' + tableData.yearlyOneTimeSaving[percent][yearIndex].toLocaleString()}</td>
                                                                    )
                                                                }
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        units == 'units(k,l,cr)' &&
                                                        noOfYears.map( (year, yearIndex) => 
                                                            <tr class="even:bg-white odd:bg-[#F9FBFF] text-[14px] font-medium">
                                                                <td className="h-[44px] text-center">{year}</td>
                                                                {
                                                                    percentage.map( percent => 
                                                                        <td className="h-[44px] text-center">{'₹ ' + UnitConversion(tableData.yearlyOneTimeSaving[percent][yearIndex]).toLocaleString()}</td>
                                                                    )
                                                                }
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>      
                    }
                </div>
            }
        </div>
    );
}