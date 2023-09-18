import { Popper } from '@mui/material';
import threeDots from '/public/partner/threeDots.svg'
import Image from "next/image.js";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDataContext } from '@/app/context/DataContext';

export default function TableRow ({data = { name: 'Rahul', email: 'rahul@gmail.com', phone: '9876543210' }, setActive, portfolio}) {

    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter()
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const {setPopup, setInvestor, setSip, setAddScheme} = useDataContext();

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return(
        <tr class="even:bg-white odd:bg-[#F9FBFF]">
            {data.map(ele=><td>{ele}</td>)}
            {
                setActive &&
                <td className="pl-[20px]">
                <button  className='w-[25px] h-[10px]'  onClick={handleClick} onBlur={handleClick}>
                    <Image src={threeDots} />
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl} >
                    <div className='w-[160px] h-[120px] text-[14px] flex flex-col bg-white rounded-[10px] shadow-lg justify-around items-center mt-[5px] mr-[100px] p-[5px] '>
                        <p onMouseDown={()=>{router.push('/partner?tab=registration&create=1');setTimeout(()=>setActive('registration'),500);}} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center ' >Add Investor</p>
                        <p onMouseDown={()=>{ setInvestor(data[0]); setPopup(true);}} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>Investor List</p>
                        <p onMouseDown={()=>{ setSip(true) }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>Systematic Plans</p>
                    </div>
                </Popper>
                </td>
            }
            {
                portfolio && 
                <td className="pl-[20px]">
                <button  className='w-[25px] h-[10px]'  onClick={handleClick} onBlur={handleClick}>
                    <Image src={threeDots} />
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl} >
                    <div className='w-[160px] h-[120px] text-[14px] flex flex-col bg-white rounded-[10px] shadow-lg justify-around items-center mt-[5px] mr-[100px] p-[5px] '>
                        <p onMouseDown={()=>{ setAddScheme(true) }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center ' >Add Scheme</p>
                        <p onMouseDown={()=>{  }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>View</p>
                        <p onMouseDown={()=>{  }} className='cursor-pointer hover:font-semibold hover:bg-[#F9FBFF] h-[37px] w-[150px] flex items-center justify-center '>Delete</p>
                    </div>
                </Popper>
                </td>
            }
        </tr>
    );
}