import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";
import "./projet.css";

const ProjectSection = () => {
    const images = [
        { url: "./assets/images/project-1.jpg", caption: "Description de l'image 1" },
        { url: "./assets/images/imagePresentation2.jpg", caption: "Description de l'image 2" },
        { url: "./assets/images/imagePresentation3.jpg", caption: "Description de l'image 3" },
        { url: "./assets/images/imagePresentation4.jpg", caption: "Description de l'image 4" },
        { url: "./assets/images/imagePresentation5.jpg", caption: "Description de l'image 5" },
        { url: "./assets/images/imagePresentation6.jpg", caption: "Description de l'image 6" },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openModal = (index) => {
        setSelectedIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <section id="project" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h1 className="display-4 fw-semibold mb-4">Quelques projets réalisés</h1>
                            <div className="line"></div>
                            <p>
                                Découvrez notre expertise à travers ces réalisations concrètes.
                                Chacune de ces images représente le fruit de notre collaboration
                                avec des clients passionnés et déterminés à donner vie à leurs
                                idées. De sites web vitrines à des applications mobiles
                                interactives, en passant par des plateformes e-commerce
                                dynamiques, chaque projet reflète notre engagement envers
                                l'innovation et le design de qualité. Explorez notre galerie
                                pour un aperçu visuel de notre savoir-faire et de notre approche
                                sur mesure dans la concrétisation de vos projets.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {images.map((image, index) => (
                        <div key={index} className="col-md-4">
                            <div className="project-item image-zoom">
                                <div className="image-zoom-wrapper">
                                    <button onClick={() => openModal(index)}>
                                        <img src={image.url} alt={image.caption} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {modalIsOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-button" onClick={closeModal}>&times;</span>
                            <Carousel selectedItem={selectedIndex} showThumbs={false}>
                                {images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image.url} alt={image.caption} />
                                        <p className="legend">{image.caption}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
