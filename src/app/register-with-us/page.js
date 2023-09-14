"use client"

// import React, { useState } from "react";
// import NavBar from "@/app/components/register-with-us/NavBar";
// import { ThemeProvider } from '@mui/material/styles';
// import theme from "../theme";
// import { Box, FormControlLabel, MenuItem, Radio, TextField, Typography } from "@mui/material";
// import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// function RegisterWithUs() {
//     const [isLogin, setIsLogin] = useState('login');
//     const [isIndividual, setIsIndividual] = useState('individual');
//     const [name, setName] = useState('');
//     const [dob, setDob] = useState(null);
//     const [panNumber, setPanNumber] = useState('');
//     const [addressLine1, setAddressLine1] = useState('');
//     const [addressLine2, setAddressLine2] = useState('');
//     const [addressLine3, setAddressLine3] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [pincode, setPincode] = useState("");
//     const [email, setEmail] = useState("");
//     const [contactNoOffice, setContactNoOffice] = useState("");
//     const [residence, setResidence] = useState("");
//     const [mobileNumber, setMobileNumber] = useState("");

//     const [isCorrespondence, setIsCorrespondence] = useState(null);


//     // Event handlers
//     const handleIsLoginChange = (event) => {
//         setIsLogin(event.target.value);
//     }

//     const handleIsIndividualChange = (event) => {
//         setIsIndividual(event.target.value);
//     }

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     }

//     const handleDobChange = (dateTime) => {
//         setDob(dateTime);
//     }

//     const handlePanNumberChange = (event) => {
//         setPanNumber(event.target.value);
//     }

//     const handleAddressLine1Change = (event) => {
//         setAddressLine1(event.target.value);
//     }

//     const handleAddressLine2Change = (event) => {
//         setAddressLine2(event.target.value);
//     }

//     const handleAddressLine3Change = (event) => {
//         setAddressLine3(event.target.value);
//     }

//     const handleCityChange = (event) => {
//         setCity(event.target.value);
//     }

//     const handleStateChange = (event) => {
//         setState(event.target.value);
//     }

//     const handlePincodeChange = (event) => {
//         setPincode(event.target.value);
//       };
    
//       const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//       };
    
//       const handleContactNoOfficeChange = (event) => {
//         setContactNoOffice(event.target.value);
//       };
    
//       const handleResidenceChange = (event) => {
//         setResidence(event.target.value);
//       };
    
//       const handleMobileNumberChange = (event) => {
//         setMobileNumber(event.target.value);
//       };

//       const handleIsCorrespondenceChange = (event) => {
//         const newValue = event.target.value;
//         setIsCorrespondence(isCorrespondence ===  newValue ? null : newValue);
//       }

//     const cities = ['Chennai', 'Coimbatore'];
//     const states = ['Kerala', 'Tamil Nadu'];

//     return (
//         <ThemeProvider theme={theme}>
//             <NavBar />
//             <div className="pt-[30px] pl-[80px] font-poppins text-[14px]">

//                 {/* Login selector */}
//                 <div className="bg-[#F8F9FA] border-[#E4E5E5] border-[1px] rounded-[25px] w-[222px] h-[45px] p-[5px] flex">
//                     <button className={`w-[96px] h-[35px] ${isLogin === 'login' ? 'bg-primary text-white font-semibold' : 'font-medium'} rounded-[25px]  flex justify-center items-center`} value="login" onClick={handleIsLoginChange}>
//                         Login
//                     </button>
//                     <button className={`w-[116px] h-[35px] ${isLogin === 'register' ? 'bg-primary text-white font-semibold' : 'font-medium'} rounded-[25px]  flex justify-center items-center`} value="register" onClick={handleIsLoginChange}>
//                         Register
//                     </button>
//                 </div>

//                 {
//                     isLogin === 'login' ?
//                     <>
//                     </>
//                     :

//                     <>
//                         <div className="w-[859px]">
//                             {/* Individuality provider */}
//                             <div className="mt-[20px] text-textLight">Individuality</div>
//                             <div className="mt-[10px] flex justify-start items-center gap-[20px] p-[1px]">
//                                 <button className={`w-[141px] h-[40px] bg-[#F8F9FA] ${isIndividual === 'individual' ? 'border-primary text-primary font-semibold' : 'border-[#E4E5E5] font-medium'} border-[1px] flex justify-center items-center rounded-[25px]`} value={'individual'} onClick={handleIsIndividualChange}> Individuals </button>
//                                 <button className={`w-[178px] h-[40px] bg-[#F8F9FA] ${isIndividual === 'non-individuals' ? 'border-primary text-primary font-semibold' : 'border-[#E4E5E5] font-medium'} border-[1px] flex justify-center items-center rounded-[25px]`} value={'non-individuals'} onClick={handleIsIndividualChange}> Non-Individuals </button>
//                             </div>

