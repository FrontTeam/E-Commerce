import React from 'react';
import styled from 'styled-components'

function Title({title , link}) {
    return (
        <TitleStyled>
            <h2 className="title">
                {title}
            </h2>
            <span></span>
            <a href="/#" className="link">
                {link}
            </a>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`

display: flex;
justify-content: space-between;
padding: 50px 60px;
align-items: center;
span{
    content: '';
    height: 1px;
    width: 60%;
    background-color: #33333350;
    border-radius: 50px;
}
.title{
    text-transform: uppercase;
    font-size: 24px;
}
.link{
    text-decoration: underline;
    font-weight: 400;
    color: black;
    font-size: 24px;
}
`;

export default Title
