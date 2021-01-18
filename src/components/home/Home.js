import React from "react";
import "./home.css";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// import enelevement from "../../imgs/enlevement.png";
import cuisinier from "../../imgs/cuisinier.svg";
import chef from "../../imgs/chef.svg";
import complete from "../../imgs/complete.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";
import { smoothScroll } from "../../utilities";

const datas = [
  {
    en_tete: "Un outil complet pour piloter votre restaurant avec performance",
    sous_texte: "Gestion des stocks et management des ressources humaines",
    image: chef,
    alt: "gestion",
    lien: { route: "/telecharger", nom: "Télécharger" },
  },
  {
    en_tete: "Gérez vos stocks avec précision et maximisez vos marges ",
    sous_texte: "Améliorer le suivi de vos stocks et minimiser vos pertes",
    image: cuisinier,
    alt: "enlevement",
    lien: { route: "/contact", nom: "Contact" },
  },
  {
    en_tete: "Optimiser le management de vos ressources humaines",
    sous_texte:
      "Plus de flexibilité pour une gestion administrative simplifiée",
    image: complete,
    alt: "chef",
    lien: { route: "/fonctionnalites", nom: "Fonctionnalités" },
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
                      {data.lien.nom === "Fonctionnalités" ? (
                        <a
                          href={"#" + data.lien.route.slice(1)}
                          key={data.lien.nom}
                          className='telecharger_btn'
                          onClick={smoothScroll(data.lien.nom)}>
                          {data.lien.nom}
                        </a>
                      ) : (
                        <Link to={data.lien.route} className='telecharger_btn'>
                          {data.lien.nom}
                        </Link>
                      )}
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