//                             <Box
//                                 component="form"
//                                 sx={{
//                                     '& .MuiTextField-root': {
//                                         outline: 'none',
//                                         border: 'none',
//                                         '& .MuiInputBase-root': {
//                                             height: '40px',
//                                             borderRadius: '10px',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             padding: '0px'
//                                         },
//                                         '& .MuiInputLabel-root': {
//                                             color: '#6E6E72',
//                                             fontSize: '14px',
//                                             mt: '-5px',
//                                             mx: 'auto',
//                                             fontWeight: 500
//                                         },
//                                         '& .MuiInputLabel-root.Mui-focused': {
//                                             mt: '2px',
//                                             display: 'flex',
//                                             color: 'primary.main',
//                                         },
//                                         '& .MuiInputAdornment-root': {
//                                             mr: '15px', // Adjust the color of the InputAdornment
//                                         },
//                                     },
//                                     py: '20px',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     rowGap: '20px',
//                                 }}
//                             >
//                                 <div className="flex gap-[50px]">
//                                     <TextField
//                                         id="name-input"
//                                         label="Name"
//                                         value={name}
//                                         onChange={handleNameChange}
//                                         sx={{ width: '380px' }}
//                                     />
//                                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                     <DatePicker
//                                         id="dob-input"
//                                         label="Date Of Birth / incorporation"
//                                         format="DD MMM YYYY hh:mm A"
//                                         value={dob}
//                                         onChange={handleDobChange}
//                                         sx={{width: '380px'}}
//                                         slots={{
                                            
//                                             openPickerIcon: () => (< CalendarMonthIcon sx={{width: '20px', height: '20px', mr: '15px', color: 'primary.main'}}/>),
//                                         }}
//                                     />
//                                     </LocalizationProvider>
//                                 </div>
//                                 <div>
//                                     <TextField
//                                         id="pan-input"
//                                         label="PAN Number"
//                                         value={panNumber}
//                                         onChange={handlePanNumberChange}
//                                         sx={{ width: '380px' }}
//                                     />
//                                 </div>

//                                 {/* Registered Address */}
//                                 <div className="-ml-[1px] font-semibold text-[18px]">
//                                     Permanent / Registered Office Address
//                                 </div>
//                                 <div className="flex flex-wrap gap-x-[50px] gap-y-[20px]">
//                                     <TextField
//                                         id="address-1-input"
//                                         label="Address Line 1"
//                                         value={addressLine1}
//                                         onChange={handleAddressLine1Change}
//                                         sx={{ width: '810px' }}
//                                     />
//                                     <TextField
//                                         id="address-2-input"
//                                         label="Address Line 2"
//                                         value={addressLine2}
//                                         onChange={handleAddressLine2Change}
//                                         sx={{ width: '810px' }}
//                                     />
//                                     <TextField
//                                         id="address-3-input"
//                                         label="Address Line 3"
//                                         value={addressLine3}
//                                         onChange={handleAddressLine3Change}
//                                         sx={{ width: '810px' }}
//                                     />
//                                     <TextField
//                                         id="city-select"
//                                         select
//                                         label="City"
//                                         value={city}
//                                         onChange={handleCityChange}
//                                         SelectProps={{
//                                             IconComponent: () => (
//                                                 <ExpandMoreIcon sx={{ color: 'primary.main', mr: '15px' }} />
//                                             ),
//                                         }}
//                                         sx={{ width: '380px' }}
//                                     >
//                                         {cities.map((city) => (
//                                             <MenuItem key={city} value={city}>
//                                                 {city}
//                                             </MenuItem>
//                                         ))}
//                                     </TextField>
//                                     <TextField
//                                         id="state-select"
//                                         select
//                                         label="State"
//                                         value={state}
//                                         onChange={handleStateChange}
//                                         SelectProps={{
//                                             IconComponent: () => (
//                                                 <ExpandMoreIcon sx={{ color: 'primary.main', mr: '15px' }} />
//                                             ),  // Set the IconComponent to ExpandMoreIcon
//                                         }}
//                                         sx={{ width: '380px' }}
//                                     >
//                                         {states.map((state) => (
//                                             <MenuItem key={state} value={state}>
//                                                 {state}
//                                             </MenuItem>
//                                         ))}
//                                     </TextField>
//                                     <TextField
//                                         id="pincode-input"
//                                         label="Pincode"
//                                         value={pincode}
//                                         onChange={handlePincodeChange}
//                                         sx={{ width: '380px' }}
//                                     />

