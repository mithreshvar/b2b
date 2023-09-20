import { ThemeProvider } from "@mui/material";
import theme from '../../../theme.js'
import CustomSelectField, { CustomTextField } from "../../InputFields/index.js";
import { useState } from "react";
import CustomTable from "../PartnerHome/CustomTable.js";
import { useDataContext } from "@/app/context/DataContext.js";

function Portfolio() {

    const{addScheme} = useDataContext();

    const [productType, setProductType] = useState('')
    const [investorDomicileType, setInvestorDomicileType] = useState('')
    const [portfolioName, setPortfolioName] = useState('')

    const [productErrorMessage, setProductErrorMessage] = useState('')
    const [investorErrorMessage, setInvestorErrorMessage] = useState('')
    const [portfolioErrorMessage, setPortfolioErrorMessage] = useState('')

    const productOptions = ['Mutual Fund']
    const investorOptions = ['Domestic Investor']

    const handleProductChange = (event) => {
        const value = event.target.value;
        setProductType(value);
        
        //validations
        if (value === "") {
            setProductErrorMessage("Product Type cannot be empty");
        }else {
            setProductErrorMessage("");
        }
    };

    const handleInvestorChange = (event) => {
        const value = event.target.value;
        setInvestorDomicileType(value);
        
        //validations
        if (value === "") {
            setInvestorErrorMessage("Investor Domicile Type cannot be empty");
        }else {
            setInvestorErrorMessage("");
        }
    };

    const handlePortfolioChange = (event) => {
        const value = event.target.value;
        setPortfolioName(value);
        
        //validations
        if (value === "") {
            setPortfolioErrorMessage("Portfolio Name cannot be empty");
        }else {
            setPortfolioErrorMessage("");
        }
    };

    const [selectAMC, setSelectAMC] = useState('')
    const [schemeClassification, setSchemeClassification] = useState('')
    const [schemeName, setSchemeName] = useState('')

    const [selectAMCErrorMessage, setSelectAMCErrorMessage] = useState('')
    const [schemeClassificationErrorMessage, setSchemeClassificationErrorMessage] = useState('')
    const [schemeNameErrorMessage, setSchemeNameErrorMessage] = useState('')

    const selectAMCOptions = ['Value 1', 'Value 2', 'Value 3']
    const schemeClassificationOptions = ['Value 1', 'Value 2', 'Value 3']

    const handleAMCChange = (event) => {
        const value = event.target.value;
        setSelectAMC(value);
        
        //validations
        if (value === "") {
            setSelectAMCErrorMessage("AMC cannot be empty");
        }else {
            setSelectAMCErrorMessage("");
        }
    };

    const handleSchemeClassificationChange = (event) => {
        const value = event.target.value;
        setSchemeClassification(value);
        
        //validations
        if (value === "") {
            setSchemeClassificationErrorMessage("Investor Domicile Type cannot be empty");
        }else {
            setSchemeClassificationErrorMessage("");
        }
    };

    const handleSchemeNameChange = (event) => {
        const value = event.target.value;
        setSchemeName(value);
        
        //validations
        if (value === "") {
            setSchemeNameErrorMessage("Portfolio Name cannot be empty");
        }else {
            setSchemeNameErrorMessage("");
        }
    };

    let [data, setData] =  useState([
        ['Aggressive', 'Domestic Investor', 'Mutual Funds'],
        ['Fd Test', 'Domestic Investor', 'Mutual Funds'],
        ['Port', 'Domestic Investor', 'Mutual Funds'],
        ['Port2', 'Domestic Investor', 'Mutual Funds'],
        ['Port5', 'Domestic Investor', 'Mutual Funds'],
        ['Single', 'Domestic Investor', 'Mutual Funds'],
    ])

    function handleSave() {
        setData([ [portfolioName, investorDomicileType, productType], ...data])
        console.log(data)
        setPortfolioName('')
        setInvestorDomicileType('')
        setProductType('')
        setPortfolioErrorMessage('')
        setInvestorErrorMessage('')
        setProductErrorMessage('')
    }

    return (
        <ThemeProvider theme={theme} >
            <div className='flex flex-col h-full gap-y-[20px] overflow-scroll p-[20px]'>

                {
                    (!addScheme) ?
                    <>
                        {/* Search Box */}
                        <div className=" flex flex-col gap-y-[20px] bg-white p-[20px] rounded-[15px]">
                            <h4 className="text-[20px] font-semibold">Create Partner Portfolio</h4>
                            <div className="flex flex-col gap-y-[20px]">
                                <div className="flex gap-x-[50px]">
                                    <CustomSelectField id="productType" label='Product Type' errorMessage={productErrorMessage} value={productType} handleChange={handleProductChange} valueOptions={productOptions} />
                                    <CustomSelectField id="investorDomicileType" label='Investor Domicile Type' errorMessage={investorErrorMessage} value={investorDomicileType} handleChange={ handleInvestorChange } valueOptions={investorOptions} />
                                </div>
                                <CustomTextField id="portfolioName" label='Portfolio Name' errorMessage={portfolioErrorMessage} value={portfolioName} handleChange={handlePortfolioChange}/>
                            </div>
                            <div className="flex gap-x-[20px] mt-[10px] text-[14px] font-bold">
                                <button onClick={()=>{handleSave()}} className='w-[108px] h-[40px] bg-primary text-white rounded-[25px]'>Save</button>
                                <button onClick={()=>{}} className='w-[128px] h-[40px] border-[1px] border-primary text-[#0066CD] rounded-[25px] flex items-center justify-center gap-x-[5px] '>Cancel</button>
                            </div>
                        </div>
                        
                        <div className=" bg-white rounded-[15px]">
                            <CustomTable headers={['Portfolio Name', 'Investor Domicile Type', 'Portfolio Product Type']} data={data} pagination={false} headerStyle={' font-medium '} /> 
                        </div>
                    </>
                    : 
                    <>

                        {/* Search Box */}
                        <div className=" flex flex-col gap-y-[20px] bg-white p-[20px] rounded-[15px]">
                            <h4 className="text-[20px] font-semibold">Domestic Investor : Nri - Small can Funds</h4>
                            <div className="flex flex-col gap-y-[20px]">
                                <div className="flex gap-x-[50px]">
                                    <CustomSelectField id="amc" label='Select AMC' errorMessage={selectAMCErrorMessage} value={selectAMC} handleChange={handleAMCChange} valueOptions={selectAMCOptions} />
                                    <CustomSelectField id="classification" label='Scheme Classification' errorMessage={schemeClassificationErrorMessage} value={schemeClassification} handleChange={ handleSchemeClassificationChange } valueOptions={schemeClassificationOptions} />
                                </div>
                                <CustomTextField id="schemeName" label='Enter scheme Full/Partial Name' errorMessage={schemeNameErrorMessage} value={schemeName} handleChange={handleSchemeNameChange}/>
                            </div>
                            <div className="flex gap-x-[20px] mt-[10px] text-[14px] font-bold">
                                <button onClick={()=>{ }} className='w-[108px] h-[40px] bg-primary text-white rounded-[25px]'>Save</button>
                            </div>
                        </div>

                    </>
                }
            </div>
        </ThemeProvider>
    );
}

export default Portfolio;