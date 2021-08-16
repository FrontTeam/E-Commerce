import React from 'react';
import './register.css'
import Regpage from '../../images/regpage.jpg'
import { TextField, Checkbox, FormControl } from '@material-ui/core';
import Search from '@material-ui/icons/Search'
import { Link } from "react-router-dom"


const Register = () => {
    return (
        <div className="register">
            <div className="left2">
                <img src={Regpage} />
            </div>
            <div className="right2">
                <h1>Ro'yxatdan Otmoq</h1>
                <div className="childitem1">
                    <div className="row">
                        <div className="col-6">
                            <TextField id="lastName" type="text" label="Familiya *" fullWidth />
                        </div>
                        <div className="col-7">
                            <div className="col-4">
                                <TextField id="firstname" type="text" label="Ism *" fullWidth />
                            </div>
                            <div className="col-5">
                                <TextField id="FatherName" type="text" label="Otasining ismi *" fullWidth />
                            </div>
                        </div>
                        <div className="col-6">
                            <TextField id="email" type="text" label="E-mail *" fullWidth />
                        </div>
                        <div className="col-6">
                            <TextField id="form-field-phone" name="form-field-phone" type="text" inputMode="text" label="Mobil Telefon *" fullWidth />
                        </div>
                        <div className="col-8">
                            <TextField id="punkt" type="text" label="Aholi punkti *" fullWidth />
                            <div className="box">
                                <div className="searchbox">
                                    <Search className="searchicon" />
                                    <h4>Ro'yxatdan tanlang</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <TextField id="Borth" type="text" label="Tug'ilan sana *" fullWidth />
                        </div>
                        <div className="col-6">
                            <TextField id="Person" type="text" label="Taklif qilingan insonni raqami yoki telefoni *" fullWidth />
                        </div>

                        <h5>* Maydonni to'ldirish uchun majburiy</h5>
                        <div className="Chekbox1">
                            <Checkbox />
                            <p>Men aktsiyalar va maxsus takliflar haqida ogohlantirishlarni qabul qilishga rozilik bildiraman.</p>
                        </div>
                        <div className="Chekbox2">
                            <Checkbox />
                            <p>
                                FABERLIC onlayn-do'koni orqali buyurtmalarni amalga oshirish uchun ushbu shaxsiy ma'lumotlarni qayta ishlashga rozilik bildiraman</p>
                        </div>

                        <button className="regbtn">
                            <Link to="/">Ro'yhatdan O'tish</Link>
                        </button>
                        <Link to="/" className="link1">"Faberlik AJ shaxsiy ma'lumotlarni qayta ishlashga doir siyosati"</Link>
                        <h5 className="h5">
                            "Ro'yxatdan o'tish" tugmasini bosish orqali <Link to="/" className="link2">Ommaviy taklif</Link>shartlariga rozilik bildiraman.
                        </h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;