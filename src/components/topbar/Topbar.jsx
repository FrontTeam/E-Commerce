import React from 'react';
import './topbar.css';
import { useState } from 'react';
import RoomOutlined from '@material-ui/icons/RoomOutlined'

const Topbar = () => {

    const [closedd, setClosedd] = useState(false)

    return (
        <div className={"topbar " + (closedd && "active")}>
            <div className="box1">
                <p>Зарегистрируйтесь и получите скидку 20%</p>
                <span>подробное</span>
                <div className="closebox" onClick={() => setClosedd(!closedd)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
            </div>
            <div className="box2">
                <div className="minibox1">
                    <RoomOutlined />
                    <p>Toshkent</p>
                    <p>uz</p>
                </div>
                <div className="minibox2">
                    <a href="#">Qulay yetkazib berish</a>
                    <a href="#">Maslahatchilarga</a>
                    <a href="#">Artikul boyicha buyirtma</a>
                    <a href="#">Yordam</a>
                    <a href="#">Buyurtmani qayerdan olish kerak</a>
                </div>
                <div className="minibox3">
                    <a href="">Kirish</a>
                    <a href="">Royhatdan O'tkazish</a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;