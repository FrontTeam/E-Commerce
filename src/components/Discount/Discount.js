import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import discountBg from "../../images/discount.webp";
import { Button } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from "react";


const Discount = () => {
    
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)
   

	return (
		<DiscountWrapper>
           <div className="block">
            <div className="discount">
                    <img src={discountBg} alt="" />
                    <div className="discountblock">
                        <div onMouseEnter={()=>setOpen("d-block")} className="plusIcon1">
                            <span>+</span>
                        </div>
                        <div  className={"d-none "+(open)}> 
                            <div className="triangle"></div>
                            <div className="shopping">
                                <p className="close" onClick={()=>setOpen("d-none")}><ClearIcon/></p>
                                <Link to="">Гель «Трансформер» iSeul</Link>
                                <div className="titleBlock">
                                    <p>323 000 UZS</p>
                                    <div className="price">
                                        <span>Sizning narxingiz</span>
                                        <span>259 000 UZS</span>
                                    </div>
                                </div>
                                <Button variant="contained" className="btn">Savatga qo'shish</Button>
                                <Link to="" className="lastA">Batafsilroq</Link>
                            </div>
                        </div>
                    </div>
                    <div className="discountBlock">
                        <div onMouseEnter={()=>setOpen2("d-block")} className="plusIcon1">
                            <span>+</span>
                        </div>
                        <div  className={"d-none "+(open2)}> 
                            <div className="triangle"></div>
                            <div className="shopping">
                                <p className="close" onClick={()=>setOpen2("d-none")}><ClearIcon/></p>
                                <Link to="">iSeul ko'z atrofidagi teri uchun gidrogelli patchlar</Link>
                                <div className="titleBlock">
                                    <p>550 000 UZS</p>
                                    <div className="price">
                                        <span>Sizning narxingiz</span>
                                        <span>420 000 UZS</span>
                                    </div>
                                </div>
                                <Button variant="contained" className="btn">Savatga qo'shish</Button>
                                <Link to="" className="lastA">Batafsilroq</Link>
                            </div>
                        </div>
                    </div>
                    <div className="discountBlock">
                        <div onMouseEnter={()=>setOpen3("d-block")} className="plusIcon1">
                            <span>+</span>
                        </div>
                        <div  className={"d-none "+(open3)}> 
                            <div className="triangle"></div>
                            <div className="shopping">
                                <p className="close" onClick={()=>setOpen3("d-none")}><ClearIcon/></p>
                                <Link to="">Крем Blur Beautylab</Link>
                                <div className="titleBlock">
                                    <p>420 000 UZS</p>
                                    <div className="price">
                                        <span>Sizning narxingiz</span>
                                        <span>291 000 UZS</span>
                                    </div>
                                </div>
                                <Button variant="contained" className="btn">Savatga qo'shish</Button>
                                <Link to="" className="lastA">Batafsilroq</Link>
                            </div>
                        </div>
                    </div>
                    <div className="discountBlock">
                        <div onMouseEnter={()=>setOpen4("d-block")} className="plusIcon1">
                            <span>+</span>
                        </div>
                        <div  className={"d-none "+(open4)}> 
                            <div className="triangle"></div>
                            <div className="shopping">
                                <p className="close" onClick={()=>setOpen4("d-none")}><ClearIcon/></p>
                                <Link to="">Bioglow yuz uchun softner</Link>
                                <div className="titleBlock">
                                    <p>178 000 UZS</p>
                                    <div className="price">
                                        <span>Sizning narxingiz</span>
                                        <span>146 000 UZS</span>
                                    </div>
                                </div>
                                <Button variant="contained" className="btn">Savatga qo'shish</Button>
                                <Link to="" className="lastA">Batafsilroq</Link>
                            </div>
                        </div>
                    </div>
                    <div className="discountBlock">
                        <div onMouseEnter={()=>setOpen5("d-block")} className="plusIcon1">
                            <span>+</span>
                        </div>
                        <div  className={"d-none "+(open5)}> 
                            <div className="triangle"></div>
                            <div className="shopping">
                                <p className="close" onClick={()=>setOpen5("d-none")}><ClearIcon/></p>
                                <Link to="">Biomica tiklantiruvchi tonik-zardob</Link>
                                <div className="titleBlock">
                                    <p>129 000 UZS</p>
                                    <div className="price">
                                        <span>Sizning narxingiz</span>
                                        <span>96 900 UZS</span>
                                    </div>
                                </div>
                                <Button variant="contained" className="btn">Savatga qo'shish</Button>
                                <Link to="" className="lastA">Batafsilroq</Link>
                            </div>
                        </div>
                    </div>
                    <div className="discountBlock">
                        <div onMouseEnter={()=>setOpen6("d-block")} className="plusIcon1">
                            <span>+</span>
                        </div>
                        <div  className={"d-none "+(open6)}> 
                            <div className="triangle"></div>
                            <div className="shopping">
                                <p className="close" onClick={()=>setOpen6("d-none")}><ClearIcon/></p>
                                <Link to="">Oceanum ko'z atrofidagi teri uchun gidrogeleviy patchlar</Link>
                                <div className="titleBlock">
                                    <p>550 000 UZS</p>
                                    <div className="price">
                                        <span>Sizning narxingiz</span>
                                        <span>420 000 UZS</span>
                                    </div>
                                </div>
                                <Button variant="contained" className="btn">Savatga qo'shish</Button>
                                <Link to="" className="lastA">Batafsilroq</Link>
                            </div>
                        </div>
                    </div>
            </div>
           

           </div>
        </DiscountWrapper>
	)
}

