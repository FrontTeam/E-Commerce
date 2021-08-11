import React from 'react';
import './topbar.css';
import { useState } from 'react';
import RoomOutlined from '@material-ui/icons/RoomOutlined'

const Topbar = () => {

    const [closedd , setClosedd] = useState(false)

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
                
            </div>
        </div>
    );
};

export default Topbar;