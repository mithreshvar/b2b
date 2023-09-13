"use client"

import React, { useState } from "react";
import NavBar from "@/app/components/register-with-us/NavBar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme";
import customCalendarIcon from '@/app/assets/images/calendar-alt.svg';
import { Box, InputAdornment, MenuItem, TextField } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function RegisterWithUs() {
    const [isLogin, setIsLogin] = useState('login');
    const [isIndividual, setIsIndividual] = useState('individual');
    const [name, setName] = useState('');
    const [dob, setDob] = useState(null);
    const [panNumber, setPanNumber] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [addressLine3, setAddressLine3] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState("");
    const [email, setEmail] = useState("");
    const [contactNoOffice, setContactNoOffice] = useState("");
    const [residence, setResidence] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");


    // Event handlers
    const handleIsLoginChange = (event) => {
        setIsLogin(event.target.value);
    }

    const handleIsIndividualChange = (event) => {
        setIsIndividual(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDobChange = (dateTime) => {
        setDob(dateTime);
    }

    const handlePanNumberChange = (event) => {
        setPanNumber(event.target.value);
    }

    const handleAddressLine1Change = (event) => {
        setAddressLine1(event.target.value);
    }

    const handleAddressLine2Change = (event) => {
        setAddressLine2(event.target.value);
    }

    const handleAddressLine3Change = (event) => {
        setAddressLine3(event.target.value);
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleStateChange = (event) => {
        setState(event.target.value);
    }

    const handlePincodeChange = (event) => {
        setPincode(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handleContactNoOfficeChange = (event) => {
        setContactNoOffice(event.target.value);
      };
    
      const handleResidenceChange = (event) => {
        setResidence(event.target.value);
      };
    
      const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
      };

    const cities = ['Chennai', 'Coimbatore'];
    const states = ['Kerala', 'Tamil Nadu'];

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <div className="pt-[30px] pl-[80px] font-poppins text-[14px]">

                {/* Login selector */}
                <div className="bg-[#F8F9FA] border-[#E4E5E5] border-[1px] rounded-[25px] w-[222px] h-[45px] p-[5px] flex">
                    <button className={`w-[96px] h-[35px] ${isLogin === 'login' ? 'bg-primary text-white font-semibold' : 'font-medium'} rounded-[25px]  flex justify-center items-center`} value="login" onClick={handleIsLoginChange}>
                        Login
                    </button>
                    <button className={`w-[116px] h-[35px] ${isLogin === 'register' ? 'bg-primary text-white font-semibold' : 'font-medium'} rounded-[25px]  flex justify-center items-center`} value="register" onClick={handleIsLoginChange}>
                        Register
                    </button>
                </div>

                {
                    isLogin === 'login' ?
                    <>
                    </>
                    :

                    <>
                        <div className="w-[859px]">
                            {/* Individuality provider */}
                            <div className="mt-[20px] text-textLight">Individuality</div>
                            <div className="mt-[10px] flex justify-start items-center gap-[20px] p-[1px]">
                                <button className={`w-[141px] h-[40px] bg-[#F8F9FA] ${isIndividual === 'individual' ? 'border-primary text-primary font-semibold' : 'border-[#E4E5E5] font-medium'} border-[1px] flex justify-center items-center rounded-[25px]`} value={'individual'} onClick={handleIsIndividualChange}> Individuals </button>
                                <button className={`w-[178px] h-[40px] bg-[#F8F9FA] ${isIndividual === 'non-individuals' ? 'border-primary text-primary font-semibold' : 'border-[#E4E5E5] font-medium'} border-[1px] flex justify-center items-center rounded-[25px]`} value={'non-individuals'} onClick={handleIsIndividualChange}> Non-Individuals </button>
                            </div>

                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': {
                                        outline: 'none',
                                        border: 'none',
                                        '& .MuiInputBase-root': {
                                            height: '40px',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0px'
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#6E6E72',
                                            fontSize: '14px',
                                            mt: '-5px',
                                            mx: 'auto',
                                            fontWeight: 500
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            mt: '2px',
                                            display: 'flex',
                                            color: 'primary.main',
                                        },
                                        '& .MuiInputAdornment-root': {
                                            mr: '15px', // Adjust the color of the InputAdornment
                                        },
                                    },
                                    py: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: '20px',
                                }}
                            >
                                <div className="flex gap-[50px]">
                                    <TextField
                                        id="name-input"
                                        label="Name"
                                        value={name}
                                        onChange={handleNameChange}
                                        sx={{ width: '380px' }}
                                    />
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        id="dob-input"
                                        label="Date Of Birth / incorporation"
                                        format="DD MMM YYYY hh:mm A"
                                        onChange={handleDobChange}
                                        sx={{width: '380px'}}
                                        slots={{
                                            
                                            openPickerIcon: () => (< CalendarMonthIcon sx={{width: '20px', height: '20px', mr: '15px', color: 'primary.main'}}/>),
                                        }}
                                    />
                                    </LocalizationProvider>
                                </div>
                                <div>
                                    <TextField
                                        id="pan-input"
                                        label="PAN Number"
                                        value={panNumber}
                                        onChange={handlePanNumberChange}
                                        sx={{ width: '380px' }}
                                    />
                                </div>
                                <div className="-ml-[1px] font-semibold text-[18px]">
                                    Permanent / Registered Office Address
                                </div>
                                <div className="flex flex-wrap gap-x-[50px] gap-y-[20px]">
                                    <TextField
                                        id="address-1-input"
                                        label="Address Line 1"
                                        value={addressLine1}
                                        onChange={handleAddressLine1Change}
                                        sx={{ width: '810px' }}
                                    />
                                    <TextField
                                        id="address-2-input"
                                        label="Address Line 2"
                                        value={addressLine2}
                                        onChange={handleAddressLine2Change}
                                        sx={{ width: '810px' }}
                                    />
                                    <TextField
                                        id="address-3-input"
                                        label="Address Line 3"
                                        value={addressLine3}
                                        onChange={handleAddressLine3Change}
                                        sx={{ width: '810px' }}
                                    />
                                    <TextField
                                        id="city-select"
                                        select
                                        label="City"
                                        value={city}
                                        onChange={handleCityChange}
                                        SelectProps={{
                                            IconComponent: () => (
                                                <ExpandMoreIcon sx={{ color: 'primary.main', mr: '15px' }} />
                                            ),  // Set the IconComponent to ExpandMoreIcon
                                        }}
                                        sx={{ width: '380px' }}
                                    >
                                        {cities.map((city) => (
                                            <MenuItem key={city} value={city}>
                                                {city}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="state-select"
                                        select
                                        label="State"
                                        value={state}
                                        onChange={handleStateChange}
                                        SelectProps={{
                                            IconComponent: () => (
                                                <ExpandMoreIcon sx={{ color: 'primary.main', mr: '15px' }} />
                                            ),  // Set the IconComponent to ExpandMoreIcon
                                        }}
                                        sx={{ width: '380px' }}
                                    >
                                        {states.map((state) => (
                                            <MenuItem key={state} value={state}>
                                                {state}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="pincode-input"
                                        label="Pincode"
                                        value={pincode}
                                        onChange={handlePincodeChange}
                                        sx={{ width: '380px' }}
                                    />

                                    <TextField
                                        id="email-input"
                                        label="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        sx={{ width: '380px' }}
                                    />

                                    <TextField
                                        id="contact-no-office-input"
                                        label="Contact No. Office"
                                        value={contactNoOffice}
                                        onChange={handleContactNoOfficeChange}
                                        sx={{ width: '380px' }}
                                    />

                                    <TextField
                                        id="residence-input"
                                        label="Residence"
                                        value={residence}
                                        onChange={handleResidenceChange}
                                        sx={{ width: '380px' }}
                                    />

                                    <TextField
                                        id="mobile-number-input"
                                        label="Mobile Number"
                                        value={mobileNumber}
                                        onChange={handleMobileNumberChange}
                                        sx={{ width: '380px' }}
                                    />
                                </div>
                            </Box>
                        </div>
                    </>
            }
            </div>
        </ThemeProvider>
    );
}

export default RegisterWithUs;
