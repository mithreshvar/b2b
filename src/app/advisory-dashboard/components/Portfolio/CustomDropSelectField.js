import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox, FormControlLabel } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function CustomDropSelectField(props) {
    const array = new Array(props.value.length);
    array.fill(true);
    const [state, setState] = React.useState(array);

    const handleChanges = (event, index) => {
        if (event.target.checked) {
            const updatedColumns = [...props.columns[event.target.name], props.value[index]];
            const data = state.slice();
            data[index] = true;
            setState(data);
            props.handleChange({ ...props.columns, [event.target.name]: updatedColumns });
        } else {
            const updatedColumns = props.columns[event.target.name].filter((ele) => ele !== props.value[index]);
            const data = state.slice();
            data[index] = false;
            setState(data);
            props.handleChange({ ...props.columns, [event.target.name]: updatedColumns });
        }
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">{props.title}</InputLabel>
            <Select
                sx={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "10px"
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value=""
                label="Age"
                IconComponent={(props) => {
                    if (props.className.includes('MuiSelect-iconOpen'))
                        return <KeyboardArrowDownIcon sx={{ color: "#0171E7", marginRight: "15px" }}/>
                    return <KeyboardArrowUpIcon sx={{ color: "#0171E7", marginRight: "15px" }}/>
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
                <FormGroup className='pl-[10px]'>
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
