import React from "react";
import logo from '../assets/logo.svg';
import "../assets/App.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="width100">
                <button className="btn-blanco">Colecciones</button>
                <button className="btn-blanco">Contenido</button>
                <button className="btn-negro">Perfil</button>
            </div>
        </div>
    );
}

export default Sidebar;