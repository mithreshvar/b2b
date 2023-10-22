import React, { useState } from 'react';
import CustomDropSelectField from './CustomDropSelectField';
import { Button } from '@mui/material';
import Image from 'next/image';
import clearFilter from '../../../../../public/clearFilter.svg';
import CustomSelectField from '@/app/b2b/components/InputFields';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from 'autoprefixer';


function Filter(props) {

    const {columns}=props
    const [CurrFilterState, setCurrFilterState] = useState({ ...props.data });
    const [Filter, setFilter] = useState("first");
    const [state, setState] = useState('');
    const [EnterValue,setEnterValue]=useState('');
    const [SaveClick,SetSaveClick]=useState(false);
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const [disabled,setDisabled]=useState(true);
    const [filtervalue,setFiltervalue]=useState("filter1");
    const [onedit,SetOnedit]=useState(true)
    const [onsave,setonsave]=useState(true)
    const [Subcategory,Setsubcategory]=useState("")
    const [category,Setcategory]=useState("")
    const [Subcategory1,Setsubcategory1]=useState("")
    const [category1,Setcategory1]=useState("")
    const [state1, setState1] = useState('');
    const [EnterValue1,setEnterValue1]=useState('');

    const condition = ['<'];
    const Evalue = ["500000"]; 


    const handleFilterValue=(event)=>{
        let value= event.target.value;
        setFiltervalue(value)
    }

    const handleStateChange = (event)=>{
        const value= event.target.value
            setState(value);
    }

    const handleValueChange=(event)=>{
        const value= event.target.value;
        setEnterValue(value);
    }

    const handleState1Change = (event)=>{
        const value= event.target.value
            setState1(value);
    }

    const handleValue1Change=(event)=>{
        const value= event.target.value;
        setEnterValue1(value);
    }

    const handleFilterChange = (data) => {
        setCurrFilterState(data);
    };

    const handleApplyFilter = () => {
        props.handleChange(CurrFilterState);
        props.onBlur();
    };

    const handleClearFilter = () => {
        props.handleChange(props.columns);
        props.onBlur();
        SetSaveClick(false);
        setFiltervalue("filter1");
        setState('');
        setEnterValue('');
        setState1('');
        setEnterValue1('');
        Setcategory1('');
        Setsubcategory1('');
        Setcategory('');
        Setsubcategory('');
        setonsave(true);
        SetOnedit(true);
    };

    const handleSaveFilter=(event)=>{
        event.preventDefault()
        if(category!="" && Subcategory!="" && EnterValue !="" && state!="")
        SetSaveClick(true)  
    }

    const handleopen = (event)=>{
        event.preventDefault()
        if(category!="" && Subcategory!="" && EnterValue !="" && state!="")
        setShowAdditionalFields(true);
    }

    const handleClose = () => {
        setShowAdditionalFields(false); 
    }

    const handleEdit =(event)=>{
        event.preventDefault()
        setDisabled(false)
        SetOnedit(false)
    }

    const handleclose=(event)=>{
        event.preventDefault()
        SetSaveClick(false)
        setFiltervalue("filter1")
        setDisabled(true)
        SetOnedit(true)
        setonsave(true)
        setDisabled(true);
    }

    const handleFilterSaveUP=(event)=>{
        event.preventDefault()
        setDisabled(true)
        SetOnedit(true)
        setonsave(false)
    }

    const handleFilter2Change=(event)=>{
        let value=event.target.value;
        Setsubcategory(value)
    }

    const handleFilter1Change=(event)=>{
        let value=event.target.value;
        Setcategory(value)
    }

    const handleFilter22Change=(event)=>{
        let value=event.target.value;
        Setsubcategory1(value)
    }

    const handleFilter11Change=(event)=>{
        let value=event.target.value;
        Setcategory1(value)
    }


    return (
        <div className='w-full pl-[25px] mt-[33px] pr-[30px]'>

            <p className='font-bold text-[14px]'>Filters</p>
            <div className='flex mt-[10px] gap-[10px]'>
                <div
                    className={`w-[141px] h-[33px] text-center text-bold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "first" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`}
                    onClick={() => setFilter("first")}
                >
                    Display columns
                </div>
                <div
                    className={`w-[141px] h-[33px] text-center text-bold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "second" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`}
                    onClick={() => setFilter("second")}
                >
                    Filters 2
                </div>
            </div>

            {Filter === "first" ? (
                <div className='w-[990px] bg-white'>
                    <div className='grid grid-cols-3 gap-[17px]'>
                        {Object.keys(props.columns).map((ele) => (
                            <CustomDropSelectField
                                key={ele} // Add a unique key prop to the component
                                data={props.data}
                                title={ele}
                                value={props.columns[ele]}
                                columns={props.columns}
                                handleChange={handleFilterChange}
                            />
                        ))}
                    </div>
                    <div className='pt-[50px] flex flex-row-reverse gap-[30px]'>
                        <Button>
                            <div
                                className='w-[108px] h-[40px] text-white font-semibold text-center text-[14px] pt-[10px] bg-[#0071E7] rounded-[20px] cursor-pointer'
                                onClick={handleApplyFilter}
                            >
                                Apply Filter
                            </div>
                        </Button>
                        <div
                            className='w-[108px] h-[40px] text-[#0071E7] flex gap-[5px] font-semibold justify-center align-middle text-[14px] pt-[10px] bg-white rounded-[20px] cursor-pointer'
                            onClick={handleClearFilter}
                        >
                            <Image src={clearFilter} className='mb-[12px]' />
                            Clear Filter
                        </div>
                    </div>
                </div>
            ) 
            
            :
            
            (
                <div className={`w-[990px] bg-white ${SaveClick?("mt-[9px] ml-[3px]"):"mt-[10px]"}`}>
                {   
                    SaveClick && (
                        <div className={`h-[28px] ${onedit?"w-[125px]":"w-[160px]"} rounded-[20px] border-[1px] border-[#0171E7] mb-[15px] cursor-pointer`} > 
                            <div className='ml-[4px] flex flex-row'>
                                <div><input className='font-[14px] h-[18px] w-[80px] text-[#0171E7]' type="text" value={filtervalue} onChange={handleFilterValue} disabled={disabled} /></div>
                               { onedit && onsave && <div className='ml-[0px] cursor-pointer' onClick={handleEdit}>ed</div>}
                               { <div className={`${onsave?"ml-[2px]":"ml-[10px]"} cursor-pointer`} onClick={handleclose}>X</div>}
                               { !onedit && <div className='ml-[3px] mt-[2px] mr-[2px] h-[20px] w-[84px] rounded-[10px] bg-[#01A245] text-white text-[10px] p-[3px] pb-[2px] text-center cursor-pointer ' onClick={handleFilterSaveUP}> save</div>}
                            </div>
                        </div>
                    )
                }

             <div className='flex gap-[10px]'>          
             <div><CustomSelectField
                    width = '260px'
                    height ='40px'
                    label="Category"
                    value={category}
                    valueOptions={Object.keys(props.columns)}
                    handleChange={handleFilter1Change}
                /></div>
                
             <div> <CustomSelectField 
                    width = '260px' 
                    height='40px'
                    label="Sub Category"
                    value={Subcategory} 
                    valueOptions={columns[category]  || []} 
                    handleChange={handleFilter2Change}    
                 /></div>

              
                <div className='flex gap-[10px]'>
                <CustomSelectField 
                    width = '157px' 
                    label="condition" 
                    value={state} 
                    valueOptions={condition} 
                    handleChange={handleStateChange}    
                 />

                <CustomSelectField 
                    width = '190px' 
                    height ='40px'
                    label="Enter Value" 
                    value={EnterValue} 
                    valueOptions={Evalue}  
                    handleChange={handleValueChange}               
                />

                </div>

                <button>
                    <div className='h-[24px] w-[24px]  ml-2 cursor-pointer' onClick={handleopen} > ADD+
                    {/* <FontAwesomeIcon icon="fa-thin fa-circle-plus" style={{color: "#0071E7",}} />     */}
                </div></button>

            </div>      

            {
            showAdditionalFields && 
                     
           <div className="flex gap-[10px] mt-[15px]">        
             <div><CustomSelectField
                    width = '260px'
                    height ='40px'
                    label="Category"
                    value={category1}
                    valueOptions={Object.keys(props.columns)}
                    handleChange={handleFilter11Change}
                /></div>
                
             <div> <CustomSelectField 
                    width = '260px' 
                    height='40px'
                    label="Sub Category"
                    value={Subcategory1} 
                    valueOptions={columns[category]  || []} 
                    handleChange={handleFilter22Change}    
                 /></div>

              
               <div className='mt-[9px] flex gap-[10px]'>
                <CustomSelectField 
                    width = '157px' 
                    label="condition" 
                    value={state1} 
                    valueOptions={condition} 
                    handleChange={handleState1Change}    
                  />

                <CustomSelectField 
                    width = '190px' 
                    height ='40px'
                    label="Enter Value" 
                    value={EnterValue1} 
                    valueOptions={Evalue}  
                    handleChange={handleValue1Change}               
                />
                </div>

                    <button>
                        <div className='h-[24px] w-[24px] mt-4 ml-2 cursor-pointer' onClick={handleClose} > Sub-
                        </div>
                    </button>
             </div>

            }

                <div className='pt-[50px] flex flex-row-reverse gap-[30px]'>
                        <Button>
                            <div
                                className='w-[108px] h-[40px] text-white font-semibold text-center text-[14px] pt-[10px] bg-[#0071E7] rounded-[20px] cursor-pointer'
                                onClick={handleApplyFilter}
                            >
                                Apply Filter
                            </div>
                        </Button>
                        <div
                            className='w-[108px] h-[40px] text-[#0071E7] flex gap-[5px] font-semibold justify-center align-middle text-[14px] pt-[10px] bg-white rounded-[20px] cursor-pointer'
                            onClick={handleClearFilter}
                        >
                            <Image src={clearFilter} className='mb-[12px]' />
                            Clear Filter
                        </div>
                        <div className='mr-[600px]'>
                        <Button>
                            <div
                                className='w-[108px] h-[40px] font-semibold text-center text-[14px] bg-white border-[#0066CD] border-[1px] pt-[8px] text-[#0066CD] rounded-[20px] cursor-pointer'
                                onClick={handleSaveFilter}
                            >
                                Save Filter
                            </div>
                        </Button>
                        </div>
                </div>
     
             </div>
            )}
        </div>
    );
}

export default Filter;