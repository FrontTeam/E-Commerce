import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';

function LogReg() {
    return (
        <LogRegStyled>
            <div className="left-content">
                <h4 className="title">
                FABERLIC ONLAYN-DO'KONIGA KIRISH
                </h4>
                <p>
                Agar sizda yaratilgan hisob yozuvingiz bo'lsa, kirishni amalga oshiring.
                </p>
                <a className="login" href="/#">
                    <PersonIcon className="PersonIcon" />
                    Kirish
                </a>
            </div>

            <div className="right-content">
            <h4 className="title">
            RO'YXATDAN O'TISHDAN SO'NG DARHOL 20% CHEGIRMA OLING!
                </h4>
                <p>
                Shuningdek, 26 iyuldan 15 avgustgacha biz birinchi xarid uchun, teksturali niqoblar to'plamini beramiz.
                </p>
                <a className="register"  href="/register">
                    Ro'yxatdan o'tkazish
                </a>
            </div>
        </LogRegStyled>
    )
}


const LogRegStyled = styled.div`
margin-top: 50px;
 display: grid;
 grid-template-columns: 50% 50%;
 padding: 20px 80px 20px 60px ;
 gap: 20px;
 div{
     box-shadow: 2px 0 7px #00000050;
     padding: 30px;
     position: relative;
     .title{
      margin-bottom: 20px;
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
     p{
         margin-bottom: 50px;
         font-size: 16px;
         font-weight: 300;
     }
     .login{
         color: black;
         &:hover{
             background-color: black;
             color: white;
             opacity: .7;
         }
     }
     .register{
         background-color: black;
         color:white;
         &:hover{
             opacity: .7;
             box-shadow: 2px 0 15px #00000070;
         }
     }

     a{
         position: absolute;
         bottom: 10px;
         right: 30px;
         text-decoration: none;
         display: flex;
         justify-content: center;
         align-items: center;
         width: 40%;    
         border: 1px solid #00000050;
         padding: 10px 20px;
         .PersonIcon{
             position: absolute;
             left: 20px;
         }
     }
 }


`;
export default LogReg
