import React from 'react';
import Topbar from '../components/topbar/Topbar';
import MenuList from '../components/menuList/MenuList'
import Footer from '../components/Footer';
import Register from '../components/register/Register';
import { useState } from 'react'

const ForRegister = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Register />
            <Footer />
        </div>
    );
};


export default ForRegister;