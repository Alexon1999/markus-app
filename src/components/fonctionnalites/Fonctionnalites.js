import React, { useRef } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./fonctionnalites.css";

// import { motion } from "framer-motion";

import gsap from "gsap";
import { useIntersection } from "react-use";

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
  num,
}) => {
  const fonctionnalites__div = useRef(null);

  const intersection = useIntersection(fonctionnalites__div, {
    root: null, // browser viewport
    rootMargin: "0px",
    threshold: 1,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: { amount: 0.5 },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -40,
      ease: "power2.out",
      stagger: { amount: 0.5 },
    });
  };

  intersection && intersection.intersectionRatio < 1
    ? fadeOut(`.animation${num}`)
    : fadeIn(`.animation${num}`);

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
              <div
                ref={fonctionnalites__div}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: style.alignItems,
                }}
                // variants={containerVariants}
                // initial='from'
                // animate='to'
              >
                {details.map((detail) => (
                  <p
                    key={detail}
                    // variants={childVariants}
                    style={{
                      textAlign: style.textAlign,
                      flexDirection: style.flexDirection,
                    }}
                    className={`fonctionnalites__nom animation${num}`}>
                    <CheckCircleIcon
                      className='fonctionnalites__icon'
                      style={{
                        marginRight: style.marginRight,
                        marginLeft: style.marginLeft,
                        fontSize: 40,
                      }}
                    />
                    {detail}
                  </p>
                ))}
              </div>
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
