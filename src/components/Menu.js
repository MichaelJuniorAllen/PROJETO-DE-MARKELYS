import React from "react";
import Main from "./Main";
import "./componentes.css";
import"./MenuR";


function Menu() {
    return (
        <header>
        <nav>
            <a className="logo" href="#">Maat</a>
            <div className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            </div>
            <ul className="nav-list">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#Destino">Destino</a></li>
                <li><a href="#Conosco">Fale Conosco</a></li>
            </ul>
            
        </nav>
        <Main/>
        
        </header>
    );
}

export default Menu