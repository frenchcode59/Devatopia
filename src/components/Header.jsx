import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import logo from "../images/logo-devatopia.svg";
import "../App.css";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-white sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} style={{ width: '25%' }} alt="devatopia" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">Technologies et services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Technologies">Notre equipe</a>
                        </li>
                    </ul>
                    <a href="" className="btn btn-primary ms-lg-3">contactez nous</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
