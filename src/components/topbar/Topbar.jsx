import React from 'react';
import './topbar.css';
import { useState } from 'react';
import RoomOutlined from '@material-ui/icons/RoomOutlined'
import Search from '@material-ui/icons/Search'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Topbar = () => {

    const [closedd, setClosedd] = useState(false)
    const [larged, setLarged] = useState(false)

    return (
        <div className={"topbar " + (closedd && "active")}>
            <div className="box1">
                <p>Ro'yxatdan o'ting va 20% chegirma oling</p>
                <span>Batafsil</span>
                <div className="closebox" onClick={() => setClosedd(!closedd)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
            </div>
            <div className="box2">
                <div className="minibox1">
                    <div className="miniboxx">
                        <RoomOutlined className="mark" />
                        <p className="p1">Toshkent</p>
                    </div>
                    <span>|</span>
                    <p className="p2">uz</p>
                </div>
                <div className="minibox2">
                    <a href="#">Qulay yetkazib berish</a>
                    <a href="#">Maslahatchilarga</a>
                    <a href="#">Artikul boyicha buyirtma</a>
                    <a href="#">Yordam</a>
                    <a href="#">Buyurtmani qayerdan olish kerak</a>
                </div>
                <div className="minibox3">
                    <a href="#">Kirish</a>
                    <span className="span1">|</span>
                    <a href="#">Royhatdan O'tkazish</a>
                </div>
            </div>
            <div className="box3">
                <div className="child1">
                    <div className="spanbox">
                        <div className="line3"></div>
                        <div className="line4"></div>
                        <div className="line5"></div>
                    </div>
                    <img src="https://img.faberlic.com/medias/faberlic-logo.svg?context=bWFzdGVyfGltYWdlc3w5NTE1fGltYWdlL3N2Zyt4bWx8c3lzLW1hc3Rlci9
                   pbWFnZXMvaDNlL2gwNy9oMDAvOTAxODg4NTkzMTAzOC9mYWJlcmxpY19sb2dvLnN2Z3w1OWZiY2JhNDA4MzkzYzZjNGJmNDgwNDkwODU1NGY3ODdhMmU3NzQwZGRmNjNiZThjOWEwYzZiODE1OWRlNTM2"/>
                </div>
                <div className="child2">
                    <Search className={"search " + (larged && 'active1')} />
                    <input type="text" placeholder="Faberlicdan izlash" className={" " + (larged && 'active1')} onClick={() => setLarged(true)}></input>
                </div>
                <div className="child3">
                    <div className="boxmini1">
                        <ImportContactsTwoToneIcon className="icon2" />
                        <h4>Katalog</h4>
                    </div>
                    <div className="boxmini1">
                        <FavoriteBorderOutlinedIcon className="icon2" />
                        <h4>Tanlanganlar</h4>
                    </div>
                    <div className="boxmini1">
                        <ShoppingCartOutlinedIcon className="icon2" />
                        <h4>Savat</h4>
                    </div>
                </div>
            </div>
            <div className="box4">
                <ul>
                    <a href="/#">yangi</a>
                    <a href="/#">Aksiyalar</a>
                    <a href="/#">parvarish</a>
                    <a href="/#">pardoz</a>
                    <a href="/#">parfyumeriya</a>
                    <a href="/#">moda</a>
                    <a href="/#">uy</a>
                    <a href="/#">sog'liqni saqlash</a>
                    <a href="/#">mahsulatlar</a>
                    <a href="/#">biznes</a>
                </ul>
            </div>
        </div>
    );
};

export default Topbar;