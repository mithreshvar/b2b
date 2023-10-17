import { useState } from "react";
import CustomSelectField, { CustomTextField } from "./InputFields";
import { InputAdornment } from "@mui/material";

export default function ClientRequirement() {

    const [name, setName] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        
        if (value === "") {
            setNameErrorMessage("Name cannot be empty");
        } else {
            setNameErrorMessage("");
        }
    };

    const [age, setAge] = useState('');
    const [ageErrorMessage, setAgeErrorMessage] = useState('');
    
    const handleAgeChange = (event) => {
        const value = event.target.value;
        setAge(value);
        
        if (value === "") {
            setAgeErrorMessage("Age cannot be empty");
        } else {
            setAgeErrorMessage("");
        }
    };

    const [location, setLocation] = useState('');
    const [locationErrorMessage, setLocationErrorMessage] = useState('');

    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value);
        
        if (value === "") {
            setLocationErrorMessage("Location cannot be empty");
        } else {
            setLocationErrorMessage("");
        }
    };

    const [family, setFamily] = useState('');
    const [familyErrorMessage, setFamilyErrorMessage] = useState('');
    const familyOptions = ['Father', 'Mother', 'Sister', 'Brother'];
    
    const handleFamilyChange = (event) => {
        const value = event.target.value;
        setFamily(value);
        
        if (value === "") {
            setFamilyErrorMessage("Family cannot be empty");
        } else {
            setFamilyErrorMessage("");
        }
    };

    const [occupation, setOccupation] = useState('');
    const [occupationErrorMessage, setOccupationErrorMessage] = useState('');

    const handleOccupationChange = (event) => {
        const value = event.target.value;
        setOccupation(value);
        
        if (value === "") {
            setOccupationErrorMessage("Occupation cannot be empty");
        } else {
            setOccupationErrorMessage("");
        }
      };

    const [requirement, setRequirement] = useState('');
    const [requirementErrorMessage, setRequirementErrorMessage] = useState('');

    const handleRequirementChange = (event) => {
        const value = event.target.value;
        setRequirement(value);
    
        if (value === "") {
          setRequirementErrorMessage("Requirement cannot be empty");
        } else {
          setRequirementErrorMessage("");
        }
      };

    const [lumpsum, setLumpsum] = useState('0');
    const [lumpsumErrorMessage, setLumpsumErrorMessage] = useState('');

    const handleLumpsumChange = (event) => {
        const value = event.target.value.replace(/^0+/, ''); // Remove leading zeros
        const formattedValue = Number(value.replace(/\D/g,'')).toLocaleString("en-In")
        setLumpsum(formattedValue);

        const max = 1500000;

        if (value === ''){
            setLumpsum('0');
        }
        else if (Number(value.replace(/\D/g,'')) > max){
            setLumpsumErrorMessage(`The max amount is ₹ ${max.toLocaleString("en-IN")}`)
        }
        else{
            setLumpsumErrorMessage('');
        }
    };

    const [sip, setSip] = useState('0');
    const [sipErrorMessage, setSipErrorMessage] = useState('');

    const handleSipChange = (event) => {
        const value = event.target.value.replace(/^0+/, ''); // Remove leading zeros
        const formattedValue = Number(value.replace(/\D/g,'')).toLocaleString("en-In")
        setSip(formattedValue);

        const max = 200000;

        if (value === ''){
            setSip('0');
        }
        else if (Number(value.replace(/\D/g,'')) > max){
            setSipErrorMessage(`The max amount is ₹ ${max.toLocaleString("en-IN")}`)
        }
        else{
            setSipErrorMessage('');
        } 
    };

    const [timeFrame, setTimeFrame] = useState('');
    const [timeFrameErrorMessage, setTimeFrameErrorMessage] = useState('');
    const timeFrameOptions = ['Short Term', 'Mid Term', 'Long Term'];

    const handleTimeFrameChange = (event) => {
        const value = event.target.value;
        setTimeFrame(value);
        
        if (value === "") {
        setTimeFrameErrorMessage("Time Frame cannot be empty");
        } else {
        setTimeFrameErrorMessage("");
        }
    };

    const [investmentHistory, setInvestmentHistory] = useState([]);
    const [investmentErrorMessage, setInvestmentErrorMessage] = useState('');
    const investmentHistoryOptions = ['< 1 Year', '2 - 5 Years', '> 5 Years'];

    const handleInvestmentHistoryChange = (event) => {
        const value = event.target.value;
        setInvestmentHistory(value);

        if (value === "") {
        setInvestmentErrorMessage("Investment history cannot be empty");
        } else {
        setInvestmentErrorMessage("");
        }
    };

    const [assetClasses, setAssetClasses] = useState('');
    const [assetClassesErrorMessage, setAssetClassesErrorMessage] = useState('');
    const assetClassesOptions = ['Gold', 'Liquid', 'Stocks', 'Mutual Funds'];

    const handleAssetClassesChange = (event) => {
        const value = event.target.value;
        setAssetClasses(value);

        if (value === "") {
        setAssetClassesErrorMessage("Asset classes cannot be empty");
        } else {
        setAssetClassesErrorMessage("");
        }
    };
    
    return(
        <div className="flex flex-col gap-[20px] text-[14px]">
            <h3 className="text-[20px] font-semibold leading-[38px]">Understand Client Requirement (B.R.O.T.H.E.R Framework)</h3>

            {/* Backdrop */}
            <div className="h-[248px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Backdrop</h3>
                <div className="flex flex-wrap gap-x-[50px] gap-y-[25px] pr-[200px]">
                    <CustomTextField label="Name" value={name} errorMessage={nameErrorMessage} handleChange={handleNameChange} />
                    <CustomTextField label="Age" value={age} type="number" errorMessage={ageErrorMessage} handleChange={handleAgeChange} />
                    <CustomTextField label="Location" value={location} errorMessage={locationErrorMessage} handleChange={handleLocationChange} />
                    <CustomSelectField label="Family" value={family} valueOptions={familyOptions} handleChange={handleFamilyChange} errorMessage={familyErrorMessage} />
                    <CustomTextField label="Occupation (Role/Company)" value={occupation} errorMessage={occupationErrorMessage} handleChange={handleOccupationChange} />
                </div>
            </div>

            {/* Requirement */}
            <div className="h-[128px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Requirement</h3>
                <CustomTextField label="Type Requirement" width="810px" value={requirement} errorMessage={requirementErrorMessage} handleChange={handleRequirementChange} />
            </div>

            {/* One time & SIP Amount */}
            <div className="h-[147px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[15px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">One time & SIP Amount</h3>
                <div className="flex gap-[50px]">
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[#6E6E72] font-medium">LumpSum</p>
                        <CustomTextField value={lumpsum} errorMessage={lumpsumErrorMessage} handleChange={handleLumpsumChange}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    ₹
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[#6E6E72] font-medium">SIP</p>
                        <CustomTextField type="number" value={sip} errorMessage={sipErrorMessage} handleChange={handleSipChange}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    ₹
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </div>
                </div>
            </div>

            {/* Time Frame (Investment) */}
            <div className="h-[128px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Time Frame (Investment)</h3>
                <CustomSelectField label="Time Frame" value={timeFrame} valueOptions={timeFrameOptions} handleChange={handleTimeFrameChange} errorMessage={timeFrameErrorMessage} />
            </div>

            {/* History */}
            <div className="h-[128px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">History</h3>
                <div className="flex flex-wrap gap-x-[50px] gap-y-[25px] pr-[200px]">
                    <CustomSelectField label="How long have you been investing ?" value={investmentHistory} valueOptions={investmentHistoryOptions} handleChange={handleInvestmentHistoryChange} errorMessage={investmentErrorMessage} />
                    <CustomSelectField label="What type of asset classes do you invest?" value={assetClasses} valueOptions={assetClassesOptions} handleChange={handleAssetClassesChange} errorMessage={assetClassesErrorMessage} />
                </div>
            </div>
        </div>
    );
}