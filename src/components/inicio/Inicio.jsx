import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import SearchBar from "./SearchBar"
import "./inicio.css"
import { db } from "../../firebase/configFirebase";
import { Link } from "react-router-dom";
import Carrusel from "./Carrusel";


const Inicio = () => {
    return (
        <main className="home-page">
            <h1>Encontra tu estilo</h1>
            <SearchBar />

            {/* Carruseles por categoría */}
            <div className="carrusel-container">
                <Carrusel categoria="Remeras" />
                <Carrusel categoria="Buzos" />
                <Carrusel categoria="Zapatillas" />
            </div>
        </main>
    );
};

export default Inicio;