//                                     <TextField
//                                         id="email-input"
//                                         label="Email"
//                                         value={email}
//                                         onChange={handleEmailChange}
//                                         sx={{ width: '380px' }}
//                                     />

//                                     <TextField
//                                         id="contact-no-office-input"
//                                         label="Contact No. Office"
//                                         value={contactNoOffice}
//                                         onChange={handleContactNoOfficeChange}
//                                         sx={{ width: '380px' }}
//                                     />

//                                     <TextField
//                                         id="residence-input"
//                                         label="Residence"
//                                         value={residence}
//                                         onChange={handleResidenceChange}
//                                         sx={{ width: '380px' }}
//                                     />

//                                     <TextField
//                                         id="mobile-number-input"
//                                         label="Mobile Number"
//                                         value={mobileNumber}
//                                         onChange={handleMobileNumberChange}
//                                         sx={{ width: '380px' }}
//                                     />
//                                 </div>

//                                 {/* Corresponding Address */}
//                                 <div>
//                                     <FormControlLabel
//                                         value="end"
//                                         control={
//                                         <Radio
//                                             checked={isCorrespondence}
//                                             onClick={handleIsCorrespondenceChange}
//                                             value={true}
//                                         />
//                                         }
//                                         label={
//                                             <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 'medium' }}>
//                                               Correspondence Address (For all Communication) Same as Permanent/Registered Office Address
//                                             </Typography>
//                                         }
//                                     />
//                                 </div>
//                             </Box>
//                         </div>
//                     </>
//             }
//             </div>
//         </ThemeProvider>
//     );
// }

// export default RegisterWithUs;


import React, { useEffect, useState } from "react";
import NavBar from "@/app/components/register-with-us/NavBar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme";
import {
  Box,
  FormControlLabel,
  MenuItem,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon, RadioButtonUnchecked } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image'

