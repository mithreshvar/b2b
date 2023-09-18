import { createContext, useContext, useEffect, useState } from "react";
import dummmyData from "../components/partner/PartnerHome/dummyData";
const DataContext = createContext();

export function DataContextProvider(props) {

    const [data, setData] = useState();
    const [popup, setPopup] = useState();
    const [deletePopup, setDeletePopup] = useState();
    const [investor, setInvestor] = useState()
    const [sip, setSip] = useState(false)
    const [addScheme, setAddScheme] = useState(false)

    useEffect(() => {
        let str = localStorage.getItem('data');

        if (str == null) {
            dummmyData();
        }

        const {data} = JSON.parse(localStorage.getItem('data'));
        setData( data )
    }, [])

    function saveData(data) {
        setData(data);
        localStorage.setItem('data', JSON.stringify( {data} ));
    }


    return(
        <DataContext.Provider value={{data, saveData, popup, setPopup, deletePopup, setDeletePopup, investor, setInvestor, sip, setSip, addScheme, setAddScheme}}>
            {props.children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);