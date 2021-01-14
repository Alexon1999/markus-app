import React from "react";
import "./home.css";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// import enelevement from "../../imgs/enlevement.png";
import cooker from "../../imgs/cooker1.svg";
import complete from "../../imgs/complete.svg";
import logistics from "../../imgs/logistics.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

const datas = [
  {
    en_tete: "Un outil complet pour gérer votre restaurant de A à Z",
    sous_texte: "Gestion des stocks et management des ressources humaines",
    image: cooker,
    alt: "gestion",
    lien_telecharge: "/telecharger",
  },
  {
    en_tete: "Gérer vos stocks avec précision et anticiper votre activité",
    sous_texte: "Améliorer le suivi de vos stocks et minimiser vos pertes",
    image: logistics,
    alt: "enlevement",
    lien_telecharge: "/telecharger",
  },
  {
    en_tete: "Optimiser le management de vos ressources humaines",
    sous_texte: "Registre du personnel, contrats de travail et lettres types",
    image: complete,
    alt: "chef",
    lien_telecharge: "/telecharger",
  },
];

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__container'>
          {/* <div className='home__carousel-container'> */}
          {/* <Carousel>
          {datas.map((data) => (
            <div className='carousel__item' key={data.alt}>
              <div className='home__hero'>
                <div className='home__hero-hadings'>
                  <h1>Markus</h1>
                  <p>{data.en_tete}</p>
                  <p className='home__subtext'>{data.sous_texte}</p>
                  <a href={data.lien_telecharge} className='telecharger_btn'>
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
        </Carousel> */}

          {/* </div> */}

          <Carousel pause={false}>
            {datas.map((data) => (
              <Carousel.Item interval={5000} className='px-5' key={data.alt}>
                <div className='carousel__item'>
                  <div className='home__hero'>
                    <div className='home__hero-hadings'>
                      <h1>Markus</h1>
                      <p>{data.en_tete}</p>
                      <p className='home__subtext'>{data.sous_texte}</p>
                      <Link
                        to={data.lien_telecharge}
                        className='telecharger_btn'>
                        Télécharger
                      </Link>
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
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
