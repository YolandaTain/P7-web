import React from "react";
import images from "../assets/img/logo.png";
import '../assets/css/header.css';

export default function Header() {
    const header = {
        title: 'Vinilo Record',
        theme: {
            color: 'black',
            backgroundColor: 'white',
            border: '1px solid black',

        }
    };

    return (
        <div className="headerStyle" style={header.theme}>
            <div>
                <img
                    className="cabecera"
                    src={images}
                    alt="vinilo"
                />

            </div>
            <div className="titulo">
                <h2>{header.title}</h2>
            </div>

        </div>

    )
}