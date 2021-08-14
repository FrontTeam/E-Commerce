import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ProductSlides from './ProductSlides'
import Title from './Title'

function NewProducts() {
    return (
        <NewProductsStyled>
            <div className="AllTitle">
                <Title title={'Yangi narsalar'} />
                <NavLink to="/allNewProduct"> Hammasini korish </NavLink>
            </div>
            <ProductSlides/>
        </NewProductsStyled>
    )
}

const NewProductsStyled = styled.div`

background-color: #cccccc50;
margin-top: 50px;
.AllTitle{
    display: grid;
    grid-template-columns:90% 10%;
    align-items:center;
}
`
export default NewProducts
