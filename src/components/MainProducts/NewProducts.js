import React from 'react'
import styled from 'styled-components'
import Title from './Title'

function NewProducts() {
    return (
        <NewProductsStyled>
            <Title title={'Yangi narsalar'} link={'Hammasini korish'}/>
        </NewProductsStyled>
    )
}

const NewProductsStyled = styled.div`
padding: 0 60px;
background-color: #cccccc50;
margin-top: 50px;

`
export default NewProducts
