import React, { useState } from 'react';
import "./Technologie.css";



const Service = ({ iconClass, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="col-lg-4 col-sm-6 mt-5 mb-5"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`service theme-shadow p-lg-5 p-4 ${
                    isHovered ? 'hovered' : ''
                }`}
            >
                <div className="iconbox">
                    <i className={iconClass}></i>
                </div>
                <h5 className="mt-4 mb-3">{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

const ServicesSection = () => (
    <section id="technologies" className="section-padding border-top">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-4 fw-semibold">
                            Nos services et technologies
                        </h1>
                        <div className="line"></div>
                        <p>
                            Vous avez besoin d'un accompagnement complet ou sur mesure ?<br />
                            Notre équipe vous accompagne dans votre projet et met à
                            disposition ses compétences.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row text-center g-4">
                <Service
                    iconClass="fa-solid fa-laptop fa-2xl"
                    title="Développement web"
                    description="Nous vous accompagnons dans la création de votre site web vitrine ou e-commerce. Nous vous aidons à donner vie à vos idées ! Réalisons ensemble votre projet correspondant au mieux à vos besoins. Un projet sur mesure."
                />
                <Service
                    iconClass="fa-solid fa-mobile-screen-button fa-2xl"
                    title="Développement mobile"
                    description="Nous sommes là pour vous guider tout au long de la conception de votre application mobile. Nous travaillons main dans la main pour concrétiser vos idées et donner vie à vos concepts ! Ensemble, nous allons créer un projet qui répond à vos besoins."
                />
                <Service
                    iconClass="fa-brands fa-audible fa-2xl"
                    title="Audit mobile"
                    description="Vous souhaitez améliorer votre expérience utilisateur, il est important de savoir si le produit est adapté aux besoins de ses utilisateurs. Nous vous accompagnons dans l’analyse de votre application mobile afin de vous proposer des solutions d’amélioration."
                />
                <Service
                    iconClass="fa-solid fa-layer-group fa-2xl"
                    title="UX/UI design"
                    description="Nous vous guidons dans l'élaboration de votre design UX/UI pour site web ou e-commerce. Nous sommes là pour donner forme à vos concepts ! Concrétisons un projet en adéquation avec vos attentes. Une solution personnalisée vous attend."
                />
                <Service
                    iconClass="fa-solid fa-code fa-2xl"
                    title="Méthode de Développement"
                    description="Nous vous guidons dans l'initiation aux développements de base pour la création de votre site web, vitrine ou e-commerce. Nous facilitons l'exploration de vos idées ! Ensemble, nous amorçons votre projet en accord avec vos besoins."
                />
                <Service
                    iconClass="fa-solid fa-list-check fa-2xl"
                    title="Initiation à la gestion de projet"
                    description="Nous vous accompagnons dans l'initiation à la gestion de projet en cycle Agile pour la création de votre site web ou e-commerce. Nous vous guidons dans la concrétisation de vos idées ! Ensemble, nous entamons votre projet en adéquation avec vos besoins."
                />
            </div>
        </div>
    </section>
);

export default ServicesSection;
