import React, { useState } from 'react'
import './New.css';
import New2 from './New2';

export default function New() {

    const [ text, setText ] = useState("Home");
    const [ active, setActive ] = useState(0);

    return (
        <div className="container-fluid">
            <div className="header">
                <a onClick={(e) => {setText("Demo Git"); setActive(true)}} href="#default" className="logo">Demo_Git</a>
                <div className="header-right">
                    <a onClick={(e) => {setText("Home"); setActive(0)}} className={active === 0  ? "active" : ""} href="#home">Home</a>
                    <a onClick={(e) => {setText("Contact"); setActive(1)}} className={active === 1  ? "active" : ""} href="#contact">Contact</a>
                    <a onClick={(e) => {setText("About"); setActive(2)}} className={active === 2  ? "active" : ""} href="#about">About</a>
                </div>
            </div>
            <New2 text={text} />
        </div>
    )
}