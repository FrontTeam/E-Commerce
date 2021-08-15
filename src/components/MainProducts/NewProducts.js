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
                <NavLink  className="link" to="/allNewProduct"> Hammasini korish </NavLink>
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
    grid-template-columns:80% 20%;
    align-items:center;
    .link{
        color: black;
        font-size: 18px;
    }
}
`
export default NewProducts
