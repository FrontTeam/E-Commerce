import React from 'react'
import LogReg from '../components/LogReg';
import MainCarousel from '../components/MainCarousel';
import MainBanner from "../components/MainBanner"
import Topbar from '../components/topbar/Topbar';
import NewProducts from '../components/MainProducts/NewProducts';
<<<<<<< HEAD
import Footer from '../components/Footer';
=======
import MainOffers from '../components/MainOffers/MainOffers';
import BestSeller from '../components/BestSeller/BestSeller';
>>>>>>> 2f39c4bed9b0df73e4cb08202e44973d5d4c67e9



function MainPage() {
    return (
        <div>
            <Topbar />
            <MainCarousel />
            <LogReg />
            <MainBanner />
<<<<<<< HEAD
            <NewProducts/>
            <Footer/>
=======
            <NewProducts />
            <MainOffers />
            <BestSeller /> 
>>>>>>> 2f39c4bed9b0df73e4cb08202e44973d5d4c67e9
        </div>
    )
}

export default MainPage
