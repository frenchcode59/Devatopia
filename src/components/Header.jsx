import React, { useState, useEffect } from 'react';
import "./Header.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingDown = prevScrollPos < currentScrollPos;

        setIsNavVisible(!isScrollingDown || currentScrollPos < 100); // Masquer la navigation si le défilement est vers le bas ou si la position actuelle est proche du haut

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`navbar navbar-expand-lg bg-body-white sticky-top ${isNavVisible ? "nav-visible" : "nav-hidden"}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/assets/images/logo-devatopia.svg" style={{ width: '25%' }} alt="devatopia" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" id="top" href="#top">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#technologies">Technologies et services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">Notre equipe</a>
                        </li>
                    </ul>
                    <a href="#contact" className="btn btn-primary ms-lg-3">contactez nous</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
