import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../images/footerImg/footerlogo-v11.webp"
import yandexZen from "../../images/footerImg/Yandex_Zen_logo_icon.svg"
import app from "../../images/footerImg/appstore-banner.png"
import googlePlay from "../../images/footerImg/googleplay-banner.webp"
import {  faFacebookF, faInstagram, faOdnoklassniki, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons';

const youtobe = <FontAwesomeIcon icon={faYoutube} />
const insta = <FontAwesomeIcon icon={faInstagram} />
const ok = <FontAwesomeIcon icon={faOdnoklassniki} />
const face = <FontAwesomeIcon icon={faFacebookF} />
const vk = <FontAwesomeIcon icon={faVk} />


export const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="footerRow">
                    <div className="footerLogo">
                        <a href="3"> 
                            <img src={logo} alt="error img " />
                         </a>
                    </div>
                    <div className="footerMenu">
                        <div className="Company d-flex pright">
                            <span>Kompaniya</span>
                            <Link to="">Faberlic haqida</Link>
                            <Link to="">Korporativ qadriyatlar</Link>
                            <Link to="">Ilmiy ishlanmalar markazi</Link>
                            <Link to="">O'Z Ishlab Chiqarish</Link>
                            <Link to="">Yangiliklar</Link>
                            <Link to="">Katalog yangiliklari</Link>
                        </div>
                        <div className="Service d-flex pright">
                            <span>Xizmat</span>
                            <Link to="">Qanday qilib buyurtma berish kerak</Link>
                            <Link to="">Ro'yxatdan o'tish</Link>
                            <Link to="">To'lov</Link>
                            <Link to="">Yetkazib berish</Link>
                            <Link to="">Qaytish</Link>
                            <Link to="">Savol va Javob</Link>
                        </div>
                        <div className="Optional d-flex pright">
                            <span>Ixtiyoriy</span>
                            <Link to="">Hamkorlik</Link>
                            <Link to="">Topshirish Punktlari</Link>
                            <Link to="">Katalogni varaqlash</Link>
                        </div>
                    </div>
                    <div className="footerSocialNetwork">
                        <span>Ijtimoiy tarmoq</span>
                        <ul>
                            <li><a href="#">{youtobe}</a></li>
                            <li><a href="#">{insta}</a></li>
                            <li><a href="#">{ok}</a></li>
                            <li><a href="#">{vk}</a></li>
                            <li><a href="#">{face}</a></li>
                            <li><a href="#"><img src={yandexZen} alt="error img" /></a></li>
                        </ul>
                        <div className="footerLaast">
                            <p>Ilovani yuklab oling</p>
                            <div className="lastImg">
                                <a href="#"><img src={app} alt="" /></a>
                                <a href="#"><img src={googlePlay} alt="" /></a>
                            </div>
                            <p className="lastP">Copyright © 2021 ОАО «Фаберлик»</p>
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrapper>
       
    )
}
const  FooterWrapper = styled.div`

span{
    font-size: 15px;
    line-height: 1.125rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #222;
}

a{
    font-size: 13px;
    color: #1c1c1c;
    text-decoration: none;
    
    line-height: 1.625rem;
    &:hover{
        text-decoration:underline
    }
}
    .container{
        padding: 32px 80px 37px;
    }
    .footerRow{
        display: flex;
        padding-top: 50px;

    }
    .footerLogo img{
        width: 83px;
    }
    .footerMenu{
        display: flex;
        margin: 0 60px;

    }
    .d-flex{
        display: flex;
        flex-direction:column;
    }

    .pright{
        padding:0 60px;
    }
    .footerSocialNetwork{
        padding-left: 30px;
        ul{

            display: flex;
            flex-wrap:wrap;
            width: 150px;
            margin-top: 15px;
        
        li{
            list-style-type: none;
            margin: 0 18px 13px 0;
            a{
                font-size: 20px;
            }
            img{
                width: 18px;
                height: 18px;
            }
        }
    }
    .footerLaast{
        display:flex;
        flex-direction:column;
        font-size: 13px;
        .lastImg{
            margin: 12px 0;
            a{
                margin: 0 10px;
            }
        }
        p{
            margin-left: 10px;
            color: #222;
        }
        .lastP{
            color: #b3b3b3;
        }
    }
    }

`;

export default Footer;
