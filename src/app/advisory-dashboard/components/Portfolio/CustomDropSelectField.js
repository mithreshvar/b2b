import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox, FormControlLabel, OutlinedInput } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function CustomDropSelectField(props) {
   // const array = props.columns[props.title].map((ele) => props.data[props.title].includes(ele))
    const columnData = props.columns[props.title] || [];
    const selectedData = props.data[props.title] || [];
    
    const array = columnData.map((ele) => selectedData.includes(ele));

    const [state, setState] = React.useState(array);

    const handleChanges = (event, index) => {


        if (event.target.name === "All") {
            const copyOfCurrState = props.columns
            props.columns[props.title]
            setState((prevState) => {
                const array1 = new Array(props.value.length);
                array1.fill(event.target.checked);
                return array1;
            })
            if (event.target.checked) {
                props.data[props.title] = copyOfCurrState[props.title]
            }
            else {
                props.data[props.title] = []
            }
        }
        else {
            const copyOfCurrState = props.data
            setState((prevState) => {
                const newState = [...prevState]; // Create a copy of the current state
                newState[index] = event.target.checked; // Update the specific element
                return newState; // Return the updated state
            })

            if (event.target.checked) {
                if (!copyOfCurrState[props.title].includes(event.target.name)) {
                    copyOfCurrState[props.title].push(event.target.name)
                }

            }
            else {
                if (copyOfCurrState[props.title].includes(event.target.name)) {
                    const index = copyOfCurrState[props.title].indexOf(event.target.name)
                    copyOfCurrState[props.title].splice(index, 1);
                }

            }

        }
        props.handleChange(props.data)
        console.log(props.data, "filterData")
        //  console.log(props.data, event.target.name == "All", props.title, event.target.checked)
    }


    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label" className=' text-center pt-[5px] text-[#707070] text-[14px]'>{props.title}</InputLabel>
            <Select
                variant={'outlined'}
                sx={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "10px"
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value=""
                label="Age"
                input={<OutlinedInput className='pl-[100px]' label={props.title} />}
                IconComponent={(props) => {
                    if (props.className.includes('MuiSelect-iconOpen'))
                        return <KeyboardArrowDownIcon sx={{ color: "#0171E7", marginRight: "15px" }} />
                    return <KeyboardArrowUpIcon sx={{ color: "#0171E7", marginRight: "15px" }} />
                }}
                MenuProps={{
                    sx: {},
                    PaperProps: {
                        sx: {
                            backgroundColor: '#F8F8F8',
                            borderRadius: '15px',
                            boxShadow: '0px 8px 15px #00000026',
                        }
                    }
                }}
            >
                <FormGroup className='pl-[10px] '>

                    {props.value.map((ele, index) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state[index]}
                                    onChange={(event) => handleChanges(event, index)}
                                    name={ele}
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                />
                            }
                            label={ele}
                        />
                    ))}
                </FormGroup>
            </Select>
        </FormControl>
    );
}
