import Title from '../MainProducts/Title';
import React from 'react';
import styled from 'styled-components'
import BestSellerSlides from './BestSellerSlides';

function BestSeller() {
    return (
        <BestSellerStyled>
            <Title title={'Ko`p sotilganlar'} link={'Hammasini ko`rish'} />
            <BestSellerSlides/>
        </BestSellerStyled>
    )
}

const BestSellerStyled = styled.div`


`

export default BestSeller
