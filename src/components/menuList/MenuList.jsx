import React from 'react';
import './menulist.css'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import FaceIcon from '@material-ui/icons/Face';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';

const MenuList = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && 'active2')}>
            <div className="left">
                <ul className="ul1">
                    <li className="li3">
                        <PermIdentityOutlinedIcon className="icon1" />
                        <a href="/#">Kirish va ro'yxatdan o'tish</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <ShoppingBasketOutlinedIcon className="icon1" />
                        <a href="/#">Mahsulotlar</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <WhatshotOutlinedIcon className="icon1" />
                        <a href="/#">Yangi</a>
                    </li>
                    <li className="li2">
                        <FaceIcon className="icon1" />
                        <a href="/#">Parvarish</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <FaceOutlinedIcon className="icon1" />
                        <a href="/#">Pardoz</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <i class="fas fa-tshirt"></i>
                        <a href="/#">Moda</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <i class="fab fa-product-hunt"></i>
                        <a href="/#">Parfyumeriya</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <HomeOutlinedIcon className="icon1" />
                        <a href="/#">Uy</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <HealingOutlinedIcon className="icon1" />
                        <a href="/#">Sog'liqni Saqlash</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <i class="fas fa-apple-alt"></i>
                        <a href="/#">Mahsulatolar</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <BusinessCenterOutlinedIcon className="icon1" />
                        <a href="/#">Biznes</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <CardGiftcardOutlinedIcon className="icon1" />
                        <a href="/#">Aksiya</a>
                    </li>
                    <li className="li4">
                        <h3>Batafsil</h3>
                    </li>
                    <li className="li2">
                        <BusinessRoundedIcon className="icon1" />
                        <a href="/#">Kompaniya</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <WidgetsOutlinedIcon className="icon1" />
                        <a href="/#">Xizmat</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <i class="far fa-map"></i>
                        <a href="/#">Ixtiyoriy</a>
                        <i1 class="fas fa-chevron-right"></i1>
                    </li>
                    <li className="li2">
                        <i class="fas fa-satellite-dish"></i>
                        <a href="/#">Jonli efir</a>
                    </li>
                </ul>
            </div>
            <div className="right1"></div>
        </div>
    );
};

export default MenuList;