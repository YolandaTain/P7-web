import React from "react";
import '../assets/css/boton.css';

export default function Boton({name, mensaje, estilos}) {
    
    return (
        <button className={estilos} onClick={() => { alert(mensaje) }}>{name}</button>
    )
}
