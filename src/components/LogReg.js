import React from 'react'
import styled from 'styled-components'

function LogReg() {
    return (
        <LogRegStyled>
            <div className="left-content">
                <h3 className="title">
                ВОЙТИ В ИНТЕРНЕТ-МАГАЗИН FABERLIC
                </h3>
                <p>
                Если у вас уже есть созданная учетная запись, выполните вход.
                </p>
            </div>
            <div className="right-content">
            <h3 className="title">
            ПОЛУЧИТЕ СКИДКУ 20% СРАЗУ ПОСЛЕ РЕГИСТРАЦИИ!
                </h3>
                <p>
                А также с 26 июля по 15 августа дарим за первую покупку набор текстурных масок для лица.
                </p>
            </div>
        </LogRegStyled>
    )
}


const LogRegStyled = styled.div`
margin-top: 50px;
 display: grid;
 grid-template-columns: 50% 50%;
 padding: 0 80px 0 60px ;
 gap: 20px;
 div{
     box-shadow: 2px   0 7px black;
     padding: 20px;
     .title{
      position: relative;
      &::after{
          position: absolute;
          content: '';
          background-color: black;
          width: 50px;
          height: 2px;
          left: 0;
          top: -10px;
      }
     }
 }


`;
export default LogReg
