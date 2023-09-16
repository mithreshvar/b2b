"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/app/components/register-with-us/NavBar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme";
import {
  Box,
  FormControlLabel,
  MenuItem,
  Popover,
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
import { useSearchParams } from 'next/navigation'
import CustomSelectField from "../components/InputFields";
import Link from "next/link";

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
      <CustomSelectField label="City" value={city} setValue={setCity} valueOptions={cityOptions} />
      <CustomSelectField label="State" value={state} setValue={setState} valueOptions={stateOptions} />
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

function Login() {
  const searchParams = useSearchParams()
  const register = searchParams.get('register')
  
  const [isLogin, setIsLogin] = useState((register)?'register':'login');

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

  const [isSubmitted, setIsSubmitted] = useState(false);  
  const [isError, setIsError] = useState(false);

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
    setIsSubmitted( isLogin==='register'? true : null);
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
      <div className="pt-[30px] px-[80px] font-poppins text-[14px]">

        {
          !isSubmitted?
        <>
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
            If you are an investor and wish to access your account, please <a href="#" className="text-primary">click here</a>
            </div>

            <div className="py-[20px] flex flex-col gap-x-[20px]">
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
              <a href="#" className="font-medium text-right mr-[101px] text-primary mt-[5px]">Forget password?</a>
            </div>

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

            <div className="py-[20px] flex flex-wrap gap-y-[20px] gap-x-[50px]">
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
                    sx={{ width: '380px' }}
                    slots={{
                      openPickerIcon: () => (
                        <CalendarMonthIcon sx={{ width: '20px', height: '20px', color: 'primary.main' }} />
                      ),
                    }}
                    PopperProps={{
                      sx: {'&.MuiPickersPopper-root': {border: '4px solid red'},},
                    }}
                  />
                </LocalizationProvider>
              <div>
                <TextField
                  id="pan-input"
                  label="PAN Number"
                  value={panNumber}
                  onChange={handlePanNumberChange}
                  sx={{ width: '380px' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-[20px] gap-x-[50px]">
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
                        label="Status"
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
                                src='/login/mutualFunds.png'
                                width={23}
                                height={23}
                                alt="mutual-funds"
                            />
                            <span className="font-medium">Mutual Funds</span>
                        </a>
                    </div>
                    <div className="mx-[30px] px-[30px] border-x-[1px] border-x-[#E4E5E5]">
                        <a href="#" className="flex gap-[15px]">
                            <Image
                                src='/login/fixedDeposit@2x.png'
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
                                src='/login/NPS@2x.png'
                                width={23}
                                height={23}
                                alt="NPS-funds"
                            />
                            <span className="font-medium">NPS</span>
                        </a>
                    </div>
                </div>
              </div>
          </div>
        )}

        {/* Submit */}
        <Link href={isLogin === "login" ? "/partner" : "#"} >
          <button className= {`bg-primary w-[230px] h-[50px] ${isLogin === "login" ? "mt-[190px] mb-[15px]" : "my-[47px]"} text-white font-semibold flex justify-center items-center rounded-[25px] text-[18px] `} onClick={handleSubmit} >
            {isLogin === "login" ? "Login" : "Submit"}
          </button>
        </Link>

      </>
      
      : 

      // Success Component
      <>
        <div className="w-[1120px] h-[189px] flex flex-col py-[68px] px-[46px] gap-y-[15px] rounded-[15px] shadow-lg items-center mt-[275px] mx-auto">
          <Image src="/home/Group 405761/Group 405761@2x.png" width={113} height={133} className='w-[113px] h-[132px] absolute -mt-[150px]' />
          <h3 className='text-[24px] text-[#00A345] font-semibold leading-[30px]'>Success</h3>
          <p className='text-[16px] font-semibold text-center leading-[24px]'>Thanks for empanelling with us, we shall get in touch with you to complete the empanelment process.</p>
        </div>
      </>

      }

      <div className={`${isSubmitted ? "mt-[170px]" : "border-t-[1px] border-t-[#E4E5E5]"} py-[10px] w-[827px] text-[#777777] text-[12px]`}>
            <div> &#8505; Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</div>
            <div>© Wealth India Financial Services Pvt. Ltd. 2023</div>
            { isLogin === "login" && (
              <>
                <div className="font-bold">Wealth India Financial Services Pvt. Ltd.,</div>
                <div>No. 38 and 39, 3rd Floor, Uttam Building, Whites Road, Royapettah, Chennai, Tamil Nadu 600014</div>
                <div>Tel : 61104100 Email : contactpartner@fundsindia.com</div>
              </>
            ) }
        </div>
      </div>

      {
        isError && 
        <div className="w-[1320px] h-[93px] bg-[#FFF4ED] border-[1px] border-[#FF7922] rounded-t-[20px] mx-auto flex justify-center items-center">
          <Image 
            src="/login/error@2x.png"
            width={50}
            height={50}
            alt="Error"
            className="mr-[10px]"
          />
          <>Internal Server Error : Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</>
        </div>
      }
    </ThemeProvider>
  );
}

export default Login;
