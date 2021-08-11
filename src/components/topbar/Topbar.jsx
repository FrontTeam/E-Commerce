import React from 'react';
import './topbar.css';
import { useState } from 'react';

const Topbar = () => {

    const [closedd , setClosedd] = useState(false)

    return (
        <div className="topbar">
            <div className={"box1 " + (closedd && "active")}>
                <p>Зарегистрируйтесь и получите скидку 20%</p>
                <span>подробное</span>
                <div className="closebox" onClick={() => setClosedd(!closedd)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
            </div>
            <div className="box2">
                <i class="fa fa-map-marker-alt"></i>
            </div>
        </div>
    );
};

export default Topbar;