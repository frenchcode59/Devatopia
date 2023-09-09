import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-md-6">
                            <a href="#"><img className="logo" src="/assets/images/logo-devatopia.svg" alt="" /></a>
                            <div className="line bg-black"></div>
                            <p className="text-black">
                                Adresse : avenue Alan Turing 59410 Anzin <br />
                                Téléphone : +33 6 87 36 22 16 <br />
                                Email : contact@devatopia.fr
                            </p>
                        </div>
                        <div className="col-md-6 text-end">
                            <a href="#"><i className="fa-brands fa-twitter fa-2x"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin fa-2x"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram fa-2x"></i></a>
                        </div>
                        <div className="col-md-12 text-center">
                            <p className="text-black">
                                © 2022-2023 DEVATOPIA. Tous droits réservés. <br />
                                <a id="politique" href="/politique-confidentialite">Politique de confidentialité</a> |{' '}
                                <a id="mentions" href="/mentions-legales">Mentions légales</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
