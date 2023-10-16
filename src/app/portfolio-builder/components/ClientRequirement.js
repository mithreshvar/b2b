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
        setLumpsum(value);

        if (value === ''){
            setLumpsum('0');
        } 
    };

    const [sip, setSip] = useState('0');
    const [sipErrorMessage, setSipErrorMessage] = useState('');

    const handleSipChange = (event) => {
        const value = event.target.value.replace(/^0+/, ''); // Remove leading zeros
        setSip(value);

        if (value === ''){
            setSip('0');
        } 
    };
    
    return(
        <div className="flex flex-col gap-[20px] text-[14px]">
            <h3 className="text-[20px] font-semibold leading-[38px]">Understand Client Requirement (B.R.O.T.H.E.R Framework)</h3>

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

            <div className="h-[128px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[20px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">Requirement</h3>
                <CustomTextField label="Type Requirement" width="810px" value={requirement} errorMessage={requirementErrorMessage} handleChange={handleRequirementChange} />
            </div>

            <div className="h-[142px] w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[15px]">
                <h3 className="text-[18px] font-semibold leading-[10px]">One time & SIP Amount</h3>
                <div className="flex gap-[50px]">
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[#6E6E72] font-medium">LumpSum</p>
                        <CustomTextField type="number" value={lumpsum} errorMessage={lumpsumErrorMessage} handleChange={handleLumpsumChange}
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
        </div>
    );
}