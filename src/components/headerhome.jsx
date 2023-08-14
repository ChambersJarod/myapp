import React from "react";
import './headerhome.css';

export default function headerhome(){
    return(
        <div className="container-headerhome">
            <div className="header">
                <img src='./images/Logo.jpg' alt="Secret Passage" className="logo"/>
                <nav>
                    <ul>
                        <li><a href="/home" className="nav-item">Home</a></li>
                        <li><a href="/search" className="nav-item">Search</a></li>
                        <li><a href="/about" className="nav-item">About</a></li>
                        <li><a href="/signin" className="nav-item">Sign in</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}