import React from "react";
import '../assets/css/shop.css';
import Vinilo from "./vinilo";
import { useState, useEffect } from 'react';

export default function Shop() {
    const [vinilos, setVinilos] = useState([])
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3031/vinilos')
            .then((response) => {
                return response.json()
            })
            .then((vinilos) => {
                setVinilos(vinilos)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3031/artistas')
            .then((response) => {
                return response.json();
            })
            .then((artistas) => {
                setArtistas(artistas);
            });
    }, []);


    const shop = {
        title: 'Vinilo Record',
    };

    return (
        <>
            <div>
                <h1>Welcome to your {shop.title}</h1>
            </div>
            <div className='container'>
                {
                    vinilos.map((vin, index) => {
                        return (
                            <Vinilo mensaje="Hola" vinilo={vin} artista={artistas.filter(a=>a.nombre === vin.artista)[0]} key={index}></Vinilo>

                        )
                    })
                }
            </div>
           
        </>

    )
}