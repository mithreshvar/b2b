import React, { useState } from 'react'
import CustomSelectField from '../InputFields'
import CustomDropSelectField from './CustomDropSelectField';

function Filter() {
    const [Filter, setFilter] = useState("first")

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
    return (
        <div className='w-full h[460px] pl-[25px] mt-[33px] pr-[30px]'>

            <p className='font-bold text-[14px]'>Filters</p>
            <div className='flex mt-[10px] gap-[10px]'>
                <div className={`w-[141px] h-[33px] text-center text-bold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "first"?"bg-[#DCEBFE] text-[#0071E7]":"bg-[#F7F8FF] text-[#BEBEBE]"}`} onClick={()=>(setFilter("first"))}>Display columns</div>
                <div className={`w-[141px] h-[33px] text-center text-bold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "second"?"bg-[#DCEBFE] text-[#0071E7]":"bg-[#F7F8FF] text-[#BEBEBE]"}`} onClick={()=>{setFilter("second")}}>Filters 2</div>
            </div>
            {
                Filter === "first" ?
                 <div className='w-full h-[100px] bg-white '>
                     <CustomDropSelectField label="Family" value={family} valueOptions={familyOptions} handleChange={handleFamilyChange} errorMessage={familyErrorMessage} />
                 </div>
                 :
                 
                 
                 <div className='w-full h-[100px] bg-blue-800'></div>
            }
            
            
        </div>
    )
}

export default Filter