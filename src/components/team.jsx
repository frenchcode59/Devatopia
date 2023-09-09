import React from 'react';
import "../App.css";
import "./team.css";

const TeamMember = ({ name, role, imageUrl }) => (
    <div className="col-md-4">
        <div className="team-member image-zoom">
            <div className="image-zoom-wrapper">
                <img src={imageUrl} alt="" className="team-member-image" />
            </div>
            <div className="team-member-content">
                <h4 className="text-white">{name}</h4>
                <p className="mb-0 text-white">{role}</p>
            </div>
        </div>
    </div>
);

const TeamSection = () => (
    <section id="team" className="section-add">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <h1 className="display-4 fw-semibold">Notre Equipe</h1>
                        <div className="line"></div>
                        <p>
                            Bienvenue dans le monde dynamique et créatif de notre équipe de
                            développeurs web ! Plongez avec nous dans l'univers en constante
                            évolution du développement digital, où chaque ligne de code est
                            une opportunité de transformer des idées en réalité. Notre
                            équipe est composée de passionnés qui respirent le langage du
                            web et qui sont déterminés à repousser les frontières de
                            l'innovation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row g-4 text-center justify-content-center align-items-center">
                <TeamMember
                    name="Alexandre Louis"
                    role="Concepteur UI/UX et développeur mobile/web/API"
                    imageUrl="/assets/images/avatarPersonne1.jpg"
                />
                <TeamMember
                    name="Maxime Dehay"
                    role="expert en developpement mobile/web/api"
                    imageUrl="/assets/images/avatarPersonne2.jpg"
                />
                {/* Ajoutez d'autres membres d'équipe ici */}
            </div>
        </div>
    </section>
);

export default TeamSection;
