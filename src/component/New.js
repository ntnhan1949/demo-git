import React, { useState } from 'react'
import './New.css';
import New2 from './New2';

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
                <a onClick={() => changeValue("Demo_Git", 0)} href="#default" className="logo">Demo_Git</a>
                <div className="header-right">
                    <a onClick={() => changeValue("Home", 0)} className={active === 0  ? "active" : ""} href="#home">Home</a>
                    <a onClick={() => changeValue("Contact", 1)} className={active === 1  ? "active" : ""} href="#contact">Contact</a>
                    <a onClick={() => changeValue("Login", 2)} className={active === 2  ? "active" : ""} href="./form.js">Login</a>
                </div>
            </div>
            <New2 text={text} />
        </div>
    )
}