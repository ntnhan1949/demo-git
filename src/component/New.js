import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './New.css';
import New2 from './New2';
import Form from './form/Form';

export default function New() {

    const [ text, setText ] = useState("Home");
    const [ active, setActive ] = useState(0);

    const changeValue = (text, active) => {
        setText(text);
        setActive(active);
    }

    return (
        <div className="container-fluid">
            <div className="header">
                <Link onClick={() => changeValue("Demo_Git", 0)} to="#default" className="logo">Demo_Git</Link>
                <div className="header-right">
                    <Link onClick={() => changeValue("Home", 0)} className={active === 0  ? "active" : ""} to="/">Home</Link>
                    <Link onClick={() => changeValue("Contact", 1)} className={active === 1  ? "active" : ""} to="#contact">Contact</Link>
                    <Link onClick={() => changeValue("Login", 2)} className={active === 2  ? "active" : ""} to="/login">Login</Link>
                </div>
            </div>
            <New2 text={text} />
            <Routes>
                <Route path='/' element={<New2 />} />
                <Route path='/login' element={<Form />} />
            </Routes>
        </div>
    )
}