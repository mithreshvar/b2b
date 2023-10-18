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
    const array = new Array(props.value.length);
    array.fill(true);
    const [state, setState] = React.useState(array);
    const [AllSet, setAllSet] = React.useState(true);

    const handleAllSet = (event) => {
        setAllSet(event.target.checked);
        // Update the state of all checkboxes based on the "All" checkbox
        const updatedState = state.map((ele) => event.target.checked);
        setState(updatedState);
        const updatedColumns = AllSet ? props.value : [];
        props.handleChange({ ...props.columns, [props.title]: updatedColumns });
    };

    const handleChanges = (event, index) => {
        const updatedState = state.slice();
        updatedState[index] = event.target.checked;
        setState(updatedState);

        const updatedColumns = updatedState.reduce((acc, isChecked, idx) => {
            if (isChecked) {
                acc.push(props.value[idx]);
            }
            return acc;
        }, []);

        props.handleChange({ ...props.columns, [event.target.name]: updatedColumns });
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">{props.title}</InputLabel>
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={AllSet}
                                onChange={handleAllSet}
                                name="All"
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                            />
                        }
                        label="All"
                    />
                    {props.value.map((ele, index) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state[index]}
                                    onChange={(event) => handleChanges(event, index)}
                                    name={props.title}
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
