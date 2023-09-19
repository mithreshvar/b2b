import { createContext, useContext, useEffect, useState } from "react";
import dummmyData from "../components/partner/PartnerHome/dummyData";
const DataContext = createContext();

export function DataContextProvider(props) {

    const [data, setData] = useState();

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
        <DataContext.Provider value={{data, saveData}}>
            {props.children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);