import React from "react";

import "./about.css";
import about from "../../images/about.svg";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about__container'>
        <h1 className='about__container-heading'>Qui sommes nous ?</h1>

        <p className='about__container-subheading'>
          MARKUS a été conçu et réfléchi par des professionnels de la
          restauration dans le but de résoudre plusieurs problématiques
          rencontrées au quotidien par les restaurateurs : gaspillage
          alimentaire, écart de stocks, perte de rentabilité, turnover
          important....
        </p>

        <p className='about__container-text'>
          Les fondateurs de MARKUS ont créé un outil tout-en-un permettant aux
          restaurateurs de gérer à la fois leurs stocks et leurs ressources
          humaines depuis une seule application et ce de manière performante et
          efficace.
        </p>

        <p className='about__container-text'>
          Doté d’une interface intuitive et ergonomique, MARKUS est l’assistant
          digital indispensable pour tous restaurateurs qui souhaitent avoir un
          suivi précis de son établissement.
        </p>
      </div>
      <img src={about} alt='' />
    </div>
  );
};

export default About;
