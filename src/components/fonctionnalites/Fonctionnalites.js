import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './fonctionnalites.css';

import Smartphone from '../../imgs/smartphone.png';

import { motion } from 'framer-motion';

const containerVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      // delay: 0.5,
      type: 'spring',
      mass: 0.4, //property on spring
      damping: 8, //property on spring
      when: 'beforeChildren', //attendre qu'il se fasse puis animation du children motion element
      staggerChildren: 0.7, // montrer le children un par un avec un delai de 0.7s
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
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

const Fonctionnalites = () => {
  return (
    <div className='fonctionnalites__wrapper' id='fonctionnalites'>
      <div className='fonctionnalites'>
        <h1 className='fonctionnalites__heading'>
          EKTOR est directement relié à votre caisse enregistreuse
        </h1>
        <div className='fonctionnalites__container'>
          <div className='fonctionnalites__content'>
            <motion.div
              variants={containerVariants}
              initial='from'
              animate='to'>
              <motion.p
                variants={childVariants}
                className='fonctionnalites__nom'>
                <CheckCircleIcon
                  className='fonctionnalites__icon'
                  style={{ fontSize: 50 }}
                />
                Trans
              </motion.p>
              <motion.p
                variants={childVariants}
                className='fonctionnalites__nom'>
                <CheckCircleIcon
                  className='fonctionnalites__icon'
                  style={{ fontSize: 50 }}
                />
                Piloter la performance de votre établissement
              </motion.p>
            </motion.div>
          </div>

          <div className='fonctionnalites__smartphone'>
            <img src={Smartphone} alt='smartphone' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalites;