// Create a reusable AddressFields component
function AddressFields({ cityOptions, stateOptions, setValueObject }) {
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

  useEffect(() => {
    setValueObject({
      addressLine1,
      addressLine2,
      addressLine3,
      city,
      state,
      pincode,
      email,
      contactNoOffice,
      residence,
      mobileNumber
    })
  }, [addressLine1,
    addressLine2,
    addressLine3,
    city,
    state,
    pincode,
    email,
    contactNoOffice,
    residence,
    mobileNumber]);


  return (
    <div className="flex flex-wrap gap-x-[50px] gap-y-[20px]">
      <TextField
        id="address-1-input"
        label="Address Line 1"
        value={addressLine1}
        onChange={(event) => setAddressLine1(event.target.value)}
        sx={{ width: '810px' }}
      />
      <TextField
        id="address-2-input"
        label="Address Line 2"
        value={addressLine2}
        onChange={(event) => setAddressLine2(event.target.value)}
        sx={{ width: '810px' }}
      />
      <TextField
        id="address-3-input"
        label="Address Line 3"
        value={addressLine3}
        onChange={(event) => setAddressLine3(event.target.value)}
        sx={{ width: '810px' }}
      />
      <TextField
        id="city-select"
        select
        label="City"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        SelectProps={{
          IconComponent: () => (
            <ExpandMoreIcon sx={{ color: 'primary.main', mr: '15px' }} />
          ),
        }}
        sx={{ width: '380px' }}
      >
        {cityOptions.map((city) => (
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
        onChange={(event) => {
          setState(event.target.value);
        }}
        SelectProps={{
          IconComponent: () => (
            <ExpandMoreIcon sx={{ color: 'primary.main', mr: '15px' }} />
          ), // Set the IconComponent to ExpandMoreIcon
        }}
        sx={{ width: '380px' }}
      >
        {stateOptions.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="pincode-input"
        label="Pincode"
        value={pincode}
        onChange={(event) => setPincode(event.target.value)}
        sx={{ width: '380px' }}
      />
      <TextField
        id="email-input"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        sx={{ width: '380px' }}
      />
      <TextField
        id="contact-no-office-input"
        label="Contact No. Office"
        value={contactNoOffice}
        onChange={(event) => setContactNoOffice(event.target.value)}
        sx={{ width: '380px' }}
      />
      <TextField
        id="residence-input"
        label="Residence"
        value={residence}
        onChange={(event) => setResidence(event.target.value)}
        sx={{ width: '380px' }}
      />
      <TextField
        id="mobile-number-input"
        label="Mobile Number"
        value={mobileNumber}
        onChange={(event) => setMobileNumber(event.target.value)}
        sx={{ width: '380px' }}
      />
    </div>
  );
}

function RegisterWithUs() {
  const [isLogin, setIsLogin] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isIndividual, setIsIndividual] = useState('individual');
  const [name, setName] = useState('');
  const [dob, setDob] = useState(null);
  const [panNumber, setPanNumber] = useState('');

  const [isCorrespondence, setIsCorrespondence] = useState(false);
  const [permanentAddressObject, setPermanentAddressObject] = useState({});
  const [correspondenceAddressObject, setCorrespondenceAddressObject] = useState({});

  const [arnNumber, setArnNumber] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [status, setStatus] = useState('');

  

  // Event handlers
  const handleIsLoginChange = (event) => {
    setIsLogin(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleIsIndividualChange = (event) => {
    setIsIndividual(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDobChange = (dateTime) => {
    setDob(dateTime);
  };

  const handlePanNumberChange = (event) => {
    setPanNumber(event.target.value);
  };

  const handleIsCorrespondenceChange = () => {
    setIsCorrespondence(!isCorrespondence);
  };

  // Handle state change for permanent address
  // const handlePermanentAddressStateChange = (newState) => {
  //   setPermanentAddressState(newState);
  // };

  // // Handle state change for correspondence address
  // const handleCorrespondenceAddressStateChange = (newState) => {
  //   setCorrespondenceAddressState(newState);
  // };

  const handleSubmit = () => {
    console.log('Submit clicked');
  
    if (isLogin === 'login') {
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      console.log('Is Individual:', isIndividual);
      console.log('Name:', name);
      console.log('Date of Birth:', dob);
      console.log('PAN Number:', panNumber);
      console.log('Is Correspondence Same as Permanent:', isCorrespondence);
      console.log('Permanent Address State:', permanentAddressObject);
      console.log('Correspondence Address State:', correspondenceAddressObject);
      console.log('ARN Number:', arnNumber);
      console.log('Issue Date:', issueDate);
      console.log('Expiry Date:', expiryDate);
      console.log('Status:', status);
    }
  };
  

  const cities = ['Chennai', 'Coimbatore'];
  const states = ['Kerala', 'Tamil Nadu'];

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="pt-[30px] pl-[80px] font-poppins text-[14px]">
        {/* Login selector */}
        <div className="bg-[#F8F9FA] border-[#E4E5E5] border-[1px] rounded-[25px] w-[222px] h-[45px] p-[5px] flex">
          <button
            className={`w-[96px] h-[35px] ${isLogin === 'login' ? 'bg-primary text-white font-semibold' : 'font-medium'
              } rounded-[25px]  flex justify-center items-center`}
            value="login"
            onClick={handleIsLoginChange}
          >
            Login
          </button>
          <button
            className={`w-[116px] h-[35px] ${isLogin === 'register' ? 'bg-primary text-white font-semibold' : 'font-medium'
              } rounded-[25px]  flex justify-center items-center`}
            value="register"
            onClick={handleIsLoginChange}
          >
            Register
          </button>
        </div>

        {isLogin === 'login' ?
        
        (
          <div className="w-[481px] font-medium text-[14px] mt-[82px]">
            <div>
            This login is restricted to <span className="font-bold">Partners</span> only
            If you are an investor and wish to access your account, please <span>click here</span>
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
              <div className="flex gap-[30px] flex-col">
                <TextField
                  id="email-input"
                  label="Email"
                  value={email}
                  onChange={handleEmailChange}
                  sx={{ width: '380px' }}
                />
                <TextField
                  id="password-input"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  sx={{ width: '380px' }}
                />
              </div>
              <div className="-mt-[15px] font-medium text-right mr-[101px] text-primary">Forget password?</div>
            </Box>

          </div>
        ) :
        
        (
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
                    value={dob}
                    onChange={handleDobChange}
                    sx={{ width: '380px' }}
                    slots={{
                      openPickerIcon: () => (
                        <CalendarMonthIcon sx={{ width: '20px', height: '20px', mr: '15px', color: 'primary.main' }} />
                      ),
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

              {/* Registered Address */}
              <div className="-ml-[1px] font-semibold text-[18px]">
                Permanent / Registered Office Address
              </div>
              <AddressFields
                cityOptions={cities}
                stateOptions={states}
                setValueObject={setPermanentAddressObject}
              />

              {/* Corresponding Address */}
              <div>
                <FormControlLabel
                  sx={{height: '20px'}}
                  control={
                    <Radio
                      checked={isCorrespondence}
                      icon={<RadioButtonUnchecked sx={{ color: 'primary.main' }} />}
                      onClick={handleIsCorrespondenceChange}
                      value={true}
                    />
                  }
                  label={
                    <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 'medium' }}>
                      Correspondence Address (For all Communication) Same as Permanent/Registered Office Address
                    </Typography>
                  }
                />
              </div>
              { !isCorrespondence && (
                <>
                    <div className="-ml-[1px] font-semibold text-[18px]">
                    Correspondence Address (For all Communication)
                    </div>
                    <AddressFields
                      cityOptions={cities}
                      stateOptions={states}
                      setValueObject={setCorrespondenceAddressObject}
                    />
                </>
              )}

              {/* Registration Details */}

                <div className="-ml-[1px] font-semibold text-[18px]">
                    Registration Details
                </div>
                <div className="flex flex-wrap gap-x-[50px] gap-y-[20px]">
                    <TextField
                        id="arn-input"
                        label="ARN Number"
                        value={arnNumber}
                        onChange={(event) => setArnNumber(event.target.value)}
                        sx={{ width: '380px' }}
                    />
                    <TextField
                        id="issue-input"
                        label="Issue Date"
                        value={issueDate}
                        onChange={(event) => setIssueDate(event.target.value)}
                        sx={{ width: '380px' }}
                    />
                    <TextField
                        id="expiry-input"
                        label="Expiry Date"
                        value={expiryDate}
                        onChange={(event) => setExpiryDate(event.target.value)}
                        sx={{ width: '380px' }}
                    />
                    <TextField
                        id="status-input"
                        label="Status Date"
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                        sx={{ width: '380px' }}
                    />
                </div>

                {/* Products and Services */}
                <div className="-ml-[1px] font-semibold text-[18px]">
                    Products and Services
                </div>

                <div className="-mt-[7px] flex">

                    <div>
                        <a href="#" className="flex gap-[15px]">
                            <Image
                                src='/mutualFunds.png'
                                width={23}
                                height={23}
                                alt="mutual-funds"
                            />
                            <span className="font-medium">Mutual Funds</span>
                        </a>
                    </div>
                    <div className="mx-[30px] px-[30px] border-x-[1px] border-x-[#E4E5E5] ">
                        <a href="#" className="flex gap-[15px]">
                            <Image
                                src='/fixedDeposit@2x.png'
                                width={23}
                                height={23}
                                alt="fd-deposits"
                            />
                            <span className="font-medium">Fixed Deposits & Bonds</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" className="flex gap-[15px]">
                            <Image
                                src='/NPS@2x.png'
                                width={23}
                                height={23}
                                alt="NPS-funds"
                            />
                            <span className="font-medium">NPS</span>
                        </a>
                    </div>

                </div>
            </Box>
          </div>
        )}


        {/* Submit */}
        <button className= {`bg-primary w-[230px] h-[50px] ${isLogin === "login" ? "mt-[190px]" : "mt-[27px]"} text-white font-semibold flex justify-center items-center rounded-[25px] text-[18px] mb-[15px]`} onClick={handleSubmit} >
          {isLogin === "login" ? "Login" : "Submit"}
        </button>

        <div className="border-t-[1px] border-t-[#E4E5E5] py-[10px] w-[827px] text-[#777777] text-[12px]">
            <div> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</div>
            <div>© Wealth India Financial Services Pvt. Ltd. 2023</div>
            { isLogin === "login" && (
              <>
                <div className="font-bold">Wealth India Financial Services Pvt. Ltd.,</div>
                <div>No. 38 and 39, 3rd Floor, Uttam Building, Whites Road, Royapettah, Chennai, Tamil Nadu 600014</div>
              </>
            ) }
        </div>
      </div>
    </ThemeProvider>
  );
}

export default RegisterWithUs;
