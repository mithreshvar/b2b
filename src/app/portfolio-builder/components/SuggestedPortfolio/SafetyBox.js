import React, { useState } from 'react'
import data from '../../data/suggestedPortfolio.json';
import { ClearRounded, Search } from "@mui/icons-material";
import { CustomTextField } from '../InputFields';
import { InputAdornment } from "@mui/material";
import addFilled from '/public/addFilled.svg';
import remove from '/public/removeOutlined.svg';
import Image from 'next/image';

export default function SafetyBox({ handleNotificationMessage }) {


    const [emergencyFunds, setEmergencyFunds] = useState(data["Safety Box"]["Emergency Fund"]);
    const [editedEmergencyFundsData, setEditedEmergencyFundsData] = useState(data["Safety Box"]["Emergency Fund"]);

    const [healthInsuranceFunds, setHealthInsuranceFunds] = useState(data["Safety Box"]["Health Insurance"]);
    const [editedHealthInsuranceFundsData, setEditedHealthInsuranceFundsData] = useState(data["Safety Box"]["Health Insurance"]);

    const convertToMoney = (value) => {
        value = value.replace(/^0+/, '');
        value = Number(value.replace(/\D/g,'')).toLocaleString("en-In");
        return value;
    }

    const handleInputChange = (event, index, target, field ) => {
        
        let value = event.target.value;

        if (target === 'emergency'){
            const newEditedData = [...editedEmergencyFundsData];
            if (field === 'sip' || field === 'lumpsum'){
                value = convertToMoney(value);
            }
            newEditedData[index][field] = value;
            setEditedEmergencyFundsData(newEditedData);
        }
        else {
            const newEditedData = [...editedHealthInsuranceFundsData];
            newEditedData[index][field] = value;
            setEditedHealthInsuranceFundsData(newEditedData);
        }
        
    };

    const addEmergencyFund = (target) => {

        if (target === 'emergency'){
            setEmergencyFunds([...emergencyFunds, { name: '', sip: '', lumpsum: '' }]);
            setEditedEmergencyFundsData([...editedEmergencyFundsData, { name: '', sip: '', lumpsum: '' }]);
        }
        else{
            setHealthInsuranceFunds([...healthInsuranceFunds, { name: '', cover: '', perYear: '' }]);
            setEditedHealthInsuranceFundsData([...editedHealthInsuranceFundsData, { name: '', cover: '', perYear: '' }]);
        }
    };

    const removeEmergencyFund = (target, index) => {

        if (target === 'emergency'){
            const updatedFunds = emergencyFunds.filter((_, i) => i !== index);
            setEmergencyFunds(updatedFunds);
            const updatedEditedData = editedEmergencyFundsData.filter((_, i) => i !== index);
            setEditedEmergencyFundsData(updatedEditedData);
        }
        else{
            const updatedFunds = healthInsuranceFunds.filter((_, i) => i !== index);
            setHealthInsuranceFunds(updatedFunds);
            const updatedEditedData = editedHealthInsuranceFundsData.filter((_, i) => i !== index);
            setEditedHealthInsuranceFundsData(updatedEditedData);
        }
    };

    const saveAllData = () => {

        //Emergency Funds
        const updatedEFunds = emergencyFunds.map((fund, index) => ({
            name: editedEmergencyFundsData[index].name === '' ? 'Fund Name' : editedEmergencyFundsData[index].name,
            sip: editedEmergencyFundsData[index].sip === '' ? '0' : editedEmergencyFundsData[index].sip,
            lumpsum: editedEmergencyFundsData[index].lumpsum === '' ? '0' : editedEmergencyFundsData[index].lumpsum,
        }));
        setEmergencyFunds(updatedEFunds);
        setEditedEmergencyFundsData(updatedEFunds);

        //Health Insurance Funds
        const updatedHIFunds = healthInsuranceFunds.map((insurance, index) => ({
            name: editedHealthInsuranceFundsData[index].name === '' ? 'Insurance Name' : editedHealthInsuranceFundsData[index].name,
            cover: editedHealthInsuranceFundsData[index].cover === '' ? '0' : editedHealthInsuranceFundsData[index].cover,
            perYear: editedHealthInsuranceFundsData[index].perYear === '' ? '0' : editedHealthInsuranceFundsData[index].perYear,
        }));
        setHealthInsuranceFunds(updatedHIFunds);
        setEditedHealthInsuranceFundsData(updatedHIFunds);

        handleNotificationMessage("Data Updated")
    };


    return (
        <div className='flex flex-col gap-[20px]'>                         
            <div className='flex flex-col gap-[20px] bg-white rounded-b-[10px] p-[20px]'>
                <div className="leading-[15px] font-semibold bg-[#F1F7FD] px-[15px] py-[13px] rounded-[9px] flex">
                    <div>Emergency Funds</div>
                    <button className="ml-auto" onClick={() => addEmergencyFund('emergency')}>
                        <Image src={addFilled} className="text-primary inline" />
                        <span className="text-primary ml-[5px]">Add</span>
                    </button>
                </div>

                {/* Emergency Fund */}
                <div className="flex flex-col gap-[15px] w-full">
                    <div className="flex font-semibold">
                        <span className="w-[50%]"></span>
                        <span className="w-[20%]">SIP</span>
                        <span className="w-[20%]">Lumpsum</span>
                    </div>
                    <ul className="flex flex-col gap-[20px] w-full">
                        {
                            emergencyFunds.map((fund, index) => (
                                <li key={"abc"  + index} className="flex font-medium items-center">
                                    <div className="w-[50%]">
                                        <CustomTextField 
                                            width="400px" 
                                            value={editedEmergencyFundsData[index].name}
                                            handleChange={(event) => handleInputChange(event, index, 'emergency', 'name')} 
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" >
                                                    <Search className="text-[18px]" />
                                                    </InputAdornment>
                                                ),
                                                }}
                                        />
                                    </div>
                                    <div className="w-[20%]">
                                        <CustomTextField 
                                            width="125px" 
                                            value={editedEmergencyFundsData[index].sip} 
                                            handleChange={(event) => handleInputChange(event, index, 'emergency', 'sip')} 
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" >
                                                    <p className="font-medium text-black">₹</p>
                                                    </InputAdornment>
                                                ),
                                                }}
                                        />
                                    </div>
                                    <div className="w-[18%]">
                                        <CustomTextField 
                                            width="125px" 
                                            value={editedEmergencyFundsData[index].lumpsum} 
                                            handleChange={(event) => handleInputChange(event, index, 'emergency', 'lumpsum')} 
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" >
                                                    <p className="font-medium text-black">₹</p>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </div>
                                    <button className="text-primary w-[24px] h-[24px] text-[16px] font-bold" onClick={() => removeEmergencyFund('emergency', index)}><Image src={remove} /></button>
                                </li>
                                )
                            )
                        }
                    </ul>
                    </div>
                    {/* <button className="mr-auto text-primary text-[16px] font-medium" onClick={() => addEmergencyFund('emergency')}>+ Add</button> */}
                    
                    {/* Health Insurance Funds */}
                    <div className="leading-[15px] font-semibold bg-[#F1F7FD] px-[15px] py-[13px] rounded-[9px] flex">
                        <div>Health Insurance</div>
                        <button className="ml-auto" onClick={() => addEmergencyFund('health')}>
                            <Image src={addFilled} className="text-primary inline" />
                            <span className="text-primary ml-[5px]">Add</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-[15px] w-full">
                    <div className="flex font-semibold">
                        <span className="w-[50%]"></span>
                        <span className="w-[20%]">Cover</span>
                        <span className="w-[20%]">Per Year</span>
                    </div>
                    <ul className="flex flex-col gap-[20px] w-full">
                        {
                            healthInsuranceFunds.map((fund, index) => (
                                <li key={"def"  + index} className="flex font-medium items-center">
                                    <div className="w-[50%]">
                                        <CustomTextField 
                                            width="400px" 
                                            value={editedHealthInsuranceFundsData[index].name}
                                            handleChange={(event) => handleInputChange(event, index, 'health', 'name')} 
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" >
                                                    <Search className="text-[18px]" />
                                                    </InputAdornment>
                                                ),
                                                }}
                                        />
                                    </div>
                                    <div className="w-[20%]">
                                        <CustomTextField 
                                            width="125px" 
                                            value={editedHealthInsuranceFundsData[index].cover} 
                                            handleChange={(event) => handleInputChange(event, index, 'health', 'cover')} 
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" >
                                                    <p className="font-medium text-black">₹</p>
                                                    </InputAdornment>
                                                ),
                                                }}
                                        />
                                    </div>
                                    <div className="w-[18%]">
                                        <CustomTextField 
                                            width="125px" 
                                            value={editedHealthInsuranceFundsData[index].perYear} 
                                            handleChange={(event) => handleInputChange(event, index, 'health', 'perYear')} 
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" >
                                                    <p className="font-medium text-black">₹</p>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </div>
                                    <button className="text-primary w-[24px] h-[24px] text-[16px] font-bold" onClick={() => removeEmergencyFund('health', index)}><Image src={remove} /></button>
                                </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-[20px] bg-white rounded-[10px] p-[20px]'>
                <h1 className='font-semibold text-[18px]'>Why are we suggesting these funds?</h1>
                <div className='w-full border-[1px] border-[#E0E0E0] py-[15px] rounded-[10px] flex flex-col gap-[20px]'>
                    <div className='text-[#6E6E72] text-[12px] flex mx-[20px]'>
                        <p className='w-[30%]'>Asset Class / Scheme Name</p>
                        <p className='w-[70%]'>Rationale</p>
                    </div>
                    <div className="leading-[15px] text-[16px] font-semibold bg-[#F1F7FD] px-[15px] py-[13px] rounded-[9px] mx-[20px]">
                        Emergency Fund
                    </div>
                    
                    {/* Mappable */}
                    <div className='flex px-[35px] py-[15px]'>
                        <div className='w-[30%] flex flex-col gap-[10px]'>
                            <p className='leading-[5px] font-semibold'>Kotak Arbitrage Fund</p>
                            <p className='text-[#6E6E72]'>Blend <span>Star 5</span></p>
                        </div>
                        <div className='w-[70%]'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
