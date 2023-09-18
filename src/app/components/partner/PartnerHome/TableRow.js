import { Box, Popper } from '@mui/material';
import threeDots from '/public/partner/threeDots.svg'
import Image from "next/image.js";
import { useState } from 'react';

export default function TableRow ({data = { name: 'Rahul', email: 'rahul@gmail.com', phone: '9876543210' }}) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return(
        <tr class="even:bg-white odd:bg-[#F9FBFF]">
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td className="pl-[20px]">
            <button  className='w-[25px] h-[10px]'  onClick={handleClick} onBlur={handleClick}>
                <Image src={threeDots} />
                <Popper id={id} open={open} anchorEl={anchorEl} >
                    <div className='w-[160px] h-[120px] text-[14px] flex flex-col bg-white rounded-[10px] shadow-lg justify-around items-center mt-[5px] mr-[100px] p-[5px] '>
                        <p className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>Add Investor</p>
                        <p className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>Investor List</p>
                        <p className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>Systematic Plans</p>
                    </div>
                </Popper>
            </button>
            </td>
            
        </tr>
    );
}