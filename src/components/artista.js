import React from "react";
import '../assets/css/vinilo.css';

export default function Artista({ artista }) {
    console.log("aaaaaaaaaaaa")
    return (
        <div>
            <h2>{artista.nombre}</h2>
            <p><strong>Genre: </strong>{artista.genero}</p>
            <p><strong>Origin: </strong>{artista.origen}</p>
            <p><strong>Years: </strong>{artista.anios_actividad}</p>
        </div>
    )
}
