import React, { useRef } from "react";

import Appstore from "../../images/app-store.svg";
import GooglePlay from "../../images/google-play.svg";
import GetAppIcon from "@material-ui/icons/GetApp";

import Android from "../../images/android.png";
import Iphone from "../../images/smartphone__presentation.png";

import "./telecharger.css";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useIntersection } from "react-use";

const Telecharger = () => {
  const telechargerCard1 = useRef(null);
  const telechargerCard2 = useRef(null);

  const intersection_card_1 = useIntersection(telechargerCard1, {
    root: null, // browser viewport
    rootMargin: "0px",
    threshold: 0.8,
  });
  const intersection_card_2 = useIntersection(telechargerCard2, {
    root: null, // browser viewport
    rootMargin: "0px",
    threshold: 0.8,
  });

  // Animation for move
  const moveOut = (element) => {
    gsap.to(element, 1, {
      y: -200,
      // x: -75,
      xPercent: -50,
      left: "50%",
      opacity: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const moveIn = (element) => {
    gsap.to(element, 1, {
      y: 0,
      // x: -75,
      xPercent: -50,
      left: "50%",
      opacity: 1,
      ease: "power4.out",
    });
  };

  intersection_card_1 && intersection_card_1.intersectionRatio < 0.8
    ? moveOut(".img_android")
    : moveIn(".img_android");

  intersection_card_2 && intersection_card_2.intersectionRatio < 0.8
    ? moveOut(".img_apple")
    : moveIn(".img_apple");

  return (
    <div className='telecharger' id='telecharger'>
      <div className='telecharger-page'>
        <div className='telecharger__headings'>
          <h1>Télécharger</h1>
          <h4>
            Adoptez dès maintenant MARKUS pour vous assister dans le pilotage de
            votre restaurant
          </h4>
          <p>
            Bientôt Disponible <span>gratuitement</span> sur mobile et tablette
          </p>
        </div>

        <div className='telecharger__container'>
          <div
            className='telecharger__app-android telecharger__card'
            ref={telechargerCard1}>
            <div className='telecharger__card__container'>
              <div
                // variants={ImageVariants}
                // initial='from'
                // animate='to'
                className='telecharger__card__image-container'>
                <img
                  src={Android}
                  alt='android smartphone'
                  className='img_android telecharger__card__image-container__img'
                />
              </div>

              <div
                // variants={InfoVariants}
                // initial='from'
                // animate='to'
                className='telecharger__card__content'>
                <h1 className='android'>
                  <i className='fab fa-android fa-2x'></i> Android
                </h1>
                <motion.div
                  variants={ButtonTelechargerVariants}
                  whileHover='hover'
                  whileTap='hover'
                  className='telecharger__button android'>
                  <GetAppIcon style={{ color: "rgb(240, 238, 238)" }} />
                  <span>Télécharger sur</span>
                  <img src={GooglePlay} alt='' />
                </motion.div>
              </div>
            </div>
          </div>

          <div
            className='telecharger__app-apple telecharger__card'
            ref={telechargerCard2}>
            <div className='telecharger__card__container'>
              <div
                // variants={ImageVariants}
                // initial='from'
                // animate='to'
                className='telecharger__card__image-container'>
                <img
                  src={Iphone}
                  alt='android smartphone'
                  className='img_apple telecharger__card__image-container__img'
                />
              </div>

              <div
                // variants={InfoVariants}
                // initial='from'
                // animate='to'
                className='telecharger__card__content'>
                <h1 className='apple'>
                  <i className='fab fa-apple fa-2x'></i>Apple
                </h1>
                <motion.div
                  variants={ButtonTelechargerVariants}
                  whileHover='hover'
                  whileTap='hover'
                  className='telecharger__button apple'>
                  <GetAppIcon style={{ color: "rgb(240, 238, 238)" }} />
                  <span>Télécharger sur</span>
                  <img src={Appstore} alt='' />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telecharger;

const ImageVariants = {
  from: {
    y: -50,
    opacity: 0,
  },
  to: {
    // se deplacer 200px de son emplacement origine
    // y :0 place d'origine
    y: 0, //'200px'
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};
const InfoVariants = {
  from: {
    y: 150,
    opacity: 0,
  },
  to: {
    // se deplacer 200px de son emplacement origine
    // y :0 place d'origine
    y: 0, //'200px'
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
};

const ButtonTelechargerVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1],
    // transition: { yoyo: 10 },
    transition: { duration: 3, repeat: Infinity },
  },
};
