import React from "react";

import "./presentation.css";

import smartphone from "../../images/smartphone__presentation.png";
import presentateur from "../../images/presentation.svg";

const Presentation = () => {
  return (
    <div className='presentation'>
      <div className='presentation__illustration-container'>
        <img className='presentation__smartphone' src={smartphone} alt='' />
        <img className='presentation__presentateur' src={presentateur} alt='' />
      </div>

      <div className='presentation__content'>
        <h1>Le bras droit des restaurateurs</h1>
        <p>
          MARKUS est né de l’idée d’accompagner les restaurateurs dans le
          pilotage de leur établissement et les aider à faire face aux
          difficultés rencontrées au quotidien
        </p>
      </div>
    </div>
  );
};

export default Presentation;
