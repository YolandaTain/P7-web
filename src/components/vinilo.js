import React, { useState } from 'react';
import '../assets/css/vinilo.css';
import Boton from './boton';
import Artista from './artista';

export default function Vinilo({ vinilo, mensaje, artista }) {
    const [mostrar, setMostrar] = useState(false);

    return (
        <div className='viniloStyle'>
            <img
                src={vinilo.imagen}
                className="vinilo"
                alt="Vinilo"
                width={250}
                height={250}
            />
            <h2>{vinilo.album}</h2>
            <p><strong>Artist: </strong>{vinilo.artista}</p>
            <p><strong>Genre: </strong>{vinilo.categoria}</p>
            <p><strong>Price: </strong>{vinilo.precio}€</p>
            <div>
                {mostrar && (
                    <Artista artista={artista} />
                )}
            </div>
            <div className="containerBotones">
                {vinilo.stock ? (
                    <Boton estilos="disponibleBoton" name="Buy" mensaje="
                    Purchase made" />
                ) : (
                    <Boton estilos="avisarBoton" name="Not available" mensaje="We'll let you know when vinyl is back in stock." />
                )}
                <button name={mostrar ? "Show Less" : "Show more"}
                    onClick={() => {
                        setMostrar(!mostrar);
                        console.log(mostrar);
                        console.log(artista);
                    }}>{mostrar ? "Show Less" : "Show more"}</button>
            </div>

        </div>
    );
}