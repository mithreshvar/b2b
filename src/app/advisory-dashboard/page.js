"use client"
import Content from "./Content";
import { HighestAUMHoverPage, HighestFundHoverPage } from "./components/Portfolio/Hoverpage/Hoverpage";
import { DataContextProvider } from './context/DataContext';

export default function  Home() {
    
    return (
        
        <DataContextProvider>
            <HighestFundHoverPage />
        </DataContextProvider>

    );
}