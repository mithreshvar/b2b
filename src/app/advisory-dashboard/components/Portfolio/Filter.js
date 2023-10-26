import React, { useState } from 'react';
import CustomDropSelectField from './CustomDropSelectField';
import { Button } from '@mui/material';
import Image from 'next/image';
import clearFilter from '/public/clearFilter.svg';
import add from '/public/add.svg'
import subract from '/public/subract.svg'
import edit from '/public/edit.svg'
import closeSmall from '/public/closeSmall.svg'
import CustomSelectField from '@/app/b2b/components/InputFields';
import { CustomTextField } from '@/app/b2b/components/InputFields';


function Filter({filterDataOptions=[], handleFilterDataOptions, ...props}) {
    
    const {columns}=props
    const [CurrFilterState, setCurrFilterState] = useState({ ...props.FilterColumnOption });
    const [currentFilterDataOptions, setCurrentFilterDataOptions] = useState([...filterDataOptions]);
    const [Filter, setFilter] = useState("first");
    const [state, setState] = useState('');
    const [EnterValue,setEnterValue]=useState('');
    const [SaveClick,SetSaveClick]=useState(false);
    const [disabled,setDisabled]=useState(true);
    const [filtervalue,setFiltervalue]=useState("filter1");
    const [onedit,SetOnedit]=useState(true)
    const [onsave,setonsave]=useState(true)
    const [Subcategory,Setsubcategory]=useState("")
    const [category,Setcategory]=useState("")
    const [saved,setSaved]=useState(false)

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

    const handleFilterChange = (data) => {
        setCurrFilterState(data);
    };

    const handleApplyFilter = () => {
        props.handleFilterColumnOption(CurrFilterState);
        if (Filter == 'second') {
            if (category!="" && Subcategory!="" && EnterValue !="" && state!="") // if all values are entered -> push into array and send
                handleFilterDataOptions([...currentFilterDataOptions, { category: category, subcategory: Subcategory, condition: state, value: EnterValue }]);

            else if (category!="" || Subcategory!="" || EnterValue !="" || state!="") // if values are partially entered -> do nothing
                return;

            else handleFilterDataOptions(currentFilterDataOptions); // if values are not entered -> send added values
        }
        props.onBlur();
    };

    const handleClearFilter = () => {
        props.handleFilterColumnOption(props.columns);
        props.onBlur();
        SetSaveClick(false);
        setFiltervalue("filter1");
        setState('');
        setEnterValue('');
        Setcategory('');
        Setsubcategory('');
        setonsave(true);
        SetOnedit(true);
    };

    const handleSaveFilter=(event)=>{
        event.preventDefault()
        setSaved(true)
        if(category!="" && Subcategory!="" && EnterValue !="" && state!="")
        SetSaveClick(true) 
        
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
        setSaved(false)
    }

    const handleFilterSaveUP=(event)=>{
        event.preventDefault()
        setDisabled(true)
        SetOnedit(true)
        setonsave(false)
        setSaved(false)
    }

    const handleFilter2Change=(event)=>{
        let value=event.target.value;
        Setsubcategory(value)
    }

    const handleFilter1Change=(event)=>{
        let value=event.target.value;
        Setcategory(value)
    }


    const handleAddFilterData = ()=>{
        if(category!="" && Subcategory!="" && EnterValue !="" && state!=""){
            setCurrentFilterDataOptions([...currentFilterDataOptions, { category: category, subcategory: Subcategory, condition: state, value: EnterValue }]);
            setState('');
            setEnterValue('');
            Setcategory('');
            Setsubcategory('');
        }
    }

    function handleCurrentFilterDataChange (value, field, index) {
        let newData = [...currentFilterDataOptions];
        newData[index][field] = value;
        setCurrentFilterDataOptions(newData);
    }

    function handleDeleteCurrentFilter (index) {
        setCurrentFilterDataOptions(currentFilterDataOptions.filter((_, i) => index != i));
    }

    return (
        <div className='w-full pl-[25px] pr-[30px] bg-white rounded-[25px] p-[20px] flex flex-col gap-y-[20px] shadow-[0px_4px_20px_#0000001f]'>

            <p className='font-semibold text-[16px]'>Filters</p>
            <div className='flex gap-[10px]'>
                <div
                    className={`w-[141px] h-[33px] text-center font-semibold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "first" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`}
                    onClick={() => setFilter("first")}
                >
                    Display columns
                </div>
                <div
                    className={`w-[141px] h-[33px] text-center font-semibold text-[14px] rounded-t-[10px] pt-[5px] cursor-pointer ${Filter === "second" ? "bg-[#DCEBFE] text-[#0071E7]" : "bg-[#F7F8FF] text-[#BEBEBE]"}`}
                    onClick={() => setFilter("second")}
                >
                    Filters 2
                </div>
            </div>

            {Filter === "first" ? (
                <div className='w-full bg-white'>
                    <div className='grid grid-cols-3 gap-[17px]'>
                        {Object.keys(props.columns).map((ele) => (
                            <CustomDropSelectField
                                key={ele} // Add a unique key prop to the component
                                data={props.FilterColumnOption}
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
                <div className={`w-full bg-white flex flex-col gap-y-[20px] `}>
                    {   
                        SaveClick && ( 
                            <div className={` h-[28px] ml-[3px] pl-[4px] ${onedit?"w-[125px]":"w-[160px]"} flex items-center justify-center rounded-[20px] border-[1px] border-[#0171E7]  `}>
                                <div><input className='text-[14px] h-[18px] w-[80px] text-[#0171E7] bg-transparent px-[4px]' type="text" value={filtervalue} onChange={handleFilterValue} disabled={disabled} /></div>
                                { onedit && onsave && <Image src={edit} className=' cursor-pointer' onClick={handleEdit} />}
                                { <Image src={closeSmall} className={`${onsave?"ml-[5px]":"ml-[10px]"} mt-[1px] cursor-pointer`} onClick={handleclose} />}
                                { !onedit && <div className='ml-[5px] mr-[2px] my-[1px] h-[calc(100%-4px)] w-full flex items-center justify-center rounded-[10px] bg-[#01A245] text-white text-[10px] text-center cursor-pointer ' onClick={handleFilterSaveUP}> save</div>}
                            </div>
                        )
                    }

                    <div className='flex flex-col gap-y-[20px] '>
                        <div className='flex gap-[10px]'>   

                            <CustomSelectField
                                width = '260px'
                                height ='40px'
                                label="Category"
                                value={category}
                                valueOptions={Object.keys(props.columns)}
                                handleChange={handleFilter1Change}
                            />
                            
                            <CustomSelectField 
                                width = '260px' 
                                height='40px'
                                label="Sub Category"
                                value={Subcategory} 
                                valueOptions={columns[category]  || []} 
                                handleChange={handleFilter2Change}    
                            />
                            
                            <CustomSelectField 
                                width = '157px' 
                                label="condition" 
                                value={state} 
                                valueOptions={condition} 
                                handleChange={handleStateChange}    
                            />

                            <CustomTextField 
                                width = '190px' 
                                label="Enter Value"
                                value={EnterValue} 
                                handleChange={handleValueChange} 
                            />


                            <button onClick={handleAddFilterData}>
                                <Image src={add} />
                            </button>

                        </div>      

                        {
                            currentFilterDataOptions?.map((data, index) => 
                                <div className='flex gap-[10px]'>   

                                    <CustomSelectField
                                        width = '260px'
                                        height ='40px'
                                        label="Category"
                                        value={data.category}
                                        valueOptions={Object.keys(props.columns)}
                                        handleChange={(event) => handleCurrentFilterDataChange(event.target.value, "category", index)}
                                    />
                                    <CustomSelectField 
                                        width = '260px' 
                                        height='40px'
                                        label="Sub Category"
                                        value={data.subcategory} 
                                        valueOptions={columns[data.category]  || []} 
                                        handleChange={(event) => handleCurrentFilterDataChange(event.target.value, "subcategory", index)}    
                                    />
                                    <CustomSelectField 
                                        width = '157px' 
                                        label="condition" 
                                        value={data.condition} 
                                        valueOptions={condition} 
                                        handleChange={(event) => handleCurrentFilterDataChange(event.target.value, "condition", index)}    
                                    />
        
                                    <CustomTextField 
                                        width = '190px' 
                                        height ='40px'
                                        label="Enter Value" 
                                        value={data.value} 
                                        handleChange={(event) => handleCurrentFilterDataChange(event.target.value, "value", index)}
                                    />

                                    <button onClick={() => handleDeleteCurrentFilter(index)}>
                                        <Image src={subract} />
                                    </button>

                                </div>
                            )
                        }
                    </div>

                    <div className='pt-[50px] flex justify-between items-center'>
                        
                        <button 
                            
                            className={`w-[108px] h-[40px] font-semibold text-center text-[14px] bg-white border-[#0066CD] border-[1px]  text-[#0066CD] rounded-[20px] ${saved?"opacity-[0.5]":""}`}
                            onClick={handleSaveFilter}
                        >
                            Save Filter
                        </button>

                        <div className='flex gap-[30px] items-center'>
                            <button
                                className='w-[108px] h-[40px] text-[#0071E7] flex gap-[5px] font-semibold justify-center align-middle text-[14px] pt-[10px] '
                                onClick={handleClearFilter}
                            >
                                <Image src={clearFilter} className='mb-[12px]' />
                                Clear Filter
                            </button>

                            <button
                                className='w-[108px] h-[40px] text-white font-semibold text-[14px] flex justify-center items-center bg-[#0071E7] rounded-[20px] '
                                onClick={handleApplyFilter}
                            >
                                Apply Filter
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Filter;