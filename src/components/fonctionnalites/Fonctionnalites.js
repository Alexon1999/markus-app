import React, { useRef } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./fonctionnalites.css";

// import { motion } from "framer-motion";

import gsap from "gsap";
import { useIntersection } from "react-use";

// const containerVariants = {
//   from: {
//     opacity: 0,
//   },
//   to: {
//     opacity: 1,
//     transition: {
//       // delay: 0.5,
//       type: "spring",
//       mass: 0.4, //property on spring
//       damping: 8, //property on spring
//       when: "beforeChildren", //attendre qu'il se fasse puis animation du children motion element
//       staggerChildren: 0.7, // montrer le children un par un avec un delai de 0.7s
//     },
//   },
//   exit: {
//     x: "-100vw",
//     transition: {
//       ease: "easeInOut",
//     },
//   },
// };

// const childVariants = {
//   from: {
//     opacity: 0,
//     y: -15,
//   },
//   to: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       // delay: 1,
//     },
//   },
// };

const Fonctionnalites = ({
  titre,
  sousTitre,
  details,
  style,
  image,
  bgImage,
  num,
  animation,
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

  const moveOut = (element) => {
    gsap.to(element, 1, {
      x: animation.x.from,
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
      x: animation.x.to,
      opacity: 1,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 1
    ? fadeOut(`.animation_fonctionnalites_${num}`)
    : fadeIn(`.animation_fonctionnalites_${num}`);
  intersection && intersection.intersectionRatio < 1
    ? moveOut(`.animation_image_${num}`)
    : moveIn(`.animation_image_${num}`);

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
              className={`animation_image_${num}`}
              alt='smartphone'
              style={{
                // justifySelf: style.nom === "right" ? "flex-end" : "flex-start",
                ...(style.nom === "right"
                  ? { marginLeft: "auto" }
                  : { marginRight: "auto" }),
                // width: imageWidth,
              }}
            />
          </div>

          <div className='fonctionnalites__content-container'>
            {titre.map((t) => (
              <h1 key={t} className='fonctionnalites__heading'>
                {t}
              </h1>
            ))}
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
                    className={`fonctionnalites__nom animation_fonctionnalites_${num}`}>
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
