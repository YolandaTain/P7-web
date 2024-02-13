import React from 'react';
import '../assets/css/footer.css';


export default function Footer() {
    const footer = {
        title: 'Yolanda Tain Gutiérrez',
        theme: {
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid black',
        }
    };

    return (
        <div className="footerStyle" style={footer.theme}>
            <div className="titulo">
                <h2>&copy;{footer.title}</h2>
            </div>

        </div>

    )
}