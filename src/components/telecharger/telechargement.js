import React from "react";

import Iphone from "../../imgs/iphone.png";
import Android from "../../imgs/android.png";
import Appstore from "../../imgs/app-store.svg";
import GooglePlay from "../../imgs/google-play.svg";
import GetAppIcon from "@material-ui/icons/GetApp";

import smartphone from "../../imgs/smartphone__presentation.png";
import smartphone2 from "../../imgs/smartphone2.png";
import man from "../../imgs/man.svg";

import "./telecharger.css";

import { motion } from "framer-motion";

const Telecharger = () => {
  return (
    <div className='telecharger'>
      <div className='telecharger-page'>
        <div className='telecharger__headings'>
          <h1>Télécharger</h1>
          <h4>
            Adoptez dès maintenant MARKUS pour vous assister dans le pilotage de
            votre restaurant
          </h4>
          <p>
            Disponible <span>gratuitement</span> sur mobile et tablette
          </p>
        </div>

        <div className='telecharger__container'>
          <div className='telecharger__app-android telecharger__card'>
            <div className='telecharger__card__container'>
              <motion.div
                variants={ImageVariants}
                initial='from'
                animate='to'
                className='telecharger__card__image-container'>
                <img src={smartphone} alt='android smartphone' />
              </motion.div>

              <motion.div
                variants={InfoVariants}
                initial='from'
                animate='to'
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
                  <span>Télécharger par</span>
                  <img src={GooglePlay} alt='' />
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className='telecharger__app-apple telecharger__card'>
            <div className='telecharger__card__container'>
              <motion.div
                variants={ImageVariants}
                initial='from'
                animate='to'
                className='telecharger__card__image-container'>
                <img src={smartphone2} alt='android smartphone' />
              </motion.div>

              <motion.div
                variants={InfoVariants}
                initial='from'
                animate='to'
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
                  <span>Télécharger par</span>
                  <img src={Appstore} alt='' />
                </motion.div>
              </motion.div>
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
