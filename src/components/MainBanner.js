import styled from "styled-components";
import React from 'react';
import Ads from "../images/Ads/adsRegister.jpg"

function MainBanner() {
    return (
        <MainBannerStyled>
            <a href="/#">
                <img src={Ads} alt="sovga" />;
            </a>
        </MainBannerStyled>
    )
}

const MainBannerStyled = styled.div`
margin-top: 50px;
 padding: 0 60px ;
 img{
     width: 100%;
 }
`;

export default MainBanner
