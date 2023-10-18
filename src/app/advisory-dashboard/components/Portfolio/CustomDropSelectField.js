import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, ListItemText, Menu, MenuItem, Select } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



function CustomDropSelectField() {
const title = "Basic Details"
const handleCheck = (event)=>{
    const res = Data;

    res[index].checked = event.target.checked
    setData(res)
    console.log(Data,index)
}
const [index,setindex] = useState()
    const [Data, setData] = useState([

        {
            "name": "net Inflow YTD",
            "value": "net Inflow YTD",
            "checked": true

        } ,   {
            "name": "net Inflow YTD",
            "value": "net Inflow YTD",
            "checked": true

        }
    ])
    useEffect(()=>{},[Data])
    return (
        <div>
            <FormControl sx={{ width: "100px" }}>


                <InputLabel id="demo-simple-select-label" >{title}</InputLabel>
                <Select labelId="demo-simple-select-label" label={title} sx={{ width: "350px", borderRadius: "12px", height: "40px", borderWidth: "1px", borderColor: "#E7E7E9" }} IconComponent={(props) => {

                    if (props.className.includes('MuiSelect-iconOpen'))
                        return <KeyboardArrowDownIcon sx={{ color: "blue", marginRight: "15px" }} />

                    return <KeyboardArrowUpIcon sx={{ color: "blue", marginRight: "15px" }} />
                }} multiple value={[]} >

                    <FormGroup>
                    <FormControlLabel className='pl-[10px]' control={<Checkbox size='small' icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} value={"hello"} />} label="All" />
                        {
                            Data.map((ele,i) => {

                               return  (<FormControlLabel className='pl-[10px]' control={<Checkbox size='small' icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} value={ele.value}  checked={ele.checked} onChange={(event)=>{setindex(i);handleCheck(event)}}/>} label={ele.name} />)


                            })
                        }
                        
                
                    </FormGroup>

                </Select>




            </FormControl>
        </div>
    )
}

export default CustomDropSelectField    