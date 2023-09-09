import React from 'react';
import "../App.css";
import "../components/Hero.css";

const HeroSection = () => {
    return (
        <section id="hero" className="min-vh-100 d-flex align-items-center text-center mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-uppercase fw-semibold display-1 text-white">
                            Bienvenue chez devatopia !
                        </h1>
                        <h5 className="text-white mt-3 mb-4">
                            Nous vous accompagnons dans la création, refonte ou améliorations
                            de votre application mobile ou web. Nous vous aidons à donner vie
                            à vos idées ! Réalisons ensemble votre projet correspondant au
                            mieux à vos besoins. Un projet sur mesure.
                        </h5>
                        <div>
                            <a href="#" className="btn btn-primary me-2 mt-5">contactez nous</a>
                            <a href="#" className="btn btn-light ms-3 mt-5">Nos projet</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
