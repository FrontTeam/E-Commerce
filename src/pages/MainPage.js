import React from 'react'
import LogReg from '../components/LogReg';
import MainCarousel from '../components/MainCarousel';
import MainBanner from "../components/MainBanner"

function MainPage() {
    return (
        <div>
            <MainCarousel />
            <LogReg />
            <MainBanner/>
        </div>
    )
}

export default MainPage
