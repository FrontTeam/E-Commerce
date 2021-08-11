import React from 'react'
import LogReg from '../components/LogReg';
import MainCarousel from '../components/MainCarousel';
import Topbar from '../components/topbar/Topbar';

function MainPage() {
    return (
        <div>
            <Topbar />
            <MainCarousel />
            <LogReg/>
        </div>
    )
}

export default MainPage
