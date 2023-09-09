import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import "../components/Number.css";

const NumberItem = ({ number, description }) => (
    <div className="col-lg-3 col-sm-6 mb-5">
        <h1 className="text-white display-4">{number}</h1>
        <h6 className="text-uppercase mt-3 mb-0 text-white">{description}</h6>
    </div>
);

const NumberSection = () => (
    <section id="number" className="section-padding mb-5">
        <div className="container">
            <div className="row g-5">
                <NumberItem
                    number="+ 50 Millions"
                    description="La France compte un peu plus de 50 millions d’internautes"
                />
                <NumberItem
                    number="1,93 milliards"
                    description="c’est le nombre de sites web présents sur la toile à fin 2022 dans le monde."
                />
                <NumberItem
                    number="23%"
                    description="des entreprises en France ne possèdent toujours pas de site web. Une nette progression depuis 2020."
                />
                <NumberItem
                    number="25%"
                    description="font appel à des travailleurs indépendants et 18% sollicitent des agences et entreprises de services numériques."
                />
            </div>
        </div>
    </section>
);

export default NumberSection;
