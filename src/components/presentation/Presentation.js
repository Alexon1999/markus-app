import React, { useRef } from "react";

import "./presentation.css";

import smartphone from "../../images/smartphone__presentation.png";
import presentateur from "../../images/presentation.svg";

import gsap from "gsap";
import { useIntersection } from "react-use";

const Presentation = () => {
  const presentationDiv = useRef(null);
  const smartphoneImg = useRef(null);

  const intersection = useIntersection(presentationDiv, {
    root: null, // browser viewport
    rootMargin: "0px",
    threshold: 0.8,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -150,
      ease: "power4.out",
    });
  };

  // Animation for move
  const moveOut = (element) => {
    gsap.to(element, 1, {
      x: -300,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const moveIn = (element) => {
    gsap.to(element, 1, {
      x: 0,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.8
    ? fadeOut(".presentation__content")
    : fadeIn(".presentation__content");

  intersection && intersection.intersectionRatio < 0.8
    ? moveOut(".presentation__smartphone")
    : moveIn(".presentation__smartphone");

  return (
    <div className='presentation' ref={presentationDiv}>
      <div className='presentation__illustration-container'>
        <img
          className='presentation__smartphone'
          src={smartphone}
          alt=''
          ref={smartphoneImg}
        />
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
