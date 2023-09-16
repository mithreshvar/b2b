import { CalendarMonth, ExpandMore, Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const CustomSelectField = ({ width = "380px", height = "40px", ...props}) => {
    return (
        <>
            <TextField
                id={`${props.label}-select`}
                select
                {...props}
                label={props.label}
                value={props.value}
                onChange={(event) => props.setValue(event.target.value)}
                InputProps={{sx: {fontSize: '14px', fontWeight: 'medium'}}}
                SelectProps={{
                IconComponent: () => (
                    <ExpandMore sx={{ color: 'primary.main', mr: '15px' }} />
                ),
                MenuProps: {
                    sx: {
                        // Add your custom styles for the menu here
                    },
                    PaperProps: {
                        sx: {
                            // Set the background color of the menu
                            backgroundColor: '#F8F8F8', // Change this to your desired background color
                            borderRadius: '15px',
                            boxShadow: '0px 8px 15px #00000026',
                        },
                    },
                    },
                }}
                sx={
                    {
                        width: width,
                        '& .MuiInputBase-root': {
                            height: height,
                        }
                    }
                }
            >
                {props.valueOptions.map((investor) => (
                <MenuItem key={investor} value={investor}>
                    {investor}
                </MenuItem>
                ))}
            </TextField>
            {
                props.isError ? 
                <div className="mt-[5px] ml-[5px]">{props.errorMessage}</div> 
                : 
                <></>
            }
        </>
    );
}

const CustomTextField = ({ width = "380px", height = "40px",...props }) => {
    return (
        <div>
            <TextField
                id={`${props.label}-input`}
                label={props.label}
                value={props.value}
                {...props}
                onChange={props.handleChange}
                onBlur={props.handleChange}
                sx={
                    {
                        width: width,
                        '& .MuiInputBase-root': {
                            height: height,
                        }
                    }
                }
            />
            {
                props.errorMessage  !== "" ? 
                <div className="mt-[5px] ml-[20px] text-[#FF7922] font-medium text-[12px]">{props.errorMessage}</div> 
                : 
                <></>
            }
        </div>
    );
}

const CustomPasswordField = ({ width = "380px", height="40px", ...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div>
      <TextField
            id={`${props.label}-input`}
            InputProps={{
                endAdornment: (<InputAdornment position="end">
                <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                >
                    {showPassword ? <VisibilityOff sx={{fontSize: '18px'}} /> : <Visibility sx={{fontSize: '18px'}} />}
                </IconButton>
            </InputAdornment>)
              }}
            label={props.label}
            value={props.value}
            {...props}
            type={!showPassword ? 'text' : 'password'}
            onChange={props.handleChange}
            onBlur={props.handleChange}
            sx={
                {
                    width: width,
                    '& .MuiInputBase-root': {
                        height: height,
                    }
                }
            }
        />
        {
            props.errorMessage  !== "" ? 
            <div className="mt-[5px] ml-[20px] text-[#FF7922] font-medium text-[12px]">{props.errorMessage}</div> 
            : 
            <></>
        }
    </div>
        )
}

const CustomDatePicker = ({ width = "380px", height = "40px", ...props}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                id={`${props.label}-input`}
                label={props.label}
                format="DD MMM YYYY"
                value={props.value}
                {...props}
                onChange={(newDate) => props.setValue(newDate)}
                showDaysOutsideCurrentMonth={true}
                dayOfWeekFormatter={(day) => {
                    switch(day){
                    case "Su":
                        return "Sun";
                    case "Mo":
                        return "Mon";
                    case "Tu":
                        return "Tue";
                    case "We":
                        return "Wed";
                    case "Th":
                        return "Thu";
                    case "Fr":
                        return "Fri";
                    case "Sa":
                        return "Sat";
                    }
                }}
                sx={
                    {
                        width: width,
                        '& .MuiInputBase-root': {
                            height: height,
                        }
                    }
                }
                slots={{
                    openPickerIcon: () => (
                    <CalendarMonth sx={{ width: '20px', height: '20px', color: 'primary.main' }} />
                    ),
                }}
                PopperProps={{
                    sx: {'&.MuiPickersPopper-root': {border: '4px solid red'},},
                }}
            />
        </LocalizationProvider>
    )
}

export {CustomSelectField, CustomTextField, CustomDatePicker, CustomPasswordField};