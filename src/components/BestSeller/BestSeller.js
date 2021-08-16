import Title from '../MainProducts/Title';
import React from 'react';
import styled from 'styled-components'
import BestSellerSlides from './BestSellerSlides';
import {NavLink} from 'react-router-dom'

function BestSeller() {
    return (
        <BestSellerStyled>
            <div className="AllTitle">
                <Title title={'Ko`p sotilganlar'} />
                <NavLink  className="link" to="/allNewProduct"> Hammasini korish </NavLink>
            </div>
            <BestSellerSlides/>
        </BestSellerStyled>
    )
}

const BestSellerStyled = styled.div`

background-color: #cccccc50;
.AllTitle{
    display: grid;
    grid-template-columns:80% 20%;
    align-items:center;
    .link{
        color: black;
        font-size: 18px;
    }
}
`

export default BestSeller
