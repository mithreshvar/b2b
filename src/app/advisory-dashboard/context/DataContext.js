import { createContext, useContext, useEffect, useState } from "react";
const DataContext = createContext();

export function DataContextProvider(props) {
    const [navOpen, setNavOpen] = useState(true);

    return(
        <DataContext.Provider value={{navOpen, setNavOpen}}>
            {props.children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);