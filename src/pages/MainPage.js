import React from 'react'
import LogReg from '../components/LogReg';
import MainCarousel from '../components/MainCarousel';
import MainBanner from "../components/MainBanner"
import Topbar from '../components/topbar/Topbar';
import Skidka from '../components/скидка/Skidka';
import NewProducts from '../components/MainProducts/NewProducts';



function MainPage() {
    return (
        <div>
            <Topbar />
            <MainCarousel />
            <LogReg />
            <MainBanner />
            <NewProducts/>
        </div>
    )
}

export default MainPage
