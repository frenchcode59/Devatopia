import React from 'react';

const ContactSection = () => {
    return (
        <section className="section-padding bg-dark mt-3 mb-5" id="contact">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h1 className="display-4 text-white fw-semibold mt-5 mb-5">Nous contacter</h1>
                            <div className="line bg-white"></div>
                            <p className="text-white">
                                Plongez dans notre monde dynamique de développement web ! Chaque
                                ligne de code concrétise des idées. Passionnés du langage
                                digital, nous repoussons l'innovation. Prêt à collaborer ?
                                Contactez-nous dès maintenant !
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form action="">
                            <div className="row mb-5 mt-5">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Nom" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="tel" className="form-control" placeholder="Numéro de téléphone" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Société" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Message" required></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary w-100">
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