const DiscountWrapper = styled.div`
.block{
    .discount{
        position: relative;
        img{
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
        }
        .discountBlock{
            .plusIcon1{
                position: absolute;
                top: 105px;
                left: 125px;
                width: 55px;
                height: 55px;
                border-radius: 50%;
                background: hsla(0,0%,100%,.8);
                span{
                    font-size: 45px;
                    position: absolute;
                    left: 50%;
                    top:50%;
                    transform:translate(-50%,-50%)
                }
            }
            .d-none{
                display: none;
            }
            .d-block{
                display: block;
                transition: all 0.15s ease 0s;
            }
            .triangle{
            position: absolute;
            top: 162px;
            left: 132px;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid #fff;
            z-index: 22;
            }
            .shopping{
                position: absolute;
                width: 300px;
                top: 181px;
                left: 110px;
                margin:0 auto;
                display: flex;
                padding: 20px 20px 25px;
                flex-direction: column;
                background: #fff;
                border: 1px solid #f5f5f5;
                &:hover{
                    box-shadow: 0 -2px 25px hsl(0deg 0% 64% / 60%);
                }
                .close{
                    text-align: right;
                    margin:-10px -10px 0 0;
                }
               
                .btn{
                    color: #fff;
                    border-radius:0;
                    background-color: #000;
                    margin: 0 9%;
                    &:hover{
                        background: #303030;
                        color: #fff;
                         box-shadow: 0 0 12px 0 rgb(47 47 47 / 67%)
                    }
                }
                a{
                    padding: 0 9%;
                    font-size: 13px;
                    text-decoration:none;
                    line-height: 1.4rem;
                    color: #3b3b3b;
                    &:hover{
                        text-decoration:underline;
                    }
                }
                .titleBlock{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 12px 0 17px;
                    font-size: 16px;
                    line-height: 22px;
                    p{
                        text-decoration: line-through;
                    }
                    .price{
                        display: flex;
                        flex-direction: column;
                        color: #000;
                        padding-left: 5px;
                        margin-left: 15px;
                        font-size: 12px;
                        border-left: 1px solid #dadada;
                        span:nth-child(2){
                            color: #e0727f;
                            font-weight:700;
                        }
                    }
                }
                
                .lastA{
                    text-align: center;
                    padding-top: 10px;
                }
        
            }
        }
        .discountBlock:nth-child(2){
            z-index: 2;
            .plusIcon1{
                position: absolute;
                top: 325px;
                left: 95px;
            }
            .triangle{
                position: absolute;
                top: 380px;
                left: 105px;
            }
            .shopping{
                position: absolute;
                top: 400px;
                left: 85px;
                
            }
        }
        .discountBlock:nth-child(3){ 
            z-index: 3;
            .plusIcon1{
                position: absolute;
                top: 348px;
                left: 847px;
            }
            .triangle{
                position: absolute;
                top: 405px;
                left: 855px;
            }
            .shopping{
                position: absolute;
                top: 424px;
                left: 830px;
                
            }
        } 
        .discountBlock:nth-child(4){ 
            z-index: 4;
            .plusIcon1{
                position: absolute;
                top: 337.5px;
                left: 1103.5px;;
            }
            .triangle{
                position: absolute;
                top: 393px;
                left: 1111px;
            }
            .shopping{
                position: absolute;
                top: 412px;
                left: 1091px;
                
            }
        } 
        .discountBlock:nth-child(5){ 
            z-index: 4;
            .plusIcon1{
                position: absolute;
                top: 254px;
                left: 1269px;
            }
            .triangle{
                position: absolute;
                top: 310px;
                left: 1272px;
            }
            .shopping{
                position: absolute;
                top: 329px;
                left: 1209px;
                
            }
        } 
        .discountBlock:nth-child(6){ 

            .plusIcon1{
                position: absolute;
                top: 92.5px;
                left: 1405.5px;
            }
            .triangle{
                position: absolute;
                top: 149px;
                left: 1413px;
            }
            .shopping{
                position: absolute;
                top: 168px;
                left: 1209px;
                
            }
        } 

    }
}

        



`

export default  Discount;
