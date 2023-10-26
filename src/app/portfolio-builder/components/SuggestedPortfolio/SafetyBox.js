import React, { useState } from 'react'
import data from '../../data/SuggestedPortfolio.json';
import { ClearRounded, Search } from "@mui/icons-material";
import { CustomTextField } from '../InputFields';
import { InputAdornment } from "@mui/material";

export default function SafetyBox({isEditTriggered, setIsEditTriggered, handleNotificationMessage}) {


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
        <>
            <div className="bg-[#FBFBFF] w-full p-[15px] rounded-[9px]">
                            
                {/* Emergency Fund */}
                <div className="flex flex-col gap-[20px] w-full">
                    <div className="flex text-[#6E6E72] font-semibold">
                        <span className="w-[50%]">Emergency Fund</span>
                        <span className="w-[25%]">SIP</span>
                        <span className="w-[25%]">Lumpsum</span>
                    </div>
                    {
                        emergencyFunds.map(fund => (
                            <div className="flex font-medium">
                                <span className="w-[50%]">{fund.name}</span>
                                <span className="w-[25%]">{fund.sip}</span>
                                <span className="w-[25%]">{fund.lumpsum}</span>
                            </div>
                            )
                        )
                    }

                    {/* Health Insurance */}
                    <div className="flex text-[#6E6E72] font-medium">
                        <span className="w-[50%]">Health Insurance</span>
                        <span className="w-[25%]">Cover</span>
                        <span className="w-[25%]">Per Year</span>
                    </div>
                    {
                        healthInsuranceFunds.map(fund => (
                            <div className="flex font-medium">
                                <span className="w-[50%]">{fund.name}</span>
                                <span className="w-[25%]">{fund.cover}</span>
                                <span className="w-[25%]">{fund.perYear}</span>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
 
            {
                (isEditTriggered) &&
                <div className='absolute w-screen h-screen top-[-60px] left-0 bg-[rgba(10,22,8,0.3)] flex items-end justify-center z-[100]' >
                    <div className='relative w-full h-[530px] rounded-t-[25px] bg-white px-[30px] py-[40px] flex flex-col gap-y-[20px] overflow-auto'>
                        <ClearRounded className='absolute top-[15px] right-[15px] border-[1px] border-gray-300 rounded-[30px] p-[1px] cursor-pointer text-primary text-[18px]' onClick={() => setIsEditTriggered(false)} />
                        

                        <h1 className="text-[20px] font-semibold">Edit Safety Box</h1>

                        {/* Emergency Fund */}
                        <div className="flex flex-col gap-[20px] w-full">
                            <div className="flex text-[#6E6E72] font-medium">
                                <span className="w-[38%]">Emergency Fund</span>
                                <span className="w-[20%]">SIP</span>
                                <span className="w-[20%]">Lumpsum</span>
                            </div>
                            <ul className="flex flex-col gap-[20px] w-full">
                                {
                                    emergencyFunds.map((fund, index) => (
                                        <li key={"abc"  + index} className="flex font-medium items-center">
                                            <div className="w-[38%]">
                                                <CustomTextField 
                                                    width="500px" 
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
                                                    width="240px" 
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
                                                    width="240px" 
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
                                            <button className="text-primary w-[24px] h-[24px] text-[16px] font-bold border-[1px] border-primary rounded-full" onClick={() => removeEmergencyFund('emergency', index)}>-</button>
                                        </li>
                                        )
                                    )
                                }
                            </ul>
                            <button className="mr-auto text-primary text-[16px] font-medium" onClick={() => addEmergencyFund('emergency')}>+ Add</button>
                            
                            {/* Health Insurance Funds */}
                            <div className="flex text-[#6E6E72] font-medium">
                                <span className="w-[38%]">Health Insurance</span>
                                <span className="w-[20%]">Cover</span>
                                <span className="w-[20%]">Per Year</span>
                            </div>
                            <ul className="flex flex-col gap-[20px] w-full">
                                {
                                    healthInsuranceFunds.map((fund, index) => (
                                        <li key={"def"  + index} className="flex font-medium items-center">
                                            <div className="w-[38%]">
                                                <CustomTextField 
                                                    width="500px" 
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
                                                    width="240px" 
                                                    value={editedHealthInsuranceFundsData[index].cover} 
                                                    handleChange={(event) => handleInputChange(event, index, 'health', 'sip')} 
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
                                                    width="240px" 
                                                    value={editedHealthInsuranceFundsData[index].perYear} 
                                                    handleChange={(event) => handleInputChange(event, index, 'health', 'lumpsum')} 
                                                    InputProps={{
                                                        startAdornment: (
                                                          <InputAdornment position="start" >
                                                            <p className="font-medium text-black">₹</p>
                                                          </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <button className="text-primary w-[24px] h-[24px] text-[16px] font-bold border-[1px] border-primary rounded-full" onClick={() => removeEmergencyFund('health', index)}>-</button>
                                        </li>
                                        )
                                    )
                                }
                            </ul>
                            <button className="mr-auto text-primary text-[16px] font-medium" onClick={() => addEmergencyFund('health')}>+ Add</button>

                        </div>
                        <button className="ml-auto w-[147px] min-h-[50px] bg-primary text-white rounded-[25px] text-[18px] font-semibold" onClick={saveAllData}>Save</button>
                    </div>
                </div>
            } 
        </>
    )
}
