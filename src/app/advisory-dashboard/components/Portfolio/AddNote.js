import React, { useState } from 'react'
import Image from "next/image"
import close from '../../../../../public/close.svg'
import editIcon from '../../../../../public/editIcon.svg'
import deleteIcon from '../../../../../public/deleteIcon.svg'
import moment from 'moment/moment'

function AddNote() {
    const [Description, setDescription] = useState([
        {
            "Date": "01-10-2023",
            "Notes": "Customer call done. Shared details."
        }, {
            "Date": "25-07-2023",
            "Notes": "Email delivered to customer inbox"
        },
        {
            "Date": "07-06-2023",
            "Notes": "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
        },
    ])
    const [Index, setIndex] = useState(0)
    const [text, settext] = useState("Notes")
    const [edit, setEdit] = useState(false)
    const textchange = (event) => {
        settext(event.target.value)
    }
    const [focus, setIsfocus] = useState(false)
    const handleSave = () => {
        if (edit) {
            const data = Description
            data[Index].Notes = text
        }
        else {
            setDescription([{ "Date": moment().format("DD-MM-YYYY"), "Notes": text }, ...Description])
        }
        settext("note")
        setEdit(false)
        setIsfocus(false)
    }

    return (
        <div className='bg-white w-[100%] h-[610px] pr-[15px] pl-[30px]'>

            <div className='w-full flex justify-end'>
                <Image src={close} className='mt-[15px]' />
            </div>
            <p className='h-[20px] font-semibold text-[20px] w-[188px]'>{edit ? "Edit Note" : "Add Note"}</p>




            {focus ? (<legend className={`absolute mt-[13.3px] backdrop-blur-3xl bg-white ml-[20px] text-[12px] w-[42px] pl-[5px] text-[#6E6E72]`}>Note</legend>) : ""}
            <textarea className={`w-full mr-[15px] mt-[20px] border-[#E4E5E5] text- ${edit || text !== "Notes" ? "[#6E6E72]" : "black   "} border-[2px] pt-[5px] pl-[15px] rounded-[8px]`} value={text} onChange={textchange} onClick={() => { setIsfocus(true), settext("") }} onBlur={() => { setIsfocus(false); edit ? "" : settext("Note"); }}></textarea>







            <p className='text-[#6E6E72] text-[12px] font-medium'>Max characters allowed 250</p>
            <div className='w-full flex justify-end gap-[20px]'>

                <button className={`w-[114px] h-[40px] ${edit ? "opacity-100" : "opacity-0"}  rounded-[25px] text-[#0071E7] font-medium text-[14px]`} onClick={() => {
                    settext("note"); setEdit(false); setIsfocus(false)
                }}>Cancel</button>
                <button className={`w-[114px] h-[40px] ${text !== "" ? "bg-[#0071E7] opacity-1" : "bg-[#0071E7] opacity-[0.5]"}  rounded-[25px] text-white font-semibold text-[14px]`} onClick={handleSave}>Save</button>
            </div>
            <div className={` ${edit ? "opacity-30" : "opacity-100"}`}>
                <p className='text-[16px] font-semibold h-[17px] mt-[20px]'>Previous Notes</p>
                <div className="mt-[10px] font-medium text-[#000000]">
                    <table className="w-full border-collapse ml-[20px]">
                        <thead>
                            <tr>
                                <th className="p-4 text-left font-semibold text-[#6E6E72] pl-[50px] text-[14px]">Date</th>
                                <th className="p-4 text-left font-semibold text-[#6E6E72] text-[14px]">Notes</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Description.map((ele, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td className="p-4 text-left text-[14px] w-[300px] pl-[50px]">{moment(ele.Date, "DD-MM-YYYY").format("D MMM YYYY")}</td>
                                            <td className="p-4 text-left text-[14px] w-[63%] h-[32px]">{ele.Notes}</td>
                                            <div className='flex gap-[30px]'>
                                                <td className="p-4 text-left flex items-center text-[#0066CD] cursor-pointer font-medium h-[12px] w-[50px] gap-[3px]" onClick={() => { setIndex(ind); setEdit(true); settext(ele.Notes); setIsfocus(true) }}> <Image src={editIcon} className='h-[12px]' /> Edit</td>
                                                <td className="p-4 text-left flex items-center text-[#F56902] cursor-pointer font-medium h-[12px] w-[50px] ml-[20px] pl-[20px] gap-[3px]"> <Image src={deleteIcon} className='h-[12px]' /> Delete</td>
                                            </div>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AddNote;
