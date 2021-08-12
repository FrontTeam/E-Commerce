import React from 'react'
import LogReg from '../components/LogReg';
import MainCarousel from '../components/MainCarousel';
import MainBanner from "../components/MainBanner"
import Topbar from '../components/topbar/Topbar';
import NewProducts from '../components/MainProducts/NewProducts';
import MainOffers from '../components/MainOffers/MainOffers';



function MainPage() {
    return (
        <div>
            <Topbar />
            <MainCarousel />
            <LogReg />
            <MainBanner />
            <NewProducts />
            <MainOffers />
            
        </div>
    )
}

export default MainPage
