import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./fonctionnalites.css";

import { motion } from "framer-motion";

const containerVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      // delay: 0.5,
      type: "spring",
      mass: 0.4, //property on spring
      damping: 8, //property on spring
      when: "beforeChildren", //attendre qu'il se fasse puis animation du children motion element
      staggerChildren: 0.7, // montrer le children un par un avec un delai de 0.7s
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  from: {
    opacity: 0,
    y: -15,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // delay: 1,
    },
  },
};

const Fonctionnalites = ({
  titre,
  sousTitre,
  details,
  style,
  image,
  bgImage,
}) => {
  return (
    <div className='fonctionnalites__wrapper' id='fonctionnalites'>
      <div className='fonctionnalites'>
        <div
          className='fonctionnalites__container'
          style={{
            flexDirection: style.flexDirection,
            textAlign: style.textAlign,
          }}>
          <div className='fonctionnalites__smartphone'>
            <img
              src={image}
              alt='smartphone'
              style={{ justifySelf: style.alignItems }}
            />
          </div>

          <div className='fonctionnalites__content-container'>
            <h1 className='fonctionnalites__heading'>{titre}</h1>
            <p className='fonctionnalites__subHeading'>{sousTitre}</p>
            <div className='fonctionnalites__content'>
              <motion.div
                variants={containerVariants}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: style.alignItems,
                }}
                initial='from'
                animate='to'>
                {details.map((detail) => (
                  <motion.p
                    key={detail}
                    variants={childVariants}
                    style={{
                      textAlign: style.textAlign,
                      flexDirection: style.flexDirection,
                    }}
                    className='fonctionnalites__nom'>
                    <CheckCircleIcon
                      className='fonctionnalites__icon'
                      style={{
                        marginRight: style.marginRight,
                        marginLeft: style.marginLeft,
                        fontSize: 40,
                      }}
                    />
                    {detail}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={bgImage.image}
        alt='bgimage'
        style={{
          right: bgImage.right,
          left: bgImage.left,
          height: bgImage.height,
        }}
        className='fonctionnalites__bgImage'
      />
    </div>
  );
};

export default Fonctionnalites;
