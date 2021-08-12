import React from 'react'
import styled from 'styled-components'
import ProductSlides from './ProductSlides'
import Title from './Title'

function NewProducts() {
    return (
        <NewProductsStyled>
            <Title title={'Yangi narsalar'} link={'Hammasini korish'}/>
            <ProductSlides/>
        </NewProductsStyled>
    )
}

const NewProductsStyled = styled.div`

background-color: #cccccc50;
margin-top: 50px;

`
export default NewProducts
