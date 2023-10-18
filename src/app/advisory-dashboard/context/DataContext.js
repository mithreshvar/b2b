import { createContext, useContext, useEffect, useState } from "react";
const DataContext = createContext();

export function DataContextProvider(props) {
    const [navOpen, setNavOpen] = useState(true);
    const [showNote, setShowNote] = useState(false);
    const [deletePopup, setDeletePopup] = useState('')

    return(
        <DataContext.Provider value={{navOpen, setNavOpen, showNote, setShowNote, deletePopup, setDeletePopup}}>
            {props.children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);