"use client"
import Content from "./Content";
import { ActiveLargeCapHoverPage, BlendHoverPage, ELSSExposureHoverPage, EquityExposureHoverPage, EquityOthersHoverPage, PortfolioExpenseRatioHoverPage, SectorThematicHoverPage, SmallCapHoverPage, SpecificEquityHoverPage, StarRatedHoverPage } from "./components/Portfolio/Hoverpage/Hoverpage";
import { DataContextProvider } from './context/DataContext';

export default function  Home() {
    
    return (
        
        <DataContextProvider>
            <EquityOthersHoverPage />
        </DataContextProvider>

    );
}