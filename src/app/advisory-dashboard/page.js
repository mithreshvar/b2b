"use client"
import Content from "./Content";
import DefaultHoverPage, { DebtExposureHoverPage, FiveStarRatedHoverPage, GoldOthersExposureHoverPage, OvernightLiquidExposureHoverPage } from "./components/Portfolio/Hoverpage/HoverPage";
import { DataContextProvider } from './context/DataContext';

export default function  Home() {
    
    return (
        
        <DataContextProvider>
            <FiveStarRatedHoverPage />
        </DataContextProvider>

    );
}