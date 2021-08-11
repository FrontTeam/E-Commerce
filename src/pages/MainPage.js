import React from 'react'
import LogReg from '../components/LogReg';
import MainCarousel from '../components/MainCarousel';
import Topbar from '../components/topbar/Topbar';
import Skidka from '../components/скидка/Skidka';

function MainPage() {
    return (
        <div>
            <Skidka />
            <Topbar />
            <MainCarousel />
            <LogReg/>
        </div>
    )
}

export default MainPage
