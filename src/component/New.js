import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
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
                <Link onClick={() => changeValue("Demo_Git", 0)} to="#default" className="logo">Demo_Git</Link>
                <div className="header-right">
                    <Link onClick={() => changeValue("Home", 0)} className={active === 0  ? "active" : ""} to="/">Home</Link>
                    <Link onClick={() => changeValue("Contact", 1)} className={active === 1  ? "active" : ""} to="#">Contact</Link>
                    <Link onClick={() => changeValue("Branch", 2)} className={active === 2  ? "active" : ""} to="#">Branch</Link>
                </div>
            </div>
            <New2 text={text} />
            {/* <Routes>
                <Route path='/' element={<New2 />} />
            </Routes> */}
        </div>
    )
}