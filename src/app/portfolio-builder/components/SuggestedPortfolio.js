// import React, { useState } from 'react';

// const MemberDisplayPage = () => {
//   const initialMembers = {
//     normal: [{ name: 'Pradeep', age: 22 }, { name: 'Rahul', age: 20 }],
//     vip: [{ name: 'Sudeep', age: 22 }]
//   };

//   // Combine both normal and vip members into a single state
//   const [allMembers, setAllMembers] = useState({
//     normal: initialMembers.normal,
//     vip: initialMembers.vip
//   });

//   const [editedData, setEditedData] = useState({
//     normal: initialMembers.normal.map((member) => ({ name: '', age: '' })),
//     vip: initialMembers.vip.map((member) => ({ name: '', age: '' }))
//   });

//   // Generalized function to handle input change
//   const handleInputChange = (event, index, field, category) => {
//     const newEditedData = { ...editedData };
//     newEditedData[category][index][field] = event.target.value;
//     setEditedData(newEditedData);
//   };

//   const addMember = (category) => {
//     const newMember = { name: '', age: '' };
//     const newMembers = { ...allMembers };
//     newMembers[category].push(newMember);

//     const newEditedData = { ...editedData };
//     newEditedData[category].push(newMember);

//     setAllMembers(newMembers);
//     setEditedData(newEditedData);
//   };

//   const removeMember = (index, category) => {
//     const updatedMembers = { ...allMembers };
//     updatedMembers[category] = updatedMembers[category].filter((_, i) => i !== index);

//     const updatedEditedData = { ...editedData };
//     updatedEditedData[category] = updatedEditedData[category].filter((_, i) => i !== index);

//     setAllMembers(updatedMembers);
//     setEditedData(updatedEditedData);
//   };

//   const saveAllData = () => {
//     const updatedMembers = { ...allMembers };
//     for (const category of ['normal', 'vip']) {
//       updatedMembers[category] = allMembers[category].map((member, index) => ({
//         name: editedData[category][index].name === '' ? member.name : editedData[category][index].name,
//         age: editedData[category][index].age === '' ? member.age : parseInt(editedData[category][index].age),
//       }));
//     }
//     setAllMembers(updatedMembers);

//     // Clear all edited data
//     const clearedEditedData = { normal: [], vip: [] };
//     setEditedData(clearedEditedData);
//   };

//   return (
//     <div>
//       <h1>Member Display Page</h1>
//       <h2>Normal Members</h2>
//       <ul>
//         {allMembers.normal.map((member, index) => (
//           <li key={"abc" + index}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={editedData.normal[index].name === '' ? member.name : editedData.normal[index].name}
//               onChange={(event) => handleInputChange(event, index, 'name', 'normal')}
//             />
//             <input
//               type="number"
//               placeholder="Age"
//               value={editedData.normal[index].age === '' ? member.age : editedData.normal[index].age}
//               onChange={(event) => handleInputChange(event, index, 'age', 'normal')}
//             />
//             <button onClick={() => removeMember(index, 'normal')}>Remove Member</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addMember('normal')}>Add Normal Member</button>

//       <h2>VIP Members</h2>
//       <ul>
//         {allMembers.vip.map((member, index) => (
//           <li key={"dec" + index}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={editedData.vip[index].name === '' ? member.name : editedData.vip[index].name}
//               onChange={(event) => handleInputChange(event, index, 'name', 'vip')}
//             />
//             <input
//               type="number"
//               placeholder="Age"
//               value={editedData.vip[index].age === '' ? member.age : editedData.vip[index].age}
//               onChange={(event) => handleInputChange(event, index, 'age', 'vip')}
//             />
//             <button onClick={() => removeMember(index, 'vip')}>Remove VIP Member</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addMember('vip')}>Add VIP Member</button>

//       <button onClick={saveAllData}>Save All</button>


//       <br/>
//       <br/>
//       {initialMembers.normal.map(mem => <p>{mem.name+"  "+mem.age}</p>)}
//       {initialMembers.vip.map(mem => <p>{mem.name+"  "+mem.age}</p>)}

//     </div>
//   );
// };

// export default MemberDisplayPage;


import React, { useState } from "react";
import data from '../data/SuggestedPortfolio.json';
import { ClearRounded, Edit, Search } from "@mui/icons-material";
import { CustomTextField } from "./InputFields";
import { InputAdornment } from "@mui/material";

export default function SuggestedPortfolio({isEditTriggered, setIsEditTriggered, handleNotificationMessage}) {

    const [plan, setPlan] = useState('Safety Box');

    const [emergencyFunds, setEmergencyFunds] = useState(data["Safety Box"]["Emergency Fund"]);
    const [editedEmergencyFundsData, setEditedEmergencyFundsData] = useState(
        data["Safety Box"]["Emergency Fund"].map((fund) => ({ name: '', sip: '', lumpsum: '' }))
    );

    const convertToMoney = (value) => {
        value = value.replace(/^0+/, '');
        value = Number(value.replace(/\D/g,'')).toLocaleString("en-In");
        return value;
    }

    const handleInputChange = (event, index, field) => {
        const newEditedData = [...editedEmergencyFundsData];
        let value = event.target.value;
        if (field === 'sip' || field === 'lumpsum'){
            value = convertToMoney(value);
        }
        newEditedData[index][field] = value;
        setEditedEmergencyFundsData(newEditedData);
    };

    const addEmergencyFund = () => {
        setEmergencyFunds([...emergencyFunds, { name: '', sip: '', lumpsum: '' }]);
        setEditedEmergencyFundsData([...editedEmergencyFundsData, { name: '', sip: '', lumpsum: '' }]);
    };

    const removeEmergencyFund = (index) => {
        const updatedFunds = emergencyFunds.filter((_, i) => i !== index);
        setEmergencyFunds(updatedFunds);
        const updatedEditedData = editedEmergencyFundsData.filter((_, i) => i !== index);
        setEditedEmergencyFundsData(updatedEditedData);
    };

    const saveAllData = () => {
        const updatedFunds = emergencyFunds.map((fund, index) => ({
        name: editedEmergencyFundsData[index].name === '' ? fund.name : editedEmergencyFundsData[index].name,
        sip: editedEmergencyFundsData[index].sip === '' ? fund.sip : editedEmergencyFundsData[index].sip,
        lumpsum: editedEmergencyFundsData[index].lumpsum === '' ? fund.lumpsum : editedEmergencyFundsData[index].lumpsum,
        }));
        setEmergencyFunds(updatedFunds);
        setEditedEmergencyFundsData(updatedFunds.map(() => ({ name: '', sip: '', lumpsum: '' })));
        handleNotificationMessage("Data Updated")
    };

    return(
        <div className="flex flex-col gap-[20px] text-[14px] px-[50px]">
            <h3 className="text-[20px] font-semibold leading-[38px]">Suggested Portfolio</h3>

            <div className="w-full bg-white rounded-[15px] p-[20px] flex flex-col gap-[10px]">
                <div className="flex gap-[5px]">
                    <button className={`px-[30px] py-[10px] rounded-t-[10px] ${plan === 'Safety Box' ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setPlan('Safety Box')}>Safety Box</button>
                    <button className={`px-[30px] py-[10px] rounded-t-[10px] ${plan === 'Short Term Box' ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setPlan('Short Term Box')}>Short Term Box</button>
                    <button className={`px-[30px] py-[10px] rounded-t-[10px] ${plan === 'Long Term Wealth Box' ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setPlan('Long Term Wealth Box')}>Long Term Wealth Box</button>
                    <button className={`px-[30px] py-[10px] rounded-t-[10px] ${plan === 'High Risk Box' ? 'bg-[#DCEBFE] text-primary font-semibold' : 'bg-[#F7F8FF] text-[#BEBEBE] font-medium'}`} onClick={() => setPlan('High Risk Box')}>High Risk Box</button>
                    <button className="ml-auto mr-[20px]" onClick={() => setIsEditTriggered(true)}>
                        <Edit sx={{fontSize: '14px', mt: '-2px', color: 'primary.main'}}/>
                        <span className="font-bold text-primary ml-[2px]">Edit</span>
                    </button>
                </div>

                {   plan === 'Safety Box' &&
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
                                data[plan]["Health Insurance"].map(fund => (
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
                }
            </div>


            {
                (isEditTriggered) &&
                <div className='absolute w-screen h-screen top-[-60px] left-0 bg-[rgba(10,22,8,0.3)] flex items-end justify-center z-[100]' >
                    <div className='relative w-full h-[498px] rounded-t-[25px] bg-white px-[30px] py-[40px] flex flex-col gap-y-[20px] overflow-auto'>
                        <ClearRounded className='absolute top-[15px] right-[15px] border-[1px] border-gray-300 rounded-[30px] p-[1px] cursor-pointer text-primary text-[18px]' onClick={() => setIsEditTriggered(false)} />
                        

                        <h1 className="text-[20px] font-semibold">Edit Safety Box</h1>

                        {/* Emergency Fund */}
                        <div className="flex flex-col gap-[20px] w-full">
                            <div className="flex text-[#6E6E72] font-semibold">
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
                                                    value={editedEmergencyFundsData[index].name === "" ? fund.name : editedEmergencyFundsData[index].name} 
                                                    handleChange={(event) => handleInputChange(event, index, 'name')} 
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
                                                    value={editedEmergencyFundsData[index].sip === "" ? fund.sip : editedEmergencyFundsData[index].sip} 
                                                    handleChange={(event) => handleInputChange(event, index, 'sip')} 
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
                                                    value={editedEmergencyFundsData[index].lumpsum === "" ? fund.lumpsum : editedEmergencyFundsData[index].lumpsum} 
                                                    handleChange={(event) => handleInputChange(event, index, 'lumpsum')} 
                                                    InputProps={{
                                                        startAdornment: (
                                                          <InputAdornment position="start" >
                                                            <p className="font-medium text-black">₹</p>
                                                          </InputAdornment>
                                                        ),
                                                      }}
                                                />
                                            </div>
                                            <button className="text-primary w-[24px] h-[24px] text-[16px] font-bold border-[1px] border-primary rounded-full" onClick={() => removeEmergencyFund(index)}>-</button>
                                        </li>
                                        )
                                    )
                                }
                            </ul>
                            <button className="mr-auto text-primary text-[16px] font-medium" onClick={addEmergencyFund}>+ Add</button>
                        </div>
                        <button className="ml-auto w-[147px] h-[50px] bg-primary text-white rounded-[25px] text-[18px] font-semibold" onClick={saveAllData}>Save</button>
                    </div>
                </div>
            }
        </div>
    );
}

// import React, { useState } from 'react';

// const MemberDisplayPage = () => {
//   const initialMembers = [{ name: 'Pradeep', age: 22 }, { name: 'Rahul', age: 20 }];
//   const [members, setMembers] = useState(initialMembers);
//   const [editedData, setEditedData] = useState(
//     initialMembers.map((member) => ({ name: '', age: '' }))
//   );

//   const handleInputChange = (event, index, field) => {
//     const newEditedData = [...editedData];
//     newEditedData[index][field] = event.target.value;
//     setEditedData(newEditedData);
//   };

//   const addMember = () => {
//     setMembers([...members, { name: '', age: '' }]);
//     setEditedData([...editedData, { name: '', age: '' }]);
//   };

//   const removeMember = (index) => {
//     const updatedMembers = members.filter((_, i) => i !== index);
//     setMembers(updatedMembers);
//     const updatedEditedData = editedData.filter((_, i) => i !== index);
//     setEditedData(updatedEditedData);
//   };

//   const saveAllData = () => {
//     const updatedMembers = members.map((member, index) => ({
//       name: editedData[index].name === '' ? member.name : editedData[index].name,
//       age: editedData[index].age === '' ? member.age : parseInt(editedData[index].age),
//     }));
//     setMembers(updatedMembers);
//     setEditedData(updatedMembers.map(() => ({ name: '', age: '' })));
//   };

//   return (
//     <div>
//       <h1>Member Display Page</h1>
//       <ul>
//         {members.map((member, index) => (
//           <li key={index}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={editedData[index].name === '' ? member.name : editedData[index].name}
//               onChange={(event) => handleInputChange(event, index, 'name')}
//             />
//             <input
//               type="number"
//               placeholder="Age"
//               value={editedData[index].age === '' ? member.age : editedData[index].age}
//               onChange={(event) => handleInputChange(event, index, 'age')}
//             />
//             <button onClick={() => removeMember(index)}>Remove Member</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={addMember}>Add Member</button>
//       <button onClick={saveAllData}>Save All</button>

//       <br/>
//       <br/>
//       {members.map((member) => <p>{member.name + "  ,  " + member.age}</p>)}
//     </div>
//   );
// };

// export default MemberDisplayPage;
