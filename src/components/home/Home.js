import React from "react";
import "./home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import enelevement from "../../imgs/enlevement.png";
import chef from "../../imgs/chef.png";

const datas = [
  {
    en_tete: "Un outil complet pour gérer son restaurant de A à Z",
    sous_texte: "Gestion des stocks et management des ressources humaines",
    image: "",
    alt: "gestion",
    lien_telecharge: "#test",
  },
  {
    en_tete: "Gérer vos stocks avec précision et anticiper votre activité",
    sous_texte: "Améliorer le suivi de vos stocks et minimiser vos pertes",
    image: enelevement,
    alt: "enlevement",
    lien_telecharge: "#test",
  },
  {
    en_tete: "Optimiser le management de vos ressources humaines",
    sous_texte: "Registre du personnel, contrats de travail et lettres types",
    image: chef,
    alt: "chef",
    lien_telecharge: "#test",
  },
];

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__container'>
          <div className='home__carousel-container'>
            <Carousel>
              {datas.map((data) => (
                <div className='carousel__item' key={data.alt}>
                  <div className='home__hero'>
                    <div className='home__hero-hadings'>
                      <h1>Markus</h1>
                      <p>{data.en_tete}</p>
                      <p className='home__subtext'>{data.sous_texte}</p>
                      <a
                        href={data.lien_telecharge}
                        className='telecharger_btn'>
                        Télécharger
                      </a>
                    </div>

                    <div className='home__hero-image'>
                      <img
                        className='home__image'
                        src={data.image}
                        alt={data.alt}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
