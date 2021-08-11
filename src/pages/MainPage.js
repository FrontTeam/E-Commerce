import React from 'react'
import LogReg from '../components/LogReg';
import MainCarousel from '../components/MainCarousel';
import MainBanner from "../components/MainBanner"
import Topbar from '../components/topbar/Topbar';

function MainPage() {
    return (
        <div>
            <Topbar />
            <MainCarousel />
            <LogReg />
            <MainBanner/>
        </div>
    )
}

export default MainPage
